import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Login.css'

function Login({isAuthenticated, handleAuthentication}) {
    const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle change for username input
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  // Handle change for password input
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  // Toggle password visibility
//   const showAndHidePassword = () => {
//     setIsShowPassword(!isShowPassword);
//   };

  // On successful login
  const successLogin = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 });
    console.log("inside successlogin fn")
    handleAuthentication();
    // Navigate to the home page after successful login
    navigate('/')
  };

  // On failed login
  const failedLogin = (errorMsg) => {
    setShowErrorMsg(true);
    setErrorMsg(errorMsg);
  };

  // Submit form handler
  const onSubmitForm = async (event) => {
    event.preventDefault();
    const apiLoginUrl = 'https://apis.ccbp.in/login';
    const userDetails = { username, password };

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(apiLoginUrl, options);
    const data = await response.json();

    if (response.ok === true) {
      successLogin(data.jwt_token);
    } else {
      failedLogin(data.error_msg);
    }
  };

  // Check if user is already logged in
  const jwtToken = Cookies.get('jwt_token');
  if (jwtToken) {
    handleAuthentication();
    return <Navigate to="/" />;
  } else{
    // return <Navigate to="/login" />;
  }

  return (
    <div className="BgContainer">
      <div className="LoginContainer">
        <h1 className="LoginHeading">Login</h1>
        <form className="FormContainer" onSubmit={onSubmitForm}>
          <label htmlFor="userName" className="LabelElement">
            USERNAME
          </label>
          <input
            type="text"
            id="userName"
            className="InputElement"
            onChange={onChangeUsername}
            value={username}
            placeholder="Enter username"
          />
          <label htmlFor="password" className="LabelElement">
            PASSWORD
          </label>
          <input
            type={isShowPassword ? 'text' : 'password'}
            id="password"
            className="InputElement"
            onChange={onChangePassword}
            value={password}
            placeholder="Enter password"
          />

          {showErrorMsg && <p className="ErrorMsg">*{errorMsg}</p>}

          <button className="LoginButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
