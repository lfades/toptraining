export default () => (
  <div className="card">
    <div className="card-title">
      <span>CYCLE 2</span>
    </div>
    <div className="card-info">
      <p>Designing your brand</p>
    </div>

    <style jsx>{`
      .card {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.35), 0 2px 22px 0 rgba(0, 0, 0, 0.2);
        overflow: hidden;
        text-align: center;
        height: 96px;
      }
      .card-title {
        background-color: #56b5a7;
        color: #fff;
        font-size: 10px;
        font-weight: 600;
        padding: 12px;
      }
      .card-info {
        align-items: center;
        display: flex;
        font-size: 12px;
        height: 60px;
        justify-content: center;
      }
      .card-info p {
        width: 90px;
      }
    `}</style>
  </div>
);
