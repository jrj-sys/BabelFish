import "./login.css";

const LoginPage = () => {
  function loginBtn() {
    alert("Login Please");
  }

  function startBtn() {
    alert("Budgeting is Starting ... ");
  }

  function saveBtn() {
    alert("This is saving your info..");
  }
  async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      if (response.ok) {
        document.location.replace("/budget");
      } else {
        alert(response.statusText);
      }
    }
  }

  async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && email && password) {
      const response = await fetch("/api/users", {
        method: "post",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/budget");
      } else {
        alert(response.status.text);
      }
    }
  }

  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);

  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
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
            <button>Sign up</button>
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
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
