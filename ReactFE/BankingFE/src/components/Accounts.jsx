import {
  useState,
  useReducer,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  useTransition,
  useDeferredValue,
  useRef,
  useId
} from "react";

import TransactionForm from "./TransactionForm";
import AccountDetails from "./AccountDetails";

import "./Accounts.css";


const initialAccounts = [

  {
    accountNo: "ACC101",
    holderName: "Bhargav Bhutwala",
    balance: 50000
  },

  {
    accountNo: "ACC102",
    holderName: "Rahul Sharma",
    balance: 25000
  }

];


function reducer(state, action) {

  switch (action.type) {

    case "ADD":

      return [
        ...state,
        action.payload
      ];


    case "DELETE":

      return state.filter(
        account =>
          account.accountNo !== action.payload
      );


    case "UPDATE":

      return state.map(account =>

        account.accountNo ===
        action.payload.accountNo

          ? {
              ...account,
              balance: action.payload.balance
            }

          : account

      );


    default:

      return state;

  }

}


function Accounts() {

  // -----------------------------
  // useReducer
  // -----------------------------

  const [accounts, dispatch] = useReducer(
    reducer,
    initialAccounts
  );


  // -----------------------------
  // useState
  // -----------------------------

  const [accountNo, setAccountNo] =
    useState("");

  const [holderName, setHolderName] =
    useState("");

  const [balance, setBalance] =
    useState("");


  // -----------------------------
  // useTransition
  // -----------------------------

  const [isPending, startTransition] =
    useTransition();


  // -----------------------------
  // useDeferredValue
  // -----------------------------

  const deferredAccounts =
    useDeferredValue(accounts);


  // -----------------------------
  // useRef
  // -----------------------------

  const accountInputRef =
    useRef(null);


  // -----------------------------
  // useId
  // -----------------------------

  const accountId =
    useId();


  // -----------------------------
  // useEffect
  // -----------------------------

  useEffect(() => {

    document.title =
      `Accounts (${accounts.length})`;

  }, [accounts]);


  // -----------------------------
  // useLayoutEffect
  // -----------------------------

  useLayoutEffect(() => {

    accountInputRef.current?.focus();

  }, []);


  // -----------------------------
  // useMemo
  // -----------------------------

  const totalBalance =
    useMemo(() => {

      return accounts.reduce(
        (sum, account) =>
          sum + account.balance,
        0
      );

    }, [accounts]);


  // -----------------------------
  // useCallback
  // -----------------------------

  const deleteAccount =
    useCallback((accountNo) => {

      dispatch({

        type: "DELETE",

        payload: accountNo

      });

    }, []);


  // -----------------------------
  // Add Account
  // -----------------------------

  const addAccount = () => {

    if (
      !accountNo ||
      !holderName ||
      !balance
    ) {

      alert("Fill all fields");

      return;
    }


    startTransition(() => {

      dispatch({

        type: "ADD",

        payload: {

          accountNo,

          holderName,

          balance: Number(balance)

        }

      });

    });


    setAccountNo("");

    setHolderName("");

    setBalance("");

  };


  // -----------------------------
  // Transaction
  // -----------------------------

  const handleTransaction =
    (type, amount) => {

      if (accounts.length === 0) {
        return;
      }


      const account = accounts[0];

      let newBalance =
        account.balance;


      if (type === "Deposit") {

        newBalance += amount;

      }


      if (type === "Withdraw") {

        newBalance -= amount;

      }


      dispatch({

        type: "UPDATE",

        payload: {

          accountNo:
            account.accountNo,

          balance:
            newBalance

        }

      });

    };


  return (

    <div className="accounts">

      <h1>🏦 Accounts</h1>


      {/* -----------------------------
          API Account Details
          ----------------------------- */}

      <AccountDetails />


      {/* -----------------------------
          Total Balance
          ----------------------------- */}

      <h2>

        Total Balance:

        ₹ {totalBalance.toLocaleString()}

      </h2>


      {isPending && (

        <p>
          Updating accounts...
        </p>

      )}


      {/* -----------------------------
          Account Form
          ----------------------------- */}

      <div className="account-form">

        <label htmlFor={accountId}>
          Account Number
        </label>

        <input

          id={accountId}

          ref={accountInputRef}

          value={accountNo}

          onChange={(e) =>
            setAccountNo(e.target.value)
          }

          placeholder="Account Number"

        />


        <input

          value={holderName}

          onChange={(e) =>
            setHolderName(e.target.value)
          }

          placeholder="Holder Name"

        />


        <input

          type="number"

          value={balance}

          onChange={(e) =>
            setBalance(e.target.value)
          }

          placeholder="Opening Balance"

        />


        <button onClick={addAccount}>

          Add Account

        </button>

      </div>


      {/* -----------------------------
          Accounts Table
          ----------------------------- */}

      <table>

        <thead>

          <tr>

            <th>
              Account
            </th>

            <th>
              Holder
            </th>

            <th>
              Balance
            </th>

            <th>
              Delete
            </th>

          </tr>

        </thead>


        <tbody>

          {deferredAccounts.map(
            (account) => (

              <tr
                key={account.accountNo}
              >

                <td>
                  {account.accountNo}
                </td>


                <td>
                  {account.holderName}
                </td>


                <td>

                  ₹ {account.balance.toLocaleString()}


                  {account.balance < 0 && (

                    <p
                      style={{
                        color: "red",
                        fontWeight: "bold"
                      }}
                    >

                      ⚠️ Overdraft Alert

                    </p>

                  )}

                </td>


                <td>

                  <button

                    onClick={() =>
                      deleteAccount(
                        account.accountNo
                      )
                    }

                  >

                    Delete

                  </button>

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>


      {/* -----------------------------
          Transaction Form
          ----------------------------- */}

      <TransactionForm
        onTransaction={
          handleTransaction
        }
      />

    </div>

  );

}


export default Accounts;