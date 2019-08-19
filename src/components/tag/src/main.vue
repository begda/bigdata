<template functional>
  <section class="begda-tab">
    <el-tag
      :hit="false"
      v-bind="data.attrs"
      :style="{ borderColor: data.attrs.color, fontSize: props.size + 'px' }"
    >
      <div style="display: inline-block;padding: 5px 10px;" v-if="props.title">
        {{ props.title }}
      </div>
      <div
        v-if="props.info"
        style="display: inline-block;background: #ffffff;
        border-radius: 0px 3px 3px 0px;
        padding: 5px 10px; color: #000;"
      >
        {{ props.info }}
        <span style="font-size: 12px" v-if="props.subInfo">
          {{ props.subInfo }}</span
        >
      </div>
    </el-tag>
  </section>
</template>

<script>
export default {
  name: "begdaTag",

  props: {
    title: { type: String, default: null },
    info: { type: String, default: null },
    subInfo: { type: String, default: null },
    size: { type: Number, default: 14 }
  },
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style lang="less">
.begda-tab {
  .el-tag {
    /*font-size: 12px;*/
    font-weight: bold;
    padding: 0 !important;
    height: 35px !important;
  }
}
</style>
