<template>
  <v-footer :class="$vuetify.breakpoint.smAndDown ? 'footer-md' : ' footer'" padless app>
    <v-row justify="center" no-gutters>
      <v-btn to="/events" color="white" text rounded class="my-2">Home</v-btn>
      <v-btn to="/" color="white" text rounded class="my-2">About Us</v-btn>
      <v-btn to="/mail" color="white" text rounded class="my-2">Contact Us</v-btn>
      <v-btn to="/?auth=login" color="white" text rounded class="my-2">Sign in</v-btn>
      <v-col class="mb-1 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong> 3,2,1 GO !</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  background-image: linear-gradient(to bottom right,  #25b535, #f3c15a);

}
.footer-md{
    background-image: linear-gradient(to bottom right,  #25b535ed, #f3c15a);
}
</style>
