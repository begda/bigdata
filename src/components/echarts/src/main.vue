<template>
  <!--  <div-->
  <!--    ref="chartID"-->
  <!--    v-loading="loading"-->
  <!--    element-loading-text="加载中..."-->
  <!--    element-loading-background="rgba(0, 0, 0, 0)"-->
  <!--  ></div>-->
  <div ref="chartID" :style="{ height: height + 'px' }"></div>
</template>

<script>
// import echarts from "echarts";
// import uuid4 from "uuid/v4";
let echarts = window.echarts;
// function uuid() {
//   let arr = uuid4().split("-");
//   return "chart" + arr[0] + arr[1] + arr[2] + arr[3];
// }

export default {
  name: "begdaEcharts",
  data() {
    return {
      loading: true
    };
  },
  props: {
    options: { required: true, type: [Object, String] },
    height: { type: Number, default: 300 }
  },
  mounted() {
    this.init();
  },
  watch: {
    // options(newData, oldData) {
    options() {
      this.init();
    }
  },
  methods: {
    init() {
      this.setOptions(this.options);
    },
    create() {
      // let chartId = uuid();
      // this.$refs.chartID.innerHTML = `<div id="${chartId}"  style="height: 300px">正在加载...</div>`;
      // 基于准备好的dom，初始化echarts实例
      // return echarts.init(document.getElementById(chartId));
      return echarts.init(this.$refs.chartID);
    },
    setOptions(opt) {
      if (Object.keys(opt).length > 0) {
        this.loading = false;
      } else {
        this.loading = true;
      }
      let Chart = this.create();
      Chart.resize();
      Chart.setOption(opt);
      this.$emit("loading", Chart);
      window.onresize = function() {
        Chart.resize(); //myEchart为echarts.init初始化得到的对象
      };
    }
  }
};
</script>

<style scoped></style>
