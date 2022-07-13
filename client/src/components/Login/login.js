import "./login.css";

const LoginPage = () => {
  return (
    <body>
      <div className="loginPage">
        <div className="Main"></div>
        <div class="main">
          <input
            className="inputs"
            type="checkbox"
            id="cam"
            aria-hidden="true"
          />

          <div class=" signup-form signup">
            <form>
              <label className="labels" for="cam" aria-hidden="true">
                Sign up
              </label>
              <input
                className="inputs"
                type="text"
                id="username-signup"
                placeholder="User name"
                required=""
              />
              <input
                className="inputs"
                type="email"
                id="email-signup"
                placeholder="Email"
                required=""
              />
              <input
                className="inputs"
                type="password"
                id="password-signup"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button className="buttons">Sign up</button>
            </form>
          </div>

          <div class=" login-form login">
            <form>
              <label className="labels" for="cam" aria-hidden="true">
                Login
              </label>
              <input
                className="inputs"
                type="email"
                id="email-login"
                placeholder="Email"
                required=""
              />
              <input
                className="inputs"
                type="password"
                id="password-login"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button className="buttons">Login</button>
            </form>
          </div>
        </div>
      </div>
    </body>
  );
};
export default LoginPage;
