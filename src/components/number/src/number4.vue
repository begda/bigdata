<template>
  <div class="begda-number-4">
    <div style="float:left;padding-top: 8px" class="icon">
      <i :class="[icon]" :style="{ color: titleColor, fontSize: iconSize }"></i>
    </div>
    <div class="title">
      <b :style="{ color: titleColor }">{{ title }}</b>
      <div class="info">{{ info }}</div>
    </div>
    <div class="sub-title">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  name: "begdaNumber4",
  props: {
    titleColor: { type: String, default: "#000000" },
    title: { type: String, default: "000000" },
    subTitle: { type: String, default: "单位" },
    info: { type: String, default: "描述内容" },
    icon: { type: String, default: "begda begda-wendu" },
    iconSize: { type: String, default: "45px" }
  }
};
</script>

<style scoped lang="less">
.begda-number-4 {
  .title {
    font-size: 25px;
    float: left;
  }
  .sub-title {
    padding-top: 10px;
    padding-left: 5px;
    float: left;
    font-size: 12px;
    color: #ffffff;
  }
  .info {
    font-size: 13px;
    color: #ffffff;
    padding-left: 5px;
    background: rgba(0, 0, 0, 0.4);
  }
}
</style>
