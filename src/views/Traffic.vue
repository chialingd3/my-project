<template>
  <div>Traffic</div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    const url = "https://randomuser.me/api";
    this.$http.get(url).then((res) => {
      console.log(res);
    });
  },
};
</script>