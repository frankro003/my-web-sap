<template>
  <v-app style="background-color:#EFF0F9">
    <SideNavigate/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>


import SideNavigate from './components/SideNavigate.vue'


export default {
  name: 'App',

  components: {
    SideNavigate
  },

  data: () => ({
    //
  }),
}
</script>
