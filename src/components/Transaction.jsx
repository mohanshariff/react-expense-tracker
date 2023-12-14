import React, { useContext } from "react";
import { GlobalState } from "../contexts/globalContext";

export default function Transaction({ Transaction }) {
  const { deleted } = useContext(GlobalState);
  const sign = Transaction.amount < 0 ? "-" : "+";
  return (
    <li className={Transaction.amount < 0 ? "minus" : "plus"}>
      {Transaction.text}
      <span>
        {sign}${Math.abs(Transaction.amount)}
      </span>
      <button className="delete-btn" onClick={() => deleted(Transaction.id)}>
        x
      </button>
    </li>
  );
}
