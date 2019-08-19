<template>
  <div class="begda-number-2">
    <div class="title" >
      <i
        :class="[icon, 'icon']"
        :style="{ color: titleColor, fontSize: iconSize+'px' }"
      ></i>
    </div>
    <div class="sub-title">
      <b :style="{ color: titleColor }">{{ info }}</b>
      <div class="info">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "begdaNumber2",
  props: {
    titleColor: { type: String, default: "#ffffff" },
    title: { type: String, default: "瓦斯" },
    info: { type: String, default: "22222" },
    icon: { type: String, default: "begda begda-wendu" },
    iconSize: { type: Number, default: 45 }
  }
};
</script>

<style scoped lang="less">
.begda-number-2 {
  white-space: nowrap;
  .title {
    float: left;
    padding-top: 2%;
    /*.icon {*/
    /*  font-size: 55px;*/
    /*}*/
  }
  .sub-title {
    padding-top: 7px;
    padding-left: 5px;
    float: left;
    font-size: 16px;
    color: #ffffff;
  }
  .info {
    font-size: 16px;
    color: #000;
    padding: 0 5px;
    border-radius: 5px;
    background: #fcee21;
  }
}
</style>
