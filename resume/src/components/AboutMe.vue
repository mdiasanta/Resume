<template>
  <v-row no-gutters>
    <v-col lg="6" md="6" sm="12" class="pa-2">
      <v-card>
        <v-card-title>
          About Me
        </v-card-title>
        <v-card-text>
          My name is Mark. I am a Software Engineer with about
          {{ getWorkExperience() }} years of experience. <br />
          I specialize in a tech stack consisting of .NET Core, Vue.js, and MSSQL. I take
          interest in optimizing performance of code execution and simplifying complex code for easier maintainability.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="6" md="6" sm="12" class="pa-2">
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
    <v-col lg="6" md="6" sm="12" class="pa-2">
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
          My main focus has been on rewriting legacy applications into modern SPA applications and breaking apart enterprise level monolithic systems and refactoring them
          into microservices to be more reusable and less tightly coupled to specific applications. 
        </v-card-text>
      </v-card>
    </v-col>
    <v-col lg="6" md="6" sm="12" class="pa-2">
      <v-card>
        <v-img
          contain
          :src="require('@/assets/img/developer.jpg')"
          transition="scale-transition"
        />
        <v-card-title>
          Tools/Software
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              lg="3"
              md="6"
              sm="12"
              v-for="(area, name, index) in subjects"
              :key="index"
            >
              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th
                        class="text-left text-capitalize black--text subtitle-1 font-weight-bold"
                      >
                        {{ name }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in area" :key="item.name">
                      <td>{{ item.name }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutMe',
  data: () => ({
    subjects: {
      tools: [
        { name: 'Visual Studio' },
        { name: 'Microsoft SQL Server' },
        { name: 'Mongo DB' },
        { name: 'Windows Server' },
        { name: 'NodeJS' },
        { name: 'Azure DevOps' },
        { name: 'GIT' },
        { name: 'Docker' },
        { name: 'Webpack' },
        { name: 'D3.js (To a lesser extent)' }
      ],
      software: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Javascript' },
        { name: 'SQL' },
        { name: 'C#' },
        { name: 'C++' },
        { name: 'Python' },
        { name: 'Powershell' }
      ],
      concepts: [
        { name: 'Software Development Lifecycle' },
        { name: 'SCRUM Agile Software Development' },
        { name: 'REST' },
        { name: 'SOAP' },
        { name: '' }
      ],
      frameworks: [
        { name: '.NET Core' },
        { name: '.NET Framework' },
        { name: 'VueJS' },
        { name: 'Angular Framework' }
      ]
    }
  }),
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
