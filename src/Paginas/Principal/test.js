import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  clicou = () => {
    Alert.alert(
      "Seja Bem-Vindo Viadões",
      "Essa porra é dificil pra caralho, tomara que de tempo de fazer esse BA-GU-LHO "
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./images/logo.jpeg")} style={styles.logo} />

        <TextInput placeholder="Digite seu email" style={styles.input} />

        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => {
            this.clicou();
          }}
        >
          <Text style={styles.botaoText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.welcome}>Trabalho de IHC</Text>
        <Text style={styles.instructions}>React Native</Text>
        <Text style={styles.instructions}>Força Galera, tá acabando!</Text>
      </View>
    );
  }
}
import React, { useEffect, Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"

export default function Principal() {
  useEffect(() => {
    document.title = "Página Principal Maurício";
  }, []);

  return (
    <Grid item xs={12} sm={6} md={3} elevation={15}>
      <form>

      <div>

        <Avatar className={Avatar} src="./images/logo.jpeg">
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
