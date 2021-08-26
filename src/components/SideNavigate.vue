<template>
  <nav>
    <v-navigation-drawer app elevation="3" color="#3B3E66">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="d-flex align-center" @click="$router.push('/')" style="cursor: pointer;">
            <v-img
                alt="Vuetify Logo"
                class=""
                contain
                src="../assets/logo.svg"
                transition="scale-transition"
                height="50"
                >
            </v-img>
            <h1 class="font-weight-bold mr-5 text-white">Vuetify Develop</h1>
              </div>
            
          </v-col>
          <v-divider color="#646795"></v-divider>
          <v-col cols="12">
            <v-list dense>
              <v-subheader>
                <p class="text-overline" style="color: #646795">MY PAGE</p>
              </v-subheader>
              <v-list-item router to="/dashboard1">
                <v-list-item-icon>
                  <v-icon color="#8083AA">mdi-view-dashboard-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="ml-3 font-weight-bold text-body-2"
                    style="color: #a4a6c1"
                    >Dashboard</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item router to="/user">
                <v-list-item-icon>
                  <v-icon color="#8083AA">mdi-account-box</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="ml-3 font-weight-bold text-body-2"
                    style="color: #a4a6c1"
                    >User Page</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
              <v-list-item router to="/myapp1">
                <v-list-item-icon>
                  <v-icon color="#8083AA">mdi-chip</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="ml-3 font-weight-bold text-body-2"
                    style="color: #a4a6c1"
                    >Application</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </nav>
  <v-app-bar color="rgb(255, 255, 255, .9)"
    style="box-shadow: 0px 3px 8px 0px rgba(215, 215, 224, .5);"
  >
    <v-app-bar-nav-icon class="ml-4"></v-app-bar-nav-icon>
    <div class="ml-3">|</div>

    <v-spacer></v-spacer>
    <div>   
      <v-avatar tile color="red"> </v-avatar>
      <v-avatar class="ml-2" tile color="green"> </v-avatar>
      <v-avatar class="ml-2" tile color="blue"> </v-avatar>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
  }),

};
</script>
<style>
</style>