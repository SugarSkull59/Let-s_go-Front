<template>
  <div>
    <v-card  width="400px" >
      <v-card-title class="pb-0">
        <h1 class="titulo">Signup</h1>
      </v-card-title>
      <v-card-text>
        <v-form >
          <v-text-field
            label="First-Name"
            v-model="firstName"
            prepend-icon="mdi-account-circle"
            :rules="userRules"
          ></v-text-field>
        <v-text-field
            label="Last-Name"
            v-model="lastName"
            prepend-icon="mdi-account-circle"
            :rules="userRules"
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            :rules="emailRules"
            prepend-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            label="Password"
            v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-text-field
            label="Mobile"
            v-model="mobile"
            type="text"
          ></v-text-field>

            <v-text-field
            label="Fecha de nacimiento"
            v-model="user_birth"
            type="date"
          ></v-text-field>
           <v-col class="d-flex" cols="6">
            <v-select
              :items="itemsGenero"
              label="Gender"
              v-model="genderSelected"
              dense
              outlined
            ></v-select>
          </v-col>

             <v-col class="d-flex" cols="6">
            <v-select
              :items="items"
              label="Country"
              v-model="countrySelected"
              dense
              outlined
            ></v-select>
          </v-col>

        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text color="#25b535"  @click="signup">Signup</v-btn>
      </v-card-actions>

    </v-card>

  </div>
</template>

<script>
import API from "../Services/Api";

export default {
  data() {
    return {
      showPassword: false,
      userPassword: "",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 8 || "Password must be more than 8 characters"
      ],
      firstName: "",
      lastName: "",
      userRules: [v => !!v || "Username is required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      mobile:"",
      user_birth:"",
      genderSelected:"",
      itemsGenero: ["Woman", "Man"],
      countrySelected: "",
      items: ["Spain", "EEUU", "France","Germany","Engalnd","Irland","Italy","Venezuela","Colombia"]
    };
  },
  methods: {
    signup() {
      console.log("hola");
      const newUser = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.userPassword,
        mobile: this.mobile,
        user_birth:this.birthday,
        country:this.country,
        gender:this.gender,
      };

      API.signup(newUser)
        .then(response => {
          localStorage.setItem("token", response.token);
          this.$root.$emit("login", true);
          this.$router.push("/myAccount");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
