<template>
  <v-app class="structure">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  })
};
</script>
<style lang="scss" scoped>
.structure {
  background-image: url('../src/assets/barbell-near-belt-949132.jpg');
    min-height: 100vh;
  * {
    color: white;
    text-decoration-line: none;
    font-family: "Montserrat", sans-serif;
  }
}
</style>