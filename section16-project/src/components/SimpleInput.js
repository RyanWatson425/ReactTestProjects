import { useRef, useState } from "react";

const SimpleInput = (props) => {
  //in reality you only use Ref or State
  //if you want to reset the entered input or do instant validation, use state
  //if you want to just look at the value, use ref, since state may be overkill
 // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ''; //this can be a const because it will get recreated whenever component reevaluates
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    //nameInputRef.current.value = ''; => NOT GOOD PRACTICE, DON'T MANIPULATE THE DOM DIRECTLY
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Name</label>
        <input
          type="text"
          id="email"
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Email must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
