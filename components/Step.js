export default ({ step, text }) => (
  <div className="step">
    <div className="flex-c">
      <span>{step}</span>
    </div>
    <p>{text}</p>

    <style jsx>{`
      .flex-c {
        display: flex;
        justify-content: center;
      }
      .step {
        text-align: center;
        margin-right: 65px;
        margin-left: 50px;
      }
      .step span {
        background: #2da8ff;
        font-size: 14px;
        z-index: 100;
        border-radius: 53px;
        color: #fff;
        width: 30px;
        height: 30px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .step p {
        font-size: 12px;
        color: #808080;
      }
    `}</style>
  </div>
);
