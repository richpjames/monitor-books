import React, { useContext } from "react"

import { CartContext } from "../../state/CartProvider"

import { BasketItemsList } from "./BasketItemsList";
import { CheckoutSection } from "./CheckoutSection";

export const BasketPage = () => {
    const cartData = useContext(CartContext);

    return <>
        <BasketItemsList />
        {cartData.hasItems && <CheckoutSection />}
    </>
}