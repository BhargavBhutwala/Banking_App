import { useState } from "react";
import "./TransactionForm.css";

function TransactionForm({ onTransaction }) {

  const [type, setType] = useState("Deposit");

  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (Number(amount) <= 0) {

      alert("Invalid amount");

      return;

    }

    onTransaction(type, Number(amount));

    setType("Deposit");

    setAmount("");

  };

  return (

    <form
      className="transaction-form"
      onSubmit={handleSubmit}
    >

      <h2>Transaction</h2>

      <select

        value={type}

        onChange={(e) =>
          setType(e.target.value)
        }

      >

        <option>Deposit</option>

        <option>Withdraw</option>

      </select>

      <input

        type="number"

        value={amount}

        onChange={(e) =>
          setAmount(e.target.value)
        }

        placeholder="Amount"

      />

      <button>

        Submit

      </button>

    </form>

  );

}

export default TransactionForm;