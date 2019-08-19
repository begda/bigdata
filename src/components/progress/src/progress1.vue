<!--<template functional>-->
<!--  <div class="begda-progress-1">-->
<!--    &lt;!&ndash;    {{ data }}啊上的发上的{{ props }}&ndash;&gt;-->
<!--    <el-progress v-bind="data.attrs"></el-progress>-->
<!--    <div style="background: #ff0000;">-->
<!--        {{injections}}-->
<!--      {{ data }}{{ props.info }}{{ data.attrs.percentage }}{{ dataAttrs }}-->
<!--    </div>-->
<!--    <el-progress :percentage="100" :format="format"></el-progress>-->
<!--    <el-progress :percentage="100" status="success"></el-progress>-->
<!--    <el-progress :percentage="100" status="warning"></el-progress>-->
<!--    <el-progress :percentage="50" status="exception"></el-progress>-->
<!--  </div>-->
<!--</template>-->

<script>
// export default {
//   functional: true,
//   name: "begdaProgress1",
//   props: {
//     titleColor: { type: String, default: "#000000" },
//     title: { type: String, default: "000000" },
//     subTitle: { type: String, default: "单位" },
//     info: { type: String, default: "描述内容" }
//   },
//   render(createElement, context) {
//     console.log(context)
//     return 'ssss'
//   }
// };

function rgba(sColor, alpha) {
  //十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    return "rgba(" + sColorChange.join(",") + "," + alpha + ")";
  }
  return sColor;
}

export default {
  name: "begdaProgress",
  functional: true,
  props: {
    color: { type: String, default: "#000000" },
    info: { type: String, default: "描述内容" }
  },

  render(createElement, { props, data }) {
    // 组合组件自身的 props 和 父组件的 porps
    let attrs = { ...data.attrs, ...props };

    let parogress1 = (
      <div class="begda-progress-1">
        <el-progress props={attrs} />
        <div
          class="box"
          style={{
            background: rgba(attrs.color, 0.2),
            "border-bottom-color": attrs.color
          }}
        >
          <div class="info">{attrs.info}</div>
          <div class="number">{attrs.percentage}%</div>
        </div>
      </div>
    );
    let parogress2 = (
      <div class="begda-progress-2">
        <div
          class="info"
          style={{
            height: attrs["stroke-width"] + "px",
            "line-height": attrs["stroke-width"] + "px"
          }}
        >
          {attrs.info}
        </div>
        <el-progress props={attrs} />
      </div>
    );
    function parogress() {
      if (attrs["text-inside"]) {
        return parogress2;
      }

      return parogress1;
    }

    return <div>{parogress()}</div>;
  }
};
</script>

<style lang="less">
.reset-progress() {
  .el-progress-bar {
    padding: 0;
    margin: 0;
    border-radius: 0;
  }
  .el-progress__text {
    display: none;
  }
  .el-progress-bar__outer {
    border-radius: 0;
  }
  .el-progress-bar__inner {
    border-radius: 0;
  }

  .el-progress {
    line-height: 0;
  }
}

.begda-progress-2 {
  .reset-progress();
  position: relative;
  .info {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    z-index: 1;
    padding-left: 5px;
    font-size: 14px;
    color: #ffffff;
  }
}
.begda-progress-1 {
  .reset-progress();
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
  .box {
    /*padding-left: 5px;*/
    padding: 3px 5px;
    border-bottom: 1px saddlebrown solid;
    /*background: rgba(0, 0, 0, 0.4);*/
    list-style: none;
    div {
      width: 50%;
      display: inline-block;
    }
    .info {
      font-size: 14px;
      color: #ffffff;
    }
    .number {
      text-align: right;
      font-size: 14px;
      color: #ffffff;
    }
  }
}
</style>
