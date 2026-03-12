import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AuthProvider, { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { signUp, user, logOut, logIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (isLoginMode) {
      result = logIn(data.email, data.password);
    } else {
      result = signUp(data.email, data.password);
    }
  
    if (!result.success) {
      setError(result.message);
    } else {
      navigate("/");
    }

    console.log(result);
  }

  return (
    <AuthProvider>
      <div className="page">
        <div className="container">
          <div className="auth-container">
            {<p>User logged in: {user ? user.email : ""}</p>}

            <h1 className="page-title">{isLoginMode ? "Log In" : "Sign Up"}</h1>
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
              {error && <div className="error-message">{error}</div>}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="form-error">{errors.email.message}</span>
                )}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be less than 12 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <span className="form-error">{errors.password.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-block btn-large btn-primary"
              >
                {isLoginMode ? "Log In" : "Sign Up"}
              </button>
              <div className="auth-switch">
                <p>
                  {isLoginMode
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <span
                    className="auth-link"
                    onClick={() => setIsLoginMode(!isLoginMode)}
                  >
                    {isLoginMode ? "Sign up" : "Log in"}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
