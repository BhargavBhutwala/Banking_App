import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  deposit,
  withdraw
} from "../store/store";


function BalanceController() {

  const balance = useSelector(
    state => state.balance.balance
  );


  const dispatch = useDispatch();


  const handleDeposit = () => {

    const amount = Number(
      prompt("Enter deposit amount:")
    );


    if (!amount || amount <= 0) {

      alert("Invalid amount");

      return;

    }


    dispatch(
      deposit(amount)
    );

  };


  const handleWithdraw = () => {

    const amount = Number(
      prompt("Enter withdrawal amount:")
    );


    if (!amount || amount <= 0) {

      alert("Invalid amount");

      return;

    }


    if (amount > balance) {

      alert("Insufficient balance");

      return;

    }


    dispatch(
      withdraw(amount)
    );

  };


  return (

    <div>

      <h2>
        Balance Controller
      </h2>


      <button
        onClick={handleDeposit}
      >

        Deposit

      </button>


      <button
        onClick={handleWithdraw}
      >

        Withdraw

      </button>

    </div>

  );

}


export default BalanceController;