<template>
    <v-container>
  <v-row class="d-flex justify-center mx-auto">
    <v-col cols="8" sm="6" md="6" lg="4" >

<h2 class="subtitle-1 text-center">EDIT YOUR INFORMATION</h2>
     </v-col>
        </v-row>
    <Footer  :prominent="$vuetify.breakpoint.lgAndUp" :class="$vuetify.breakpoint.smAndDown ? 'footer-xs' : 'navbar'"/>
      </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'


  export default {
  components: {
    Footer
  }
  }
</script>

<style lang="scss" scoped>

</style>