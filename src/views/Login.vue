<template>
  <div>

    <v-card width="400px">

      <v-card-title class="pb-0">
        <h1 class="titulo">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email"
            v-model="email"
            prepend-icon="mdi-account-circle"
          ></v-text-field>

          <v-text-field
            label="Password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text color="#25b535" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>

<script>
import API from "../Services/Api";

export default {
  data() {
    return {
      email: "",
      showPassword: false,
      password: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be more than 8 characters"
      ]
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password
      };
      API.login(user)
        .then(response => {
          if (response.token) {
            localStorage.setItem("token", response.token);
            this.$root.$emit("login", true);
            this.$router.push("/myAccount");
          } else {
            console.log(response);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="scss" scoped>
#brand {
  font-family: "Russo One", sans-serif;
  color: white;
  font-size: 48px;
  margin-top: 25%;
  #titulo {
    color: #ffcb15;
  }
}
.main {
  margin-top: 50%;
}
.buttons {
  position: fixed;
  width: 100%;
  margin-bottom: 40px;
  padding: 10px;
  bottom: 0;
}
</style>