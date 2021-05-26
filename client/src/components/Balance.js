import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>

      <h1 className={`balance  ${total <= 0 ? "negative" : "positive"}`}>
        £{numberWithCommas(total)}
      </h1>
      <h4 className={`smallText  ${total <= 0 ? "negative" : "positive"}`}>{` ${
        total <= 0 ? "You need to catch up!" : "You are doing Great!"
      }`}</h4>
    </>
  );
};
