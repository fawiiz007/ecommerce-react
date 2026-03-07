import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    alert(isLogin ? "Logged in successfully!" : "Signed up successfully!");

  }
  
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">{isLogin ? "Log In" : "Sign Up"}</h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
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
              {isLogin ? "Log In" : "Sign Up"}
            </button>
            <div className="auth-switch">
              <p>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span
                  className="auth-link"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign up" : "Log in"}
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
