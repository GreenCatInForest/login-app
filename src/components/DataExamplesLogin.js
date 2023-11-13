import emailIcon from "../assets/images/icons/icons8-email-50.png";
import passwordIcon from "../assets/images/icons/icons8-password-50.png";

export const DataExamplesLogin = () => {
  return (
    <div className="dataExamplesLogin">
      <h4 className="dataExamplesTitle">
        Try to login using examples, provided below:
      </h4>

      <div className="dataExamplesData">
        <img src={emailIcon} alt="" />
        <p>JohnSnow@wall.co.north</p>
        <img src={passwordIcon} alt="" />
        <p>KnowNothingExceptTheNightKingisREAL1111</p>

        <img src={emailIcon} alt="" />
        <p>Arya_no_one_stark@braavos.com</p>
        <img src={passwordIcon} alt="" />
        <p>StickThemWithThePoinEnd</p>

        <img src={emailIcon} alt="" />
        <p>Email: 1</p>
        <img src={passwordIcon} alt="" />
        <p>Password: 1</p>
      </div>
    </div>
  );
};
