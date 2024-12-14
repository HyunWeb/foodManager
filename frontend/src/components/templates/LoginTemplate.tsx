import React from "react";
import LoginForm from "../molecules/LoginForm";
import Header from "../organisms/Header";

export default function LoginTemplate({ onLogin, onSignUp }) {
  return (
    <div>
      <Header />
      <section>
        <LoginForm onLogin={onLogin} onSignUp={onSignUp} />
      </section>
    </div>
  );
}
