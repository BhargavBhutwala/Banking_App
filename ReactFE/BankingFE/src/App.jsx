import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  deposit,
  withdraw
} from "./store/store";

import BalanceController
  from "./components/BalanceController";


function App() {

  const balance = useSelector(
    state => state.balance.balance
  );


  const dispatch = useDispatch();


  const handleDeposit = () => {

    dispatch(
      deposit(5000)
    );

  };


  const handleWithdraw = () => {

    dispatch(
      withdraw(2000)
    );

  };


  return (

    <div>

      <h1>
        🏦 Banking Application
      </h1>

      <h2>
        Current Balance:
        ₹ {balance.toLocaleString()}
      </h2>


      <button
        onClick={handleDeposit}
      >

        Deposit ₹5,000

      </button>


      <button
        onClick={handleWithdraw}
      >

        Withdraw ₹2,000

      </button>


      <BalanceController />

    </div>

  );

}


export default App;