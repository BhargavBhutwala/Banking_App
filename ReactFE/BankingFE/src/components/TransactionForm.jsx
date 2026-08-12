import { useState } from "react";

import "./TransactionForm.css";


function TransactionForm({
  onTransaction
}) {

  const [type, setType] =
    useState("Deposit");

  const [amount, setAmount] =
    useState("");


  const handleSubmit = (e) => {

    e.preventDefault();


    if (
      !amount ||
      Number(amount) <= 0
    ) {

      alert("Invalid amount");

      return;

    }


    onTransaction(
      type,
      Number(amount)
    );


    setType("Deposit");

    setAmount("");

  };


  return (

    <form
      className="transaction-form"
      onSubmit={handleSubmit}
    >

      <h2>
        New Transaction
      </h2>


      <label>
        Transaction Type
      </label>


      <select

        value={type}

        onChange={(e) =>
          setType(e.target.value)
        }

      >

        <option value="Deposit">
          Deposit
        </option>

        <option value="Withdraw">
          Withdraw
        </option>

      </select>


      <label>
        Amount
      </label>


      <input

        type="number"

        value={amount}

        onChange={(e) =>
          setAmount(e.target.value)
        }

        placeholder="Enter Amount"

      />


      <button type="submit">

        Submit Transaction

      </button>

    </form>

  );

}


export default TransactionForm;