<template>
  <div>
    <div class="banner">
      <h1 class="p-5 text-white font-weight-bold">台中趴趴Go</h1>
    </div>
    <b-container>
      <b-row class="justify-content-center" style="margin-top: -20px">
        <b-col cols="6">
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col md="4" sm="6" v-for="item in data" :key="item.ID">
          <b-card
            :title="item.Name"
            :img-src="item.Picture.PictureUrl1"
            img-alt="Image"
            img-top
            tag="article"
            style="width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <ul>
                <li>營業時間:{{ item.OpenTime }}</li>
                <li>地址:{{ item.Address }}</li>
                <li>電話:{{ item.Phone }}</li>
                <li>交通資訊:{{ item.TravelInfo }}</li>
                <li class="text-danger">Read More......</li>
              </ul>
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import city from "../assets/CityCountyData";
export default {
  data() {
    return {
      city,
      data: [],
      regions: [],
    };
  },
  methods: {
    getAuthorizationHeader() {
      var AppID = "3ceb34d62fac474c9a25260310d17124";
      var AppKey = "kfZlwHMZBxZUVe15XF3WKISzAmE";

      var GMTString = new Date().toGMTString();
      var ShaObj = new jsSHA("SHA-1", "TEXT");
      ShaObj.setHMACKey(AppKey, "TEXT");
      ShaObj.update("x-date: " + GMTString);
      var HMAC = ShaObj.getHMAC("B64");
      var Authorization =
        'hmac username="' +
        AppID +
        '", algorithm="hmac-sha1", headers="x-date", signature="' +
        HMAC +
        '"';
      return {
        Authorization: Authorization,
        "X-Date": GMTString /*,'Accept-Encoding': 'gzip'*/,
      }; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
    },
    getRegion() {
      // new Set()資料唯一的特性
      const regions = new Set();
      this.data.forEach((item, i) => {
        regions.add(
          item.address.substring(0, item.address.indexOf("區", 0)) + 1
        );
      });
      this.regions = Array.from(regions)
      console.log(this.regions);
    },
  },
  mounted() {
    this.axios({
      method: "get",
      url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taichung?$top=50&$format=JSON`,
      headers: this.GetAuthorizationHeader,
    }).then((response) => {
      // console.log("觀光景點", response);
      this.data = response.data;
      console.log(this.data);
      this.data.forEach((option) => {
        if (!option.Picture.PictureUrl1) {
          option.Picture.PictureUrl1 =
            "https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725200-stock-illustration-image-available-icon-flat-vector.jpg";
        }
      });
    });
  },
};
</script>

