import { withRuBalance } from "../../helpers/hoc/withRuBalance";
import "./styles.css";

const Card = ({ balance, setBalance, ruBalance }) => {
  return (
    <div className="card">
      <div className="card-block">
        <p>CRYPTO-FINANCE</p>
        <button
          onMouseEnter={() => console.log("---enter")}
          onClick={setBalance}
        >
          Add money
        </button>
      </div>
      <div className="card-block">
        <p>Ruslan</p>
        <p>{balance} $</p>
      </div>
    </div>
  );
};

export default withRuBalance(Card);
