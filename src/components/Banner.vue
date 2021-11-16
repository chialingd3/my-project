<template>
  <div>
    <!-- banner(desktop) -->

    <div class="d-none d-md-block">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          img-src="https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80"
        >
          <h1 class="bannre-title">
            Welc<i class="fas fa-fan text-summer text-m"></i>me t<i
              class="far fa-square text-m text-summer"
            ></i>
            Ta<i class="fas fa-seedling text-m text-summer"></i>chung</i> <br />
            <p class="text-white mt-3 mb-5 bannre-text">
              美食、娛樂、夜市、溫泉、海景......玩遍台中
            </p>
          </h1>
        </b-carousel-slide>
        <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
        <!-- Slides with custom text -->
        <b-carousel-slide
          img-src="https://images.unsplash.com/photo-1496566084516-c5b96fcbd5c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
        >
          <h1 class="bannre-title">
            Welc<i class="fas fa-fan text-summer text-m"></i>me t<i
              class="far fa-square text-m text-summer"
            ></i>
            Ta<i class="fas fa-seedling text-m text-summer"></i>chung <br />
            <p class="text-white mt-3 mb-5 bannre-text">
              美食、娛樂、夜市、溫泉、海景......玩遍台中
            </p>
          </h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide
          img-src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        >
          <h1 class="bannre-title">
            Welc<i class="fas fa-fan text-summer text-m"></i>me t<i
              class="far fa-square text-m text-summer"
            ></i>
            Ta<i class="fas fa-seedling text-m text-summer"></i>chung <br />
            <p class="text-white mt-3 mb-5 bannre-text">
              美食、娛樂、夜市、溫泉、海景......玩遍台中
            </p>
          </h1>
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        >
          <h1 class="bannre-title">
            Welc<i class="fas fa-fan text-summer text-m"></i>me t<i
              class="far fa-square text-m text-summer"
            ></i>
            Ta<i class="fas fa-seedling text-m text-summer"></i>chung <br />
            <p class="text-white mt-3 mb-5 bannre-text">
              美食、娛樂、夜市、溫泉、海景......玩遍台中
            </p>
          </h1>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <!-- banner(mobile) -->
    <div class="container d-md-none">
      <div class="row justify-content-center">
        <div class="col-10 mt-2 mr-auto ml-4">
          <form class="d-flex">
            <input
              class="form-control ms-2 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div class="col-4 mt-2 ml-2">
          <select
            class="form-select px-4 py-1 mr-auto"
            aria-label="Default select example"
          >
            <option selected disabled>類別</option>
            <option
              v-model="options"
              :value="category"
              v-for="item in category"
            >
              {{ item }}
            </option>
            <!-- <option value="住宿">住宿</option> -->
          </select>
        </div>
        <div class="col-7 mt-2">
          <select
            class="form-select px-4 py-1"
            aria-label="Default select example"
          >
            <option selected disabled>鄉鎮區</option>
            <option v-for="cityname in city">
              {{ cityname.CityName }}
            </option>
          </select>
          <label for=""
            ><button class="btn btn-outline-info">Go</button>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
