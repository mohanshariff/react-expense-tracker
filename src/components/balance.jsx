import React, { useContext } from "react";
import { GlobalState } from "../contexts/globalContext";

export default function Balance() {
  const { transaction } = useContext(GlobalState);
  const amount = transaction.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="total">
      <h1>Balance: ${total}</h1>
    </div>
  );
}
