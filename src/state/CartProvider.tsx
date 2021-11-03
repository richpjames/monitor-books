import React, {
  useState,
  useContext,
  useEffect,
  Dispatch,
  createContext,
  SetStateAction,
  ReactNode,
} from "react";
import { ProductsContext } from "./ProductsProvider";
import { shippingCosts, stripePublishableKey } from "../constants";
import { loadStripe } from "@stripe/stripe-js";

interface CartContextT {
  contents: CartContents;
  add: add;
  subtract: subtract;
  get: get;
  set: set;
  remove: remove;
  available: available;
  hasItems: boolean;
  count: number;
  total: number;
  shipping: Shipping;
  setShipping: Dispatch<SetStateAction<Shipping>>;
  onCheckoutClicked: onCheckoutClicked;
}
type AddOrSubtract = (id: string, quantity?: number) => number;
type get = (id: string) => number;
type set = (id: string, quantity: number) => number;
type add = AddOrSubtract;
type subtract = AddOrSubtract;
type remove = (id: string) => void;
type available = (id: string, quantity?: number) => boolean;
type onCheckoutClicked = () => void;
type CartItem = [string, number];
type CartContents = CartItem[];

export const CartContext = createContext<Partial<CartContextT>>({});
/**
 * Manages the shopping cart, which is persisted in local storage.
 * The cart and related methods are shared through context.
 */
const CartProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(ProductsContext);
  let skus: Skus = context.skus || {};
  const [shipping, setShipping] = useState<Shipping>(shippingCosts[0]);

  const [contents, setContents] = useState<CartContents>(() => {
    // Load cart from local storage. Initialize if not present or incorrect.
    let localCart;
    try {
      if (localStorage)
        localCart = JSON.parse(localStorage.getItem("cart") || "");
    } catch (err) {
      console.error(err.message);
    }
    if (!localCart || !Array.isArray(localCart)) return [];
    return localCart;
  });

  // Save cart to local storage after load and on update
  useEffect(() => {
    try {
      if (localStorage) localStorage.setItem("cart", JSON.stringify(contents));
    } catch (err) {
      console.error(err);
    }
  }, [contents]);

  /** An array representing cart items in the form of [{sku}, quantity] */
  const cart = contents.map(([id, quantity]) => {
    return [skus[id], quantity];
  });

  /** The number of items in the cart */
  const count: number = contents.reduce(
    (sum, [_, quantity]) => sum + quantity,
    0
  );

  /** The total cost of the items in the cart */
  const total: number = contents.reduce(
    (sum, [id, quantity]) => sum + skus[id]?.price * quantity,
    0
  );

  /**
   * Returns the quantity of a sku in the cart.
   * @param {string} id The id of the sku
   * @returns {number}
   */
  const get: get = function (id) {
    if (!contents.length) return 0;
    const cartItem = contents.find((item) => item[0] === id);
    return cartItem ? cartItem[1] : 0;
  };

  /**
   * Sets the quantity of a sku in the cart, if available.
   * @param {string} id The id of the sku
   * @param {number} quantity The requested quantity
   *
   * @returns {number} The cart quantity after the operation; `-1` if requested amount unavailable
   */
  const set: set = function (id, quantity) {
    if (!available(id, quantity)) return -1;
    const index = contents.findIndex((item) => item[0] === id);
    setContents(([...state]) => {
      if (index !== -1) {
        state[index] = [id, quantity];
      } else {
        state.push([id, quantity]);
      }
      return state;
    });
    return quantity;
  };

  /**
   * Increments the quantity of sku in the cart.
   * @param {string} id The id of the sku
   * @param {number} [quantity=1] The quantity to add
   * @returns {number} The cart quantity after the operation; `-1` if requested amount unavailable
   */
  const add: add = function (id, quantity = 1) {
    const currentQuantity = get(id);
    return set(id, quantity + currentQuantity);
  };

  /**
   * Decrements the quantity of sku in the cart.
   * @param {string} id The id of the sku
   * @param {number} [quantity=1] The quantity to subtract
   * @returns {number} The cart quantity after the operation
   */
  const subtract: subtract = function subtract(id, quantity = 1) {
    const currentQuantity = get(id);
    const newQuantity = Math.max(0, currentQuantity - quantity);
    return set(id, newQuantity);
  };

  /**
   * Remove a sku from the cart.
   * @param {string} id The id of the sku
   * @returns {void}
   */
  const remove: remove = function (id) {
    setContents((state) => {
      return state.filter((item) => item[0] !== id);
    });
  };

  /**
   * Checks whether an item is available for purchase.
   * @param {string} id The id of the sku
   * @param {number} [quantity=1] The requested quantity
   * @returns {boolean} Whether a purchase of the quantity would be possible
   */
  const available: available = function (id, quantity = 1) {
    const cartQuantity = get(id);
    const sku = skus[id];
    if (!sku) {
      console.error(`Sku with id ${id} not found`);
      return false;
    } else if (sku.inventory) {
      return sku.inventory - cartQuantity >= quantity;
    } else {
      return false;
    }
  };
  const onCheckoutClicked: onCheckoutClicked = () => {
    const lineItems = cart.map(([sku, quantity]) => ({
      price: sku.priceId,
      quantity: quantity,
    }));
    lineItems.push({ price: shipping.priceId, quantity: "1" });
    const stripePromise = loadStripe(stripePublishableKey || "");

    fetch("/.netlify/functions/create-checkout", {
      method: "POST",
      body: JSON.stringify({ lineItems, env: process.env.NODE_ENV }),
    })
      .then(async (response) => {
        const { sessionId } = await response.json();
        typeof window !== undefined &&
          localStorage &&
          localStorage.setItem("cart", "{}");
        const stripe = await stripePromise;
        if (stripe) {
          const stripeResponse = await stripe.redirectToCheckout({
            sessionId: sessionId,
          });

          if (stripeResponse.error) {
            alert("something went wrong. try again or contact editor@monitorbooks.co.uk, you have not been charged"
            );
          }
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `error.message`.
        }
      })
      .catch((_) =>
        alert(
          "something went wrong. try again or contact editor@monitorbooks.co.uk, you have not been charged"
        )
      );
  };
  const hasItems = contents.length > 0;

  const ctx: CartContextT = {
    contents,
    add,
    subtract,
    get,
    set,
    remove,
    available,
    hasItems,
    count,
    total,
    shipping,
    setShipping,
    onCheckoutClicked,
  };
  if (typeof window !== 'undefined' && (window as any).Cypress && !(window as any).ctx) {
    (window as any).ctx = ctx;
  }
  return (
    <CartContext.Provider value={{ ...ctx }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
