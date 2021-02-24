<template>
  <v-app style="background-image: linear-gradient(#3F51B5,#505251);">
    <v-app-bar app flat style="background-color:transparent;" dark>
      <v-app-bar-title>
        <v-btn
          text
          dark
          class="d-flex align-center"
          @click="currentComponent = 'profile'"
        >
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('@/assets/img/bape.png')"
            transition="scale-transition"
            width="40"
          />
          <span class="headline">Mark Diasanta</span>
        </v-btn>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" @click="currentComponent = 'profile'">
            <v-icon>fa-home</v-icon>
          </v-btn>
        </template>
        <span>Home</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" @click="currentComponent = 'AboutMe'">
            <v-icon>fa-user-circle</v-icon>
          </v-btn>
        </template>
        <span>About Me</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            href="https://resume.creddle.io/resume/el3x9rfvib7"
            target="_blank"
            v-on="on"
          >
            <v-icon>fa-briefcase</v-icon>
          </v-btn>
        </template>
        <span>Resume</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            href="https://www.linkedin.com/in/mark-diasanta-42ab68130/"
            target="_blank"
            v-on="on"
          >
            <v-icon>fab fa-linkedin</v-icon>
          </v-btn>
        </template>
        <span>LinkedIn</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            href="https://github.com/mdiasanta"
            target="_blank"
            v-on="on"
          >
            <v-icon>fab fa-github</v-icon>
          </v-btn>
        </template>
        <span>GitHub</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text tile v-on="on">
            <v-icon>fa-language</v-icon>
          </v-btn>
        </template>
        <span class>Switch Languages</span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <v-container fluid class="fill-height">
        <v-row no-gutters>
          <v-col>
            <v-scale-transition>
              <component :is="currentComponent" />
            </v-scale-transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Profile from '@/components/Profile';
import AboutMe from '@/components/AboutMe';

export default {
  name: 'App',

  components: {
    Profile,
    AboutMe
  },

  data: () => ({
    currentComponent: 'profile'
  })
};
</script>
<style>
html {
  overflow-y: auto;
}
</style>
