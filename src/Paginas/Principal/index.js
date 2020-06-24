import React, { useEffect, Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

export default function Principal() {
  useEffect(() => {
    document.title = "Página Principal Maurício";
  }, []);

  return (
    <Grid item xs={12} sm={6} md={3} elevation={15}>
      <form>
        <div>
          <Avatar className={Avatar} src="./images/logo.jpeg" width="100px">
            M
          </Avatar>
          <Typography component="h1" variant="h5">
            mauricio
          </Typography>
          <TextField
            fullWidth
            margin="5"
            required
            id="outlined-basic"
            label="Usuário/E-mail"
            variant="outlined"
          />

          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type="password"
          />

          <Button
            sm="4"
            md="3"
            color="primary"
            variant="contained"
            href="./Login"
          >
            Login
          </Button>

          <Button color="secondary" variant="contained" href="./Cadastro">
            Novo usuário
          </Button>
        </div>
      </form>
    </Grid>
  );
}
