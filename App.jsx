import "./App.css";
import arrowRight from "./assets/arrowRight.svg";
import wormiesStayingHome from "./assets/wormiesStayingHome.png";
import InputField from "./components/InputField";
const App = () => {
  const propsData = {
    inputField: {
      usernameexamplecom: "username@example.com",
      emailAddress: "Email Address * ",
    },
    inputField1: {
      emailAddress: "Create Password * ",
      usernameexamplecom: "",
    },
    inputField2: {
      emailAddress: "Confirm Password * ",
      usernameexamplecom: "",
    },
  };
  return (
    <div className="sign-up">
      <div className="flex-container">
        <span className="learn-sign">learnSign</span>
        <button className="rectangle-12">
          <span className="sign-up-1">Sign Up</span>
        </button>
        <button className="rectangle-12-1">
          <span className="log-in">Log In</span>
        </button>
      </div>
      <span className="register-as-user">Register as User</span>
      <div className="flex-container-1">
        <div className="flex-container-2">
          <InputField
            className="input-field-instance-1"
            {...propsData.inputField}
          />
          <InputField
            className="input-field-1-instance"
            {...propsData.inputField1}
          />
          <InputField
            className="input-field-2-instance"
            {...propsData.inputField2}
          />
          <button className="rectangle-12-2">
            <span className="sign-up-2">Sign Up</span>
            <img className="arrow-right" src={arrowRight} />
          </button>
        </div>
        <img className="wormies-staying-home" src={wormiesStayingHome} />
      </div>
      <span className="already-have-an-acco">
        Already have an account? Login here.
      </span>
    </div>
  );
};
export default App;
