<template>
  <v-card
    flat
    dark
    style="width:500px;background-color:transparent; transform:translate(100%)"
  >
    <v-row align="center" justify="center" class="fill-height">
      <v-col align-self="center">
        <v-img
          contain
          :src="require('@/assets/img/photo.jpg')"
          transition="scale-transition"
          width="50%"
          style="border-radius:50%; transform:translate(50%)"
        />
      </v-col>
      <v-col>
        <v-list-item>
          <v-list-item-content class="text-center">
            <v-list-item-title class="title">
              Mark Diasanta
            </v-list-item-title>
            <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>
            <v-list-item-subtitle>Virginia Beach</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({})
};
</script>
