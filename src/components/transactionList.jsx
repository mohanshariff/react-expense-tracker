import React, { useContext } from "react";
import { GlobalState } from "../contexts/globalContext";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transaction } = useContext(GlobalState);

  return (
    <div>
      <h2>Your saved items</h2>
      <ul id="list" className="list">
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} Transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
