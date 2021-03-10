import React, { useContext } from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";

import { CartContext } from "../../state/CartProvider";

const BasketWrapper = styled.li`
  margin-left: auto;
`;

const BasketIcon: React.FC = () => {
  const { count } = useContext(CartContext);
  return (
    <BasketWrapper>
      <li>
        <Link to="/basket" style={{ textDecoration: "none" }}>
          <h4>Basket({count})</h4>
        </Link>
      </li>
    </BasketWrapper>
  );
};
export default BasketIcon;
