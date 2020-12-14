import cart from "./cart";

describe("reducers", () => {
  describe("cart", () => {
    const defaultShipping = {
      price: 2,
      priceId: "price_1HMwTgJs9ciiqN7OnYGR5rOp",
      region: "UK",
    };

    const initialState = {
      addedIds: [],
      quantityById: {},
      shipping: defaultShipping,
      loading: false,
      config: { showSlideshow: false, hasError: false },
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
      ).toEqual({
        ...initialState,
        config: { ...initialState.config, hasError: true },
      });
    });

    it("should handle ADD_TO_CART action", () => {
      const state = { ...initialState, addedIds: [1], quantityById: { 1: 1 } };
      expect(cart(state, { type: "ADD_TO_CART", productId: 1 })).toEqual({
        addedIds: [1],
        quantityById: { 1: 2 },
        shipping: {
          price: 2,
          priceId: "price_1HMwTgJs9ciiqN7OnYGR5rOp",
          region: "UK",
        },
        loading: false,
        config: { showSlideshow: false, hasError: false },
      });
    });
    it("should handle DECREMENT_IN_CART action", () => {
      const state = {
        ...initialState,
        addedIds: [1],
        quantityById: { 1: 1 },
      };
      expect(cart(state, { type: "DECREMENT_IN_CART", productId: 1 })).toEqual({
        addedIds: [1],
        quantityById: { 1: 0 },
        shipping: {
          price: 2,
          priceId: "price_1HMwTgJs9ciiqN7OnYGR5rOp",
          region: "UK",
        },
        loading: false,
        config: { showSlideshow: false, hasError: false },
      });
    });

    it("DECREMENT_IN_CART does not cause quantity to be negative", () => {
      const state = {
        ...initialState,
        addedIds: [1],
        quantityById: { 1: 0 },
      };
      expect(cart(state, { type: "DECREMENT_IN_CART", productId: 1 })).toEqual({
        ...initialState,
        addedIds: [1],
        quantityById: { 1: 0 },
      });
    });

    it("should handle REMOVE_FROM_CART action", () => {
      const state = {
        ...initialState,
        addedIds: [1],
        quantityById: { 1: 1 },
      };
      expect(cart(state, { type: "REMOVE_FROM_CART", productId: 1 })).toEqual({
        ...initialState,
        addedIds: [],
        quantityById: {},
      });
    });

    describe("when product is already in cart", () => {
      it("should handle ADD_TO_CART action", () => {
        const state = {
          ...initialState,
          addedIds: [1, 2],
          quantityById: { 1: 1, 2: 1 },
        };

        expect(cart(state, { type: "ADD_TO_CART", productId: 2 })).toEqual({
          ...initialState,
          addedIds: [1, 2],
          quantityById: { 1: 1, 2: 2 },
        });
      });
    });
  });
});
