<template>
  <v-row no-gutters>
    <v-col lg="6" md="12" sm="12" class="pa-2">
      <v-card>
        <v-card-title>
          About Me
        </v-card-title>
        <v-card-text>
          My name is Mark. I am a Software Engineer with about
          {{ getWorkExperience() }} years of experience. <br />
          I specialize in the .NET Core tech stack with Vue.js front end
          creating highly reactive Single Page Applications for consuming and
          visualizing data.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="6" md="12" sm="12" class="pa-2">
      <v-card>
        <v-img
          contain
          :src="require('@/assets/img/S2k.gif')"
          transition="scale-transition"
        />
        <v-card-title>
          Interests
        </v-card-title>
        <v-card-text>
          When I'm not coding, I relax in my free time by playing video games,
          watching anime, traveling, and adding performance modifications to my
          car.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="6" md="12" sm="12" class="pa-2">
      <v-card>
        <v-img
          contain
          :src="require('@/assets/img/bugFix.gif')"
          transition="scale-transition"
        />
        <v-card-title>
          Technical Skills
        </v-card-title>
        <v-card-text>
          I'm highly comefortable with the cross platform .NET Core tech stack
          using VueJS as the front end framework and Microsoft SQL Server.
          <br />
          I've experimented with Docker containers for portable deployments,
          Python for Machine learning, and MongoDB for NoSQL alternative. <br />
          I haven't used these technologies regularly but I also have experience
          with PHP, C++, and Angular framework.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutMe',
  data: () => ({}),
  methods: {
    getWorkExperience() {
      const startDate = new Date('2018-11-05');
      const currentDate = new Date();
      return currentDate.getFullYear() - startDate.getFullYear();
    }
  }
};
</script>
<style scoped></style>
