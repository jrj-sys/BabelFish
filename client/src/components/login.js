import "./login.css";

const LoginPage = () => {
  return (
    <div className="page">
      <div class="main">
        <input type="checkbox" id="cam" aria-hidden="true" />

        <div class=" signup-form signup">
          <form>
            <label for="cam" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              id="username-signup"
              placeholder="User name"
              required=""
            />
            <input
              type="email"
              id="email-signup"
              placeholder="Email"
              required=""
            />
            <input
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
            <label for="cam" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              id="email-login"
              placeholder="Email"
              required=""
            />
            <input
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
