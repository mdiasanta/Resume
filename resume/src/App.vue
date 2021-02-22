<template>
  <v-app style="background-color:#505251;">
    <v-app-bar app color="#3F51B5" dark>
      <v-app-bar-title>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('@/assets/img/bape.png')"
            transition="scale-transition"
            width="40"
          />
          <span class="headline">Mark Diasanta</span>
        </div>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon>fa-home</v-icon>
          </v-btn>
        </template>
        <span>Home</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon>fa-user-circle</v-icon>
          </v-btn>
        </template>
        <span>About Me</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon>fa-briefcase</v-icon>
          </v-btn>
        </template>
        <span>Resume</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon>fab fa-linkedin</v-icon>
          </v-btn>
        </template>
        <span>LinkedIn</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon>fab fa-github</v-icon>
          </v-btn>
        </template>
        <span>GitHub</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon>fa-language</v-icon>
          </v-btn>
        </template>
        <span class>Switch Languages</span>
      </v-tooltip>
    </v-app-bar>

    <v-main>
      <Profile />
    </v-main>
  </v-app>
</template>

<script>
import Profile from '@/components/Profile';

export default {
  name: 'App',

  components: {
    Profile
  },

  data: () => ({
    //
  })
};
</script>
