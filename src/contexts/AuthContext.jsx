import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUser")
      ? { email: localStorage.getItem("currentUser") }
      : null,
  );

  function signUp(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email)) {
      return { success: false, message: "Email already exists" };
    }

    const newUser = { email, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", email);

    setUser(newUser);

    return { success: true, message: "User registered successfully" };
  }

  function logIn(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) return { success: false, message: "Invalid email or password" };

    localStorage.setItem("currentUser", email);
    setUser(user);

    return { success: true, message: "Logged in successfully" };
  }

  function logOut() {
    localStorage.setItem("currentUser", "");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signUp, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}
