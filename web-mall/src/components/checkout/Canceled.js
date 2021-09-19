import React from "react";
import { ContinueShoppingBtn } from "../item/ContinueShoppingBtn";

export const Canceled = () => {
  return (
    <div>
      <h1>Payment failed</h1>
      <p>Payment was not successful</p>
      <ContinueShoppingBtn />
    </div>
  );
};
