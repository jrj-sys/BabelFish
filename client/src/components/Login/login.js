import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import "./login.css";
import { LOGIN, ADD_USER } from '../../utils/mutation'
import Auth from '../../utils/auth'


const LoginPage = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);

  // signup form
  const handleSignupFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //login form
  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="page">
      <div class="main">
        <input
          className="input-login"
          type="checkbox"
          id="cam"
          aria-hidden="true"
        />

        <div class=" signup-form signup">
          <form onSubmit={handleSignupFormSubmit}>
            <label className="login-label" classfor="cam" aria-hidden="true">
              Sign up
            </label>
            <input
              className="input-login"
              type="text"
              id="username-signup"
              placeholder="User name"
              required=""
              onChange={handleSignupChange}
            />
            <input
              className="input-login"
              type="email"
              id="email-signup"
              placeholder="Email"
              required=""
              onChange={handleSignupChange}
            />
            <input
              className="input-login"
              type="password"
              id="password-signup"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={handleSignupChange}
            />
            <button type='submit' className="Buttons">Sign up</button>
          </form>
        </div>

        <div class=" login-form login">
          <form onSubmit={handleLoginFormSubmit}>
            <label className="login-label" for="cam" aria-hidden="true">
              Login
            </label>
            <input
              className="input-login"
              type="email"
              id="email-login"
              placeholder="Email"
              required=""
              onChange={handleLoginChange}
            />
            <input
              className="input-login"
              type="password"
              id="password-login"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={handleLoginChange}
            />
            <button type="submit" className="buttons">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
