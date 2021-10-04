<template>
  <div class="pa-2 pr-6">
    <v-card>
      <v-card-title>
        Random Cat Fact of the Day:
      </v-card-title>
      <v-card-text>
        <span>
          {{ catFact }}
        </span>
      </v-card-text>
      <v-card-subtitle>
        Source: https://catfact.ninja
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data: () => ({
    catFact: 'Cat Fact'
  }),
  created() {
    this.$http
      .get('https://catfact.ninja/fact')
      .then(resp => {
        if (resp?.data?.fact) {
          this.catFact = resp.data.fact;
        }
      })
      .catch(() => {
        this.catFact = `Couldn't Load Cat fact`;
      });
  }
};
</script>
<style scoped></style>
