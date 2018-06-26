import Steps from './Steps';

export default () => (
  <div className="timeline">
    <div>
      <div className="titles">
        <h3>Current training</h3>
        <h4>Up next: Reach your clients and referral partners</h4>
      </div>
      <div className="box-right">
        <div className="nav-icons">
          <span>
            <i className="icon-bell" />
            <i className="icon-down-micro" />
          </span>
          <span>
            <i className="icon-user-outline" />
            <i className="icon-down-micro" />
          </span>
        </div>
      </div>
    </div>

    <div className="clear" />

    <Steps />

    <style jsx>{`
      .timeline {
        padding: 0 41px;
      }
      .timeline {
        background: #292929;
        padding-top: 38px;
        padding-bottom: 30px;
      }
      .box-right {
        float: right;
      }
      .titles {
        float: left;
      }
      .titles h3,
      .titles h4 {
        color: #ffffff;
        font-size: 12px;
      }
      .titles h3 {
        font-weight: 500;
        margin-bottom: 6px;
        text-transform: uppercase;
      }
      .titles h4 {
        font-weight: bold;
      }
      .box-right i {
        color: #bbb;
        font-size: 16px;
      }
      .box-right .icon-down-micro {
        font-size: 12px;
        margin-right: 13px;
      }
      .clear {
        clear: both;
      }
    `}</style>
  </div>
);
