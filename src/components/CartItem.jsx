import React from "react";
import storeItems from "../data/items.json";
function CartItem() {
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return <div>CartItem</div>;
}

export default CartItem;
