import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import "./login.css";
import { LOGIN, ADD_USER } from "../../utils/mutation";
import Auth from "../../utils/auth";
import Logo from "../Logo";

const LoginPage = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [login, { error }] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);

  // signup form
  const handleSignupFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
        preferredLang: preferredLanguage,
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
    <body className="body">
      <div className="loginPage">
        <Logo />

        <div className="Main"></div>
        <div class="main">
          <input
            className="inputs"
            type="checkbox"
            id="cam"
            aria-hidden="true"
          />

          <div class="signup-form signup">
            <form onSubmit={handleSignupFormSubmit}>
              <label className="labels" for="cam" aria-hidden="true">
                Sign Up
              </label>
              <input
                className="inputs"
                type="username"
                name="username"
                id="username-signup"
                placeholder="Username"
                required=""
                onChange={handleSignupChange}
              />
              <input
                className="inputs"
                type="email"
                name="email"
                id="email-signup"
                placeholder="Email"
                required=""
                onChange={handleSignupChange}
              />
              <input
                className="inputs"
                type="password"
                name="password"
                id="password-signup"
                placeholder="Password"
                required=""
                onChange={handleSignupChange}
              />
              <div className="select">
                <select
                  name="languages"
                  id="language-select"
                  value={preferredLanguage}
                  onChange={(e) => {
                    setPreferredLanguage(e.target.value);
                  }}
                >
                  <option value="">--Please select your preferred language--</option>
                  <option value="en">English</option>
                  <option value="zh">Chinese (Simplified)</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="ar">Arabic</option>
                  <option value="ru">Russian</option>
                  <option value="hi">Hindi</option>
                  <option value="en">Bengali</option>
                  <option value="pt">Portugeuse</option>
                  <option value="ja">Japanese</option>
                  <option value="id">Indonesian</option>
                  <option value="it">Italian</option>
                  <option value="ka">German</option>
                  <option value="el">Greek</option>
                  <option value="nl">Dutch</option>
                  <option value="af">Afrikaans</option>
                </select>
              </div>
              <button className="buttons" type="submit">
                Sign Up
              </button>
            </form>
          </div>

          <div class=" login-form login">
            <form onSubmit={handleLoginFormSubmit}>
              <label className="labels" for="cam" aria-hidden="true">
                Login
              </label>
              <input
                className="inputs"
                type="email"
                name="email"
                id="email-login"
                placeholder="Email"
                required=""
                onChange={handleLoginChange}
              />
              <input
                className="inputs"
                type="password"
                name="password"
                id="password-login"
                placeholder="Password"
                required=""
                onChange={handleLoginChange}
              />
              <button type="submit" className="buttons">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};

export default LoginPage;
