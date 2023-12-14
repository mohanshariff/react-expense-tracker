import "./App.css";
import Header from "./components/header";
import Balance from "./components/balance";
import IncomExpense from "./components/incomExpense";
import TransactionList from "./components/transactionList";
import Addtransactions from "./components/Addtransactions";
import { GlobalProvider } from "./contexts/globalContext";
function App() {
  return (
    <>
      <div className="wrapper">
        <GlobalProvider>
          <div className="compo-container">
            <div className="right">
              <Header />
              <Balance />
              <IncomExpense />
              <Addtransactions />
            </div>
            <TransactionList />
          </div>
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;
