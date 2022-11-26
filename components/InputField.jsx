import "./InputField.css";
const InputField = (props) => {
  return (
    <div className={`input-field ${props.className || ""}`}>
      <span>{props.emailAddress || "Email Address * "}</span>
      <span className="usernameexamplecom">
        {props.usernameexamplecom || "username@example.com"}
      </span>
    </div>
  );
};
export default InputField;
