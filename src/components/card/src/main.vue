<template>
  <div>
    <div class="begda-card clearfix" v-if="type === '1'">
      <div class="left-1"></div>
      <div class="left-2"></div>
      <div class="right-1"></div>
      <div class="right-2"></div>
      <slot></slot>
    </div>
    <div class="begda-card-2 clearfix" v-if="type === '2'">
      <slot></slot>
    </div>

    <div class="begda-card-3 clearfix" v-if="type === '3'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "begdaCard",
  data() {
    return {
      loading: true
    };
  },
  props: {
    type: { type: String, default: "1" }
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less">
.begda-card-mxin() {
  border: 1px #004a82 solid;
  padding: 5px;
  background: rgba(0, 0, 0, 0.4);
  color: #ffffff;
}
.begda-card {
  .begda-card-mxin();
  position: relative;
  /*border-left-width: 1px;*/
  border-left-color: #59b8ff;
  border-right-color: #59b8ff;

  .corner() {
    border-top: 1px #59b8ff solid;
    width: 10px;
    height: 0;
    position: absolute;
  }
  .left-1 {
    .corner();
    left: -1px;
    top: -1px;
  }
  .left-2 {
    .corner();
    left: -1px;
    bottom: -1px;
  }
  .right-1 {
    .corner();
    right: -1px;
    top: -1px;
  }
  .right-2 {
    .corner();
    right: -1px;
    bottom: -1px;
  }
}

.begda-card-2 {
  .begda-card-mxin();


}
.begda-card-3 {
  .begda-card-mxin();
  border-top: 2px #59b8ff solid;

}
</style>
