export default () => (
  <div className="block-bottom">
    <div className="normal-card">
      <h1>What's Next?</h1>
      <p className="stronger">It's time to book your touchpoint</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. eat debitis minima repellendus in,
        odit voluptatibus provident! debitis minima repellendus in, odit voluptatibus provident!
      </p>
      <div className="btn">
        <button>Book Touchpoint</button>
      </div>
    </div>
    <div className="normal-card box-2">2</div>
    <div className="normal-card box-3">3</div>

    <style jsx>{`
      .block-bottom {
        padding: 0 41px;
      }
      .block-bottom {
        background: #ebecf1;
      }
      .block-bottom {
        display: grid;
        grid-template-columns: 390px 1fr;
        padding-top: 50px;
        grid-template-rows: 270px 270px;
        background: #ebecf1;
      }
      .normal-card {
        background: #ffffff;
        box-shadow: 0px 0px 11px #a9a9a9;
        padding: 15px;
        color: #505050;
      }
      .normal-card h1 {
        font-size: 23px;
        font-weight: normal;
        margin-top: 17px;
      }
      .normal-card p {
        font-size: 14px;
      }
      .normal-card .stronger {
        font-weight: 800;
        color: #111;
        font-size: 14px;
      }
      .normal-card .btn {
        text-align: center;
      }
      .btn button {
        background: #2da8ff;
        color: #fff;
        border: none;
        padding: 11px 25px;
        border-radius: 4px;
        margin-top: 20px;
        font-weight: lighter;
        font-size: 12px;
      }
      .box-2 {
        margin-left: 60px;
        grid-column: 2/3;
        grid-row: 1/3;
      }
      .box-3 {
        margin-top: 25px;
      }
    `}</style>
  </div>
);
