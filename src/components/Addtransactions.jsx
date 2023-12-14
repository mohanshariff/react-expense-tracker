import React, { useContext, useState } from "react";
import { GlobalState } from "../contexts/globalContext";

export default function Addtransactions() {
  const { Add } = useContext(GlobalState);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const submitted = (e) => {
    e.preventDefault();
    const newItems = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };
    Add(newItems);
    setText("");
    setAmount("");
  };
  return (
    <div className="list-header">
      <h3>Add new transaction</h3>
      <form onSubmit={submitted}>
        <div className="form-control">
          <label htmlFor="text">Budget</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}
