import cart from "./cart";

describe("reducers", () => {
  describe("cart", () => {
    const initialState = {
      addedIds: [],
      quantityById: {},
      shipping: { price: 2, priceId: "foo", region: "space" },
    };

    it("should provide the initial state", () => {
      expect(cart(undefined, {})).toEqual(initialState);
    });

    it("should handle CHECKOUT_REQUEST action", () => {
      expect(cart(undefined, { type: "CHECKOUT_REQUEST" })).toEqual(
        initialState
      );
    });

    it("should handle CHECKOUT_FAILURE action", () => {
      expect(
        cart({}, { type: "CHECKOUT_FAILURE", cart: "cart state" })
      ).toEqual("cart state");
    });

    it("should handle ADD_TO_CART action", () => {
      expect(cart(initialState, { type: "ADD_TO_CART", productId: 1 })).toEqual(
        {
          addedIds: [1],
          quantityById: { 1: 1 },
          shipping: { price: 2, priceId: "foo", region: "space" },
        }
      );
    });
    it("should handle DECREMENT_IN_CART action", () => {
      const state = {
        addedIds: [1],
        quantityById: { 1: 1 },
      };
      expect(cart(state, { type: "DECREMENT_IN_CART", productId: 1 })).toEqual({
        addedIds: [1],
        quantityById: { 1: 0 },
      });
    });

    it("DECREMENT_IN_CART does not cause quantity to be negative", () => {
      const state = {
        addedIds: [1],
        quantityById: { 1: 0 },
      };
      expect(cart(state, { type: "DECREMENT_IN_CART", productId: 1 })).toEqual({
        addedIds: [1],
        quantityById: { 1: 0 },
      });
    });

    it("should handle REMOVE_FROM_CART action", () => {
      const state = {
        addedIds: [1],
        quantityById: { 1: 1 },
      };
      expect(cart(state, { type: "REMOVE_FROM_CART", productId: 1 })).toEqual({
        addedIds: [],
        quantityById: {},
      });
    });

    describe("when product is already in cart", () => {
      it("should handle ADD_TO_CART action", () => {
        const state = {
          addedIds: [1, 2],
          quantityById: { 1: 1, 2: 1 },
        };

        expect(cart(state, { type: "ADD_TO_CART", productId: 2 })).toEqual({
          addedIds: [1, 2],
          quantityById: { 1: 1, 2: 2 },
        });
      });
    });
  });
});
