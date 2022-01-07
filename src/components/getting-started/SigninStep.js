import React from "react";

import GoogleLogin from "./GoogleLogin";

import "@fontsource/roboto/500.css";

export default function SigninDialog() {
  return (
    <div>
      <GoogleLogin apiAddress="http://127.0.0.1:8000/v1/auth/settings"/>
    </div>
  );
}
