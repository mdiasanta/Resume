<template>
  <v-card flat dark class="profile" style="background-color:transparent;">
    <v-row no-gutters align="center" justify="center" class="fill-height">
      <v-col align-self="center">
        <v-img
          contain
          :src="require('@/assets/img/photo.jpg')"
          transition="scale-transition"
          width="50%"
          style="border-radius:50%; transform:translate(50%); border:3px solid #fff"
        />
      </v-col>
      <v-col>
        <v-list-item>
          <v-list-item-content class="text-center">
            <v-list-item-title class="display-1">Mark Diasanta</v-list-item-title>
            <v-list-item-subtitle class="subtitle-1">Software Engineer</v-list-item-subtitle>
            <v-list-item-subtitle class="subtitle-2">Virginia Beach</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
<style scoped>
.profile{
    width:500px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
</style>
