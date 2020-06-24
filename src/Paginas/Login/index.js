import React, { useEffect } from "react";

export default function Principal() {
  useEffect(() => {
    document.title = "Login Maurício";
  }, []);
  return <div>Login</div>;
}
