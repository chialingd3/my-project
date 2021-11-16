<template>
  <div id="app">
    <!-- navbar -->

    <b-navbar toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand href="#"
        ><router-link to="/"
          ><img src="./assets/logo.png" alt="" width="88px" height="42px"
        /></router-link>
      </b-navbar-brand>
      <div class="d-none d-md-block">
        <div class="d-flex mt-2">
          <select
            class="form-select mb-2 mr-1 px-1"
            aria-label="Default select example"
          >
            <option selected disabled>類別</option>
            <option value="美食">美食</option>
            <option value="住宿">住宿</option>
          </select>

          <select class="form-select mb-2" aria-label="Default select example">
            <option selected disabled>鄉鎮區</option>
            <option v-for="cityname in city">
              {{ cityname.CityName }}
            </option>
          </select>
          <label for="form-label"
            ><a href="" class="btn btn-outline-info">Go</a>
          </label>
          <b-nav-form class="mb-2 ml-3">
            <b-form-input size="md" placeholder="Search"></b-form-input>
            <b-button
              size="md"
              class="my-2 my-sm-0 btn btn-outline-info"
              type="submit"
              variant="warning"
              ><i class="fas fa-search"></i
            ></b-button>
          </b-nav-form>
        </div>
        <div></div>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <span class="mt-1 icon-circle summer text-white text-center">
            <i class="fas fa-mountain icon-text"></i
          ></span>
          <b-nav-item href="#">
            <router-link to="/Scenespots" class="text-white"
              >台中好好玩</router-link
            ></b-nav-item
          >
          <span class="mt-1 icon-circle spring text-white text-center pt-1"
            ><i class="fas fa-utensils"></i
          ></span>
          <b-nav-item>
            <router-link to="/food" class="text-white">美食住宿</router-link>
          </b-nav-item>
          <span class="mt-1 icon-circle fire text-white text-center pt-1">
            <i class="fas fa-bus"></i
          ></span>
          <b-nav-item text="景點交通"
            ><router-link to="/traffic" class="text-white"
              >景點交通</router-link
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>

    <!-- 熱門城市 -->

    <h3 class="text-center mt-5">
      <i class="fas fa-city text-summer ml-5"></i> 熱門地點
    </h3>
    <div class="example-3d">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide
          ><img
            src="https://images.unsplash.com/photo-1572715381359-002b1eabd56b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            width="300px"
            height="200px"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://images.unsplash.com/photo-1619836319073-298ad4c06cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            width="300px"
            height="200px"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            width="300px"
            height="200px"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://images.unsplash.com/photo-1529675912204-6cc737a03ffb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80"
            width="300px"
            height="200px"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://images.unsplash.com/photo-1593359946372-224d1431aa2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            width="300px"
            height="200px"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            width="300px"
            height="200px"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            src="https://images.unsplash.com/photo-1625913953057-d7609128279e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80"
            width="300px"
            height="200px"
            alt=""
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
 
<script>
import city from "./assets/CityCountyData";

export default {
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },

      city,
      category: ["美食", "住宿"],
      options: null,
      county: null,
      ScenicSpotData: [],
      hotcityName: ["台北", "新北", "台中", "高雄", "花蓮", "南投", "屏東"],
      hotcityImg: [
        "https://images.unsplash.com/photo-1572715381359-002b1eabd56b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1619836319073-298ad4c06cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1529675912204-6cc737a03ffb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80",
        "https://images.unsplash.com/photo-1593359946372-224d1431aa2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1625913953057-d7609128279e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80",
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
    const url =
      "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=300&$format=JSON";
    axios.get(url).then((response) => {
      let ScenicSpotData = response.data;
      console.log(ScenicSpotData);
    });

    // this.$nextTick(() => {
    //   this.$refs.marker.mapObject.openPopup();
    // });
    // axios({
    //   method: "get",
    //   url: "http://bit.ly/2mTM3nY",
    //   responseType: "stream",
    // }).then(function (response) {
    //   // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    //   console.log(response.data);
    // });
  },
};
</script>


<style>
@import "../stylesheets/all.css";
</style>

