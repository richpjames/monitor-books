import { useContext, useEffect } from "react";
import { useActor } from "@xstate/react";

import { CartContext } from "../state/CartProvider";

export const useCancelCheckout = () => {
    const { basketService } = useContext(CartContext);
    const [current, send] = useActor(basketService);

    useEffect(() => {
        if (current.state === 'paying')
            send('CANCEL')
    }, [])

}