<template>
  <div>
    <v-container class="structure">
      <v-row class="main">
        <v-col>
          <h1 id="brand">
            3,2,1
            <span id="eight">Go!</span>
          </h1>

        </v-col>
      </v-row>
      <v-row class="buttons">
        <v-col>
          <router-link to="/signup">
            <v-btn x-large color="#f3c15a" dark block>Sign Up</v-btn>
          </router-link>
          <router-link to="/login">
            <v-btn text x-large color="white" block>Login</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.structure {
    background-image: url('../assets/barbell-near-belt-949132.jpg');
  min-height: 100vh;
  text-align: center;
  * {
    color: white;
    text-decoration-line: none;
  }
  h1 {
    margin-top: 30%;
  }
}
#brand {
  font-family: "Russo One", sans-serif;
  color: white;
  font-size: 48px;
  #eight {
    color: #25b535,;
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
