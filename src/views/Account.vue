<template>
  <v-container>
    <v-app-bar app color="#f3c15a" dark scroll-target="#scrolling-techniques" :prominent="$vuetify.breakpoint.lgAndUp" :class="$vuetify.breakpoint.smAndDown ? 'navbar-xs' : 'navbar'">
      <v-row>
      <router-link to="/"><v-img
            alt="Logo Empresa"
            class="shrink mr-2"
            contain
            src="../assets/logo.png"
            transition="scale-transition"
            width="40"
          /></router-link>
      <v-toolbar-title @click="home" class="d-lg-none headline ml-2 mr-n5">3,2,1 GO!</v-toolbar-title>
      <v-toolbar-title class="hidden-md-and-down font display-4 font-weight-regular ml-10">3,2,1 GO!</v-toolbar-title>
      </v-row>
      <v-col class="pa-0 ml-5" v-if="appBarVisible">
      <v-col v-show="search" :class="$vuetify.breakpoint.smAndUp ? 'views' : 'views-ipad pa-0'">
        <button @click="mosaic" v-bind:class="select">
          <v-icon :size="$vuetify.breakpoint.lgAndUp ? '20px' : '15px'">mdi-apps</v-icon>
        </button>
        <button class="ml-2 px-1 py-1" @click="expand" v-bind:class="select2">
          <v-icon :size="$vuetify.breakpoint.lgAndUp ? '20px' : '15px'">mdi-format-list-text</v-icon>
        </button>
      </v-col>
      </v-col>
      <v-row>
      <v-row justify="end">
      <v-col :class="$vuetify.breakpoint.smAndUp ? 'navbar-ipad' : 'navbar-filter'" v-if="appBarVisible" cols="4">
      <div class="hidden-md hidden-sm">
      <v-select
        v-model="selected"
        :items="filterTypes"
        required
      ></v-select>
      </div>
      </v-col>
      <v-menu  bottom left>
        <template v-if="userMenu" v-slot:activator="{ on }">
            <v-btn :class="$vuetify.breakpoint.lgAndUp ? '' : 'mr-n2 mt-0 icons'" dark icon v-on="on">
            <v-icon size="30px">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
          <v-list>
          <v-list-item-group active-class="deep-blue--text text--accent-4">

             <v-list-item v-if="coachProfile" to="/coachprofile">
              <v-list-item-icon>
                <v-list-item-title class="headline">Profile
                </v-list-item-title>
              </v-list-item-icon>
            <v-spacer></v-spacer>
              <v-icon  x-medium>mdi-account</v-icon>
            </v-list-item>
              <v-list-item v-else to="/profile">
              <v-list-item-icon>
                <v-list-item-title  class="headline">Profile
              <v-icon  x-medium>mdi-account</v-icon>
                </v-list-item-title>
              </v-list-item-icon>
                </v-list-item>
            <v-spacer></v-spacer>

              <v-list-item  v-if="coachProfile" to="/workoutCoach">
              <v-list-item-icon>
                <v-list-item-title  class="headline">WorkoutCoach
                </v-list-item-title>
              </v-list-item-icon>
            <v-spacer></v-spacer>
              <v-icon  x-medium>mdi-dumbbell</v-icon>
            </v-list-item>
              <v-list-item v-else to="/workout">
              <v-list-item-icon>
                <v-list-item-title  class="headline">Workout
                </v-list-item-title>
              </v-list-item-icon>

              <v-icon  x-medium>mdi-dumbbell</v-icon>
            </v-list-item>
              <v-list-item v-show="coachProfile" to="/createWorkout">
              <v-list-item-icon>
                <v-list-item-title class="headline">Create workout</v-list-item-title>
              </v-list-item-icon>
              <v-spacer></v-spacer>
               <v-icon  x-medium>mdi-dumbbell</v-icon>
            </v-list-item>
              <v-list-item  to="/previous">
              <v-list-item-icon>
                <v-list-item-title  class="headline">Previous Workout
                </v-list-item-title>
              </v-list-item-icon>
            <v-spacer></v-spacer>

              <v-icon x-medium>mdi-kettlebell</v-icon>
            </v-list-item>
             <v-list-item  to="/notes">
              <v-list-item-icon>
                <v-list-item-title class="headline">Notes</v-list-item-title>
              </v-list-item-icon>
              <v-spacer></v-spacer>
              <v-icon x-medium>mdi-pencil</v-icon>
            </v-list-item>

            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-list-item-title class="headline">Logout</v-list-item-title>
              </v-list-item-icon>
              <v-spacer></v-spacer>
              <v-icon x-medium>mdi-logout</v-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        </v-menu>
      </v-row>
      </v-row>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
      </v-content>
<v-content>
      <v-row >
      <v-col cols="12">
        <v-img src="../assets/logo.png" aspect-ratio="2" ></v-img>
      </v-col>
    </v-row>
      </v-content>




    <Footer  :prominent="$vuetify.breakpoint.lgAndUp" :class="$vuetify.breakpoint.smAndDown ? 'footer-xs' : 'navbar'"/>
  </v-container>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
      menu: false,
      filterTypes: ['JAVASCRIPT', 'UX', 'OTHERS', 'WEB DEVELOPER', 'HACKATONS'],
      selected: '',
      dates: [],
      search: true,
      select: '',
      select2: '',
      userMenu: localStorage.token
    }
  },
  computed: {
    appBarVisible () {
      return this.$route.meta.appBarVisible
    },
    // eslint-disable-next-line vue/return-in-computed-property
    coachProfile () {
      if (localStorage.role === 'PT') {
        return true
      }
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },

    profile () {
      if (localStorage.role === 'PT') {
        this.$router.push('/profileCoach')
      } else {
        this.$router.push('/profile')
      }
    },
    home () {
      this.$router.push('/')
    }
  },
  components: {
    Footer
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  background: linear-gradient(
  #f3c15a
  ) !important;
    height: 128px;
}
.navbar-xs {
  background: linear-gradient(
#f3c15a
  ) !important;
}
.navbar-filter {
  margin-top:10%;
}

.logo {
  margin-top: -5px;
  height: 125px;
  max-width: 130px;
  margin-left: -15px;
  opacity: 0.9;
}
.views{
  text-align: center;
  margin: 1vh;
  margin-left: -20%;
}
.views-ipad{
  text-align: center;
  margin-left: 8vw;
}

.title {
  margin-bottom: 20px;
  margin-left: 20px;
  font-family: Prosto One;
  font-style: normal;
  font-weight: normal;
  font-size: 65px !important;
  line-height: 68px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
}
.select {
  border: 2px solid white;
}
.select2 {
  border: 2px solid white;
}

.footer-xs {
  height: 90px;
}
</style>
