<template>
  <v-container fluid>
    <v-row justify="end" class="ml-3 mr-3">
      <v-col cols="12" md="8">
        <v-card
          tile
          class="d-flex justify-center rounded-lg mt-5"
          style="
            box-shadow: 0px 5px 15px 10px rgba(215, 215, 224, 0.4);
            background-image: linear-gradient(to right, #2c353f, #465360);
          "
        >
          <v-container fluid>
            <v-row class="mt-3">
              <v-col sm="12">
                <v-card
                  height="150"
                  class="mx-3 rounded-lg"
                  style="box-shadow: 0px 5px 0px 0px rgba(254, 49, 25, 1)"
                >
                  <v-card-title class="text-h5"
                    >ผู้ติดเชื้อเพิ่มวันนี้</v-card-title
                  >
                  <div class="text-h1 text-center mt-3 font-weight-bold"></div>
                  <v-card-text
                    class="text-h2 font-weight-bold text-red"
                    align="center"
                  >
                    {{ data1 }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="mt-2 mb-3">
              <v-col cols="12" sm="6">
                <v-card
                  height="120"
                  class="mx-3 rounded-lg"
                  style="box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 1)"
                >
                  <v-card-title class="text-h5"
                    >เสียชีวิตเพิ่มวันนี้</v-card-title
                  >
                  <div class="text-h1 text-center font-weight-bold"></div>
                  <v-card-text
                    class="text-h3 font-weight-bold text-red"
                    align="center"
                  >
                    {{data2}}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card
                  height="120"
                  class="mx-3 rounded-lg"
                  style="box-shadow: 0px 5px 0px 0px rgba(0, 255, 0, 1)"
                >
                  <v-card-title class="text-h5">หายป่วยกลับบ้าน</v-card-title>
                  <div class="text-h1 text-center font-weight-bold"></div>
                  <v-card-text
                    class="text-h3 font-weight-bold text-green"
                    align="center"
                  >
                    {{data3}}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="mt-2 mb-3">
              <v-col cols="12" sm="6">
                <v-card
                  height="120"
                  class="mx-3 rounded-lg"
                  style="box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 1)"
                >
                  <v-card-title class="text-h5">ผู้ป่วยสะสม</v-card-title>
                  <div class="text-h1 text-center font-weight-bold"></div>
                  <v-card-text
                    class="text-h3 font-weight-bold text-red"
                    align="center"
                  >
                    {{data4}}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6">
                <v-card
                  height="120"
                  class="mx-3 rounded-lg"
                  style="box-shadow: 0px 5px 0px 0px rgba(0, 255, 0, 1)"
                >
                  <v-card-title class="text-h5">หายป่วยสะสม 63</v-card-title>
                  <div class="text-h1 text-center font-weight-bold"></div>
                  <v-card-text
                    class="text-h3 font-weight-bold text-green"
                    align="center"
                  >
                    {{data5}}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          color="rgba(251,251,254,1)"
          tile
          class="d-flex justify-start rounded-lg mt-5 mx-auto"
          style="box-shadow: 0px 5px 15px 10px rgba(215, 215, 224, 0.4)"
        >
          <div class="d-flex flex-column align-self-center mt-3 ml-5">
            <div class="text-h4 font-weight-bold text-indigo-darken-1">
              {{ currentTime }}
            </div>
            <div
              class="text-h5 font-weight-bold text-center text-indigo-lighten-1"
            >
              {{ currentdate }}
            </div>
          </div>
          <div class="d-flex flex-colum align-center">
            <v-icon size="40" color="indigo-darken-1">mdi-clock-check</v-icon>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import axios from 'axios';
export default {
  created() {
    setInterval(this.getNow, 100);
    let apiUrl = 'https://corona.lmao.ninja/v2/countries/THA';
axios.get(apiUrl)
    .then(response =>{
        this.data1 = response.data.todayCases;
        this.data2 = response.data.todayDeaths;
        this.data3 = response.data.todayRecovered;
        this.data4 = response.data.cases;
        this.data5 = response.data.recovered;
    })
    .catch(error =>{
      console.log(error);
    })
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const _clock =
        today.getHours() +
        " : " +
        today.getMinutes() +
        " : " +
        today.getSeconds();
      const _date =
        today.getDate() +
        " / " +
        today.getMonth() +
        " / " +
        today.getFullYear();
      this.currentTime = _clock;
      this.currentdate = _date;
    },
  },
  data() {
    return {
      currentTime: "",
      currentdate: "",
      data1:"",
      data2:"",
      data3:"",
      data4:"",
      data5:""
    };
  },

};
</script>

<style>
</style>