import StepsCycle from './StepsCycle';

export default () => (
  <div className="box-steps">
    <StepsCycle />

    <div className="steps">
      <div>
        <div className="line" />
        <div className="wrapper-steps">
          <div className="step">
            <div className="flex-c">
              <span>1</span>
            </div>
            <p>Your image</p>
          </div>
          <div className="step">
            <div className="flex-c">
              <span>2</span>
            </div>
            <p>Social media sells</p>
          </div>
        </div>
      </div>
      <div className="info-step">
        <div className="step">
          <div>
            <span>3</span>
          </div>
        </div>
        <div className="active-step">
          <div className="green-title">
            <h3>Know your processes and programs</h3>
          </div>
          <div className="blue-part">
            <p>
              <i className="icon-ok" />Build out your page
            </p>
            <p>
              <i className="icon-ok" />Rev up your page
            </p>
          </div>
          <div className="white-part">
            <p>
              <i className="icon-dot" />Reach your clients and referral partners
            </p>
            <p>Get out there and use it</p>
            <p>Pitch it</p>
          </div>
        </div>
      </div>
      <div className="last-steps">
        <div className="line" />
        <div className="wrapper-steps">
          <div className="step">
            <div className="flex-c">
              <span>4</span>
            </div>
            <p />
          </div>
          <div className="step">
            <div className="flex-c">
              <span>5</span>
            </div>
            <p>Understand your market to explode your business</p>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .box-steps {
        display: grid;
        grid-template-columns: 140px 1fr 244px;
        grid-template-rows: 1fr;
        margin-top: 39px;
      }
      .flex-c {
        display: flex;
        justify-content: center;
      }
      .steps {
        display: grid;
        grid-template-columns: 380px 320px 1fr;
      }
      .line {
        height: 3px;
        opacity: 0.25;
        background-color: #ebecf1;
        box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.35), 0 2px 22px 0 rgba(0, 0, 0, 0.2),
          inset 0 0 3px 0 rgba(41, 41, 41, 0.25);
        margin-top: 16px;
      }
      .wrapper-steps {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 17px;
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
      .active-step {
        background: #fff;
        font-size: 12px;
        border-radius: 10px;
        height: 150px;
        overflow: hidden;
      }
      .active-step p {
        margin-top: 0px;
      }
      .green-title {
        background: #0fc440;
        color: #fff;
        padding: 9px 30px;
        text-transform: uppercase;
      }
      .green-title h3 {
        font-weight: normal;
        font-size: 10px;
      }
      .blue-part {
        background: #2ca8ff42;
        height: 47px;
        padding-left: 11px;
        padding-top: 3px;
      }
      .blue-part p {
        color: #2da8ff;
        margin-bottom: 2.5px;
        margin-top: 3px;
      }
      .blue-part i {
        margin-right: 5px;
        font-size: 10px;
      }
      .white-part p:first-child {
        color: #2fc540;
        font-weight: bold;
        padding-left: 3px;
        margin-bottom: 4px;
      }
      .white-part i {
        font-size: 20px;
        position: relative;
        top: 3px;
        left: 1px;
      }
      .white-part p {
        padding-left: 30px;
        margin-bottom: 4px;
        color: #696969;
      }
      .info-step {
        position: relative;
      }
      .info-step .step {
        margin-left: 30px;
        position: absolute;
        top: -42px;
      }
      .info-step .step span {
        color: #2fc540;
        background: #ffffff;
        font-weight: bold;
      }
      .last-steps .step p {
        width: 120px;
        height: 50px;
      }
      .last-steps .step {
        margin-right: 40px;
        margin-left: 40px;
      }
      .last-steps .line {
        background: #ffffff;
        opacity: 1;
      }
      .last-steps .step span {
        background: #ffffff;
        color: #696969;
        font-weight: bold;
      }
    `}</style>
  </div>
);
