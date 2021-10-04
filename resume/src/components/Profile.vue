<template>
  <v-card id="profile" flat style="background-color:transparent;">
    <v-row no-gutters align="center">
      <v-col cols="12" align="center">
        <v-img
          contain
          :src="require('@/assets/img/photo2.jpg')"
          transition="scale-transition"
          width="25%"
          class="img-border"
        />
      </v-col>
      <v-col cols="12">
        <v-list-item>
          <v-list-item-content class="text-center">
            <v-list-item-title class="display-1 white--text"
              >Mark Diasanta</v-list-item-title
            >
            <v-list-item-subtitle class="subtitle-1 white--text"
              >Full Stack Software Engineer</v-list-item-subtitle
            >
            <v-list-item-subtitle class="subtitle-2 white--text"
              >Virginia Beach,VA</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="12">
        <cat-facts />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CatFacts from '@/components/CatFacts';
export default {
  name: 'Profile',
  components: {
    CatFacts
  },
  data: () => ({})
};
</script>
<style scoped>
.img-border {
  border-radius: 50%;
  border: 3px solid #fff;
}
</style>
