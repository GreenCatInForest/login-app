export const Login = () => {
  return (
    <div>
      <form className="loginForm">
        <label for="email" className="form-label">
          E-mail
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="form-control"
          placeholder="Enter your email address"
        />
        <label for="password" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="text"
          id="password"
          className="form-control"
          placeholder="Enter your password"
        />
      </form>
      <button type="submit">Login</button>
    </div>
  );
};
