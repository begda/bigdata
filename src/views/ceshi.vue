<template>
  <div
    style="min-height: 920px;position: relative;"
    class="clearfix"
  >
    <div
      style="height: 20px; background: #001759; border-bottom:1px solid #0071BC; position: relative"
    >
      <div class=""></div>
      <div class="center-block" style="width: 480px;overflow: hidden">
        <img
          src="img/title.svg"
          style="position: absolute; top: -2px;left:0; width: 100%"
        />
      </div>
    </div>

    <div style="position: absolute;left: 39%;top: 70px;  ">
      <begda-card style="width: 315px">
        <begda-number3
          title-color="#00C0FF"
          title="人均功效"
          info="22"
        ></begda-number3>
        <begda-number3
          title-color="#00C0FF"
          title="标准化等级"
          info="222222"
        ></begda-number3>
      </begda-card>
    </div>

    <div style="position: absolute;left: 39%;bottom: 400px;width: 400px;  ">
      <begda-card type="3">
        <div style="color: #00C0FF">
          <b>重点工程</b>
        </div>
        <div>
          1.开二 队施L已15.16-24130机巷转载机以外打锚索:”14日0点班打锚索13根;
          8点班打锚索14根; 4点班打锚索18根。
        </div>
      </begda-card>
    </div>

    <!--    左侧-->
    <div style="position: absolute;left: 10px;top: 40px; width: 450px; ">
      <begda-data-panel title="值班领导" type="1" style="float: left;">
        <ul
          class="list-inline"
          style="color: #A2FBFF;line-height: 40px;font-size: 18px"
        >
          <li>
            <b>王全民</b>
          </li>
          <li>
            <b>张军</b>
          </li>
          <li>
            <b>刘艳红</b>
          </li>
          <li>
            <b>许朝军</b>
          </li>
        </ul>
      </begda-data-panel>

      <begda-data-panel
        title="资源储量"
        type="2"
        sub-title="万吨"
        style="float: left;"
      >
        <ul class="list-inline" style="">
          <li>
            <begda-number1
              title-color="#FAEC21"
              title="54873"
              sub-title="万吨"
              info="勘探储量"
            ></begda-number1>
          </li>
          <li>
            <begda-number1
              title-color="#73FF00"
              title="54873"
              sub-title="万吨"
              info="可采储量"
            ></begda-number1>
          </li>
          <li>
            <begda-number1
              title-color="#FAEEAE"
              title="54873"
              sub-title="万吨"
              info="剩余可采量"
            ></begda-number1>
          </li>
        </ul>
      </begda-data-panel>

      <begda-data-panel
        title="产量"
        type="2"
        sub-title="占比"
        style="float: left;width: 300px;"
      >
        <div style="padding: 10px 0px;" class="">
          <begda-progress
            :percentage="90"
            color="#39B54A"
            info="年"
          ></begda-progress>
          <begda-progress
            :percentage="20"
            color="#FBB03B"
            info="年"
          ></begda-progress>
          <begda-progress
            :percentage="50"
            color="#AFA7FC"
            info="年"
          ></begda-progress>
        </div>
      </begda-data-panel>
      <begda-data-panel
        title="掘进"
        type="2"
        sub-title="占比"
        style="float: left;width: 300px;"
      >
        <div style="padding: 10px 0px; " class="">
          <begda-progress
            :percentage="90"
            color="#39B54A"
            info="年"
          ></begda-progress>
          <begda-progress
            :percentage="20"
            color="#FBB03B"
            info="年"
          ></begda-progress>
          <begda-progress
            :percentage="50"
            color="#AFA7FC"
            info="年"
          ></begda-progress>
        </div>
      </begda-data-panel>

      <begda-data-panel
        title="销量"
        type="2"
        sub-title="万吨"
        style="float: left;"
      >
        <ul class="list-inline" style="padding-top: 10px">
          <li>
            <begda-number2
              title-color="#A2FBFF"
              icon="begda begda-meitanshengchan"
              title="222222"
              info="年销量"
            ></begda-number2>
          </li>
          <li>
            <begda-number2
              title-color="#EAFFAA"
              icon="begda begda-meitanshengchan"
              title="222222"
              info="月销量"
            ></begda-number2>
          </li>
          <li>
            <begda-number2
              title-color="#FFC6A1"
              icon="begda begda-meitanshengchan"
              title="222222"
              info="日销量"
            ></begda-number2>
          </li>
        </ul>
      </begda-data-panel>
    </div>
    <!--    /左侧-->

    <!--    右侧-->
    <div style="position: absolute;right: 10px;top: 40px;width: 500px; ">
      <begda-data-panel title="风险等级" type="2" style="float:right;">
        <div style="padding-top: 10px">
          <begda-number5
            color="#FF6271"
            :size="30"
            info="红"
            title="2222"
            icon="begda begda-duiwu"
          ></begda-number5>
          <begda-number5
            color="#FFA100"
            :size="30"
            info="橙"
            title="2222"
            icon="begda begda-duiwu"
          ></begda-number5>
          <begda-number5
            color="#FEFF00"
            :size="30"
            info="黄"
            title="2222"
            icon="begda begda-duiwu"
          ></begda-number5>
          <begda-number5
            color="#00E5FF"
            :size="30"
            info="蓝"
            title="2222"
            icon="begda begda-duiwu"
          ></begda-number5>
        </div>
      </begda-data-panel>
      <begda-data-panel
        title="隐患数量"
        type="2"
        sub-title="整改率20%"
        style="float:right;width: 300px"
      >
        <div style="padding: 10px 0px; " class="">
          <begda-progress
            :text-inside="true"
            :stroke-width="25"
            :percentage="90"
            color="#39B54A"
            info="年"
          ></begda-progress>
          <div style="height: 10px"></div>
          <begda-progress
            :text-inside="true"
            :stroke-width="25"
            :percentage="20"
            color="#FBB03B"
            info="年"
          ></begda-progress>
          <div style="height: 10px"></div>
          <begda-progress
            :text-inside="true"
            :stroke-width="25"
            :percentage="50"
            color="#FC416D"
            info="年"
          ></begda-progress>
        </div>
      </begda-data-panel>

      <begda-data-panel
        title="安全检测"
        type="2"
        sub-title="333处"
        style="float:right;"
      >
        <ul class="list-inline" style="padding: 10px 0">
          <li>
            <begda-number2
              title-color="#A2FBFF"
              icon="begda begda-tubiao21"
              title="222222"
              info="瓦斯"
            ></begda-number2>
          </li>
          <li>
            <begda-number2
              title-color="#EAFFAA"
              icon="begda begda-tubiao17"
              title="222222"
              info="一氧化碳"
            ></begda-number2>
          </li>
          <li>
            <begda-number2
              title-color="#FFC6A1"
              icon="begda begda-wendu"
              title="222222"
              info="温度"
            ></begda-number2>
          </li>
        </ul>
      </begda-data-panel>

      <begda-data-panel
        title="工业视频"
        type="2"
        style="float:right;width: 350px"
      >
        <div style="padding: 10px 0" class="clearfix">
          <div style="float:left;">
            <begda-number4
              title-color="#FAEC21"
              icon="begda begda-gongyeshipin"
              title="333"
              info="井上视频"
              sub-title="处"
            ></begda-number4>
          </div>
          <div style="float: right;">
            <begda-number4
              title-color="#CDFCA8"
              icon="begda begda-gongyeshipin"
              title="222"
              info="井下视频"
              sub-title="处"
            ></begda-number4>
          </div>
        </div>
      </begda-data-panel>
      <begda-data-panel
        title="人员定位"
        type="2"
        sub-title="人"
        style="float:right;"
      >
        <ul class="list-inline" style="padding-top: 10px">
          <li>
            <begda-tag
              color="#22B373"
              effect="dark"
              title="矿领导"
              sub-info="(人)"
              info="222"
            ></begda-tag>
          </li>
          <li>
            <begda-tag
              color="#FBB03B"
              effect="dark"
              title="超时人员"
              sub-info="(人)"
              info="222"
            ></begda-tag>
          </li>
          <li>
            <begda-tag
              color="#FC416D"
              effect="dark"
              title="超员人员"
              sub-info="(人)"
              info="222"
            ></begda-tag>
          </li>
        </ul>
      </begda-data-panel>

      <begda-card style="float:right;width: 410px;margin-top: 20px">
        <begda-number3
          title-color="#00AAFF"
          title="束管"
          info="222222"
        ></begda-number3>
        <begda-number3
          title-color="#00AAFF"
          title="矿压"
          info="222222"
        ></begda-number3>
        <begda-number3
          title-color="#00AAFF"
          title="水文"
          info="222222"
        ></begda-number3>
      </begda-card>
    </div>
    <!--    /右侧-->

    <!--    底部-->
    <div style="position: absolute;left: 0;bottom: 0px; width: 100%;">
      <begda-data-panel
        title="人机环管技近一周诊断趋势"
        type="2"
        :heade-border="false"
      >
        <template #action>
          <begda-number3
            title-color="#00C0FF"
            title="动态诊断"
            info="22分"
          ></begda-number3>
        </template>
        <begda-card style="margin-top: 10px">
          <begda-echarts :options="c" :height="120"></begda-echarts>
        </begda-card>
      </begda-data-panel>
    </div>
    <!--    /底部-->
  </div>
</template>

<script>
var chartColor = "#006AFF";
var chartColorGreen = "#006AFF";
// @ is an alias to /src
// 指定图表的配置项和数据
let option2 = {
  grid: {
    x: "0px",
    y: "0px",
    x2: "0px",
    y2: "20px"
    // left:'10%'
  },
  tooltip: {
    trigger: "item",
    formatter: "{b}年: {c} (处)"
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    nameLocation: "end",
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    //改变x轴字体颜色和大小
    axisLabel: {
      textStyle: {
        color: chartColor,
        fontSize: "12"
      },
      padding: [0, 0, 0, 25]
    },
    axisLine: {
      show: false
    },
    axisTick: {
      lineStyle: {
        color: chartColor
      }
    }
  },
  yAxis: {
    type: "value",
    show: false
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",

      symbolSize: 12,
      smooth: true,
      // 点颜色
      itemStyle: {
        color: chartColorGreen
      },
      //线颜色
      lineStyle: {
        width: 4,
        color: chartColorGreen
      },
      areaStyle: {
        color: chartColorGreen
      }
    }
  ]
};

export default {
  name: "home",
  data() {
    return {
      c: option2
    };
  },
  created() {},
  mounted() {},

  methods: {}
};
</script>
