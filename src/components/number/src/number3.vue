<template>
  <div class="begda-number-3 ">
    <div class="title">
     <b :style="{ color: titleColor }">{{title}}</b>
    </div>
    <div class="sub-title">
      <div class="info" >{{ info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "begdaNumber3",
  props: {
    titleColor: { type: String, default: "#ffffff" },
    title: { type: String, default: "瓦斯" },
    info: { type: String, default: "22222" },

  }
};
</script>

<style scoped lang="less">
.begda-number-3 {

  .title {
    float: left;
    line-height: 2.2em;
    margin-left: 10px;
  }
  .sub-title {
    padding-top: 5px;
    padding-left: 5px;
    float: left;
    font-size: 16px;
    color: #ffffff;
  }
  .info {
    font-size: 18px;
    color: #000;
    padding: 0 5px;
    border-radius: 5px;
    background: #fcee21;
    margin-right: 10px;
  }

  /*.list-inline {*/
  /*  margin: 0;*/
  /*  padding-left: 0;*/
  /*  margin-left: -5px;*/
  /*  list-style: none;*/
  /*}*/
  /*.list-inline > li {*/

  /*  display: inline-block;*/
  /*  padding-right: 3px;*/
  /*  padding-left: 3px;*/
  /*}*/

}
</style>
