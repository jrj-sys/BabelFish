import "./login.css";

const LoginPage = () => {
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
          <form>
            <label className="login-label" classfor="cam" aria-hidden="true">
              Sign up
            </label>
            <input
              className="input-login"
              type="text"
              id="username-signup"
              placeholder="User name"
              required=""
            />
            <input
              className="input-login"
              type="email"
              id="email-signup"
              placeholder="Email"
              required=""
            />
            <input
              className="input-login"
              type="password"
              id="password-signup"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button className="Buttons">Sign up</button>
          </form>
        </div>

        <div class=" login-form login">
          <form>
            <label className="login-label" for="cam" aria-hidden="true">
              Login
            </label>
            <input
              className="input-login"
              type="email"
              id="email-login"
              placeholder="Email"
              required=""
            />
            <input
              className="input-login"
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
  );
};
export default LoginPage;
