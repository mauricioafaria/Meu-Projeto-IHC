import React, { useEffect } from "react";

export default function Principal() {
  useEffect(() => {
    document.title = "Cadastro Maurício";
  }, []);
  return <div>Cadastroo Novo Login</div>;
}
