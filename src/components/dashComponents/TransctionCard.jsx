const TransactionCard = ({ init, amount, credeb, head }) => {
  return (
    <div className="transac-card-container">
      <div className="init-name-head-box">
        <div className={`init-name  ${credeb}`}>{init}</div>
        <div className="headline-time">
          <div className="head-line">{head}</div>
          <div className="alert-time">4:30 PM</div>
        </div>
      </div>
      <div className="amt-text">{amount}</div>
    </div>
  );
};

export default TransactionCard;
