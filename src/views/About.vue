<template>
  <div class="home">
    <div>

      <img src="11.svg" style="width: 2000px">
    </div>
    <el-row :gutter="20">
      <el-col :span="8"
      ><begda-data-panel title="隐患治理情况">
        <template slot="action">
          <el-button type="danger">危险按钮</el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-dropdown>
            <!--              <span class="el-dropdown-link">-->
            <!--                下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
            <!--              </span>-->
            <el-button type="primary"
            >危险按钮
              <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i
              ></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
        <div slot="filters">隐患治理情况</div>
        <begda-echarts :options="a" @loading="aaa"></begda-echarts>
        <div slot="footer">
          <el-button @click="onJiazai" size="mini">加载</el-button>
          <el-button @click="onChongzhi" size="mini">重置</el-button>
        </div></begda-data-panel
      ></el-col
      >
      <el-col :span="8">
        <begda-data-panel title="值班领导" type="2" sub-title="万吨">
          <template slot="action">
            <el-button type="text" style="color: #ff83b7;"
            ><i class="zhzs zhzs-icon-schedule"></i> 危险按钮</el-button
            >
            <el-button type="text" style="color: #ff83b7;"
            ><i class="zhzs zhzs-icon-schedule"></i> 危险按钮</el-button
            >
            <el-button type="text" style="color: #ff83b7;"
            ><i class="zhzs zhzs-icon-schedule"></i> 危险按钮</el-button
            >
          </template>

          <begda-echarts :options="b"></begda-echarts>
          <div slot="footer">
            <el-button @click="onJiazai" size="mini">加载</el-button>
            <el-button @click="onChongzhi" size="mini">重置</el-button>
          </div>
        </begda-data-panel>
      </el-col>
      <el-col :span="8">
        <begda-data-panel title="标题文字" type="2" sub-title="万吨">
          <template slot="action">
            <el-button icon="el-icon-arrow-right" circle></el-button>
          </template>
          <div style="height: 400px;">
            <begda-number1
                    title-color="#FAEC21"
                    title="54873"
                    sub-title="万吨"
                    info="勘探储量"
            ></begda-number1>
            <begda-number2
                    title-color="#73FF00"
                    icon="begda begda-meitanshengchan"
                    title="222222"
                    info="瓦斯"
            ></begda-number2>
            <begda-number3
                    title-color="#00C0FF"
                    title="人均功效"
                    info="222222"
            ></begda-number3>

            <begda-progress
                    :percentage="90"
                    color="#39B54A"
                    info="年"
            ></begda-progress>
            <begda-progress
                    :text-inside="true"
                    :stroke-width="25"
                    :percentage="90"
                    color="#FBB03B"
                    info="已整改"
            ></begda-progress>
            <div style="height: 30px"></div>
            <begda-card>
              <begda-number3
                      title-color="#00C0FF"
                      title="人均功效"
                      info="222222"
              ></begda-number3>
              <begda-number3
                      title-color="#00C0FF"
                      title="人均功效"
                      info="222222"
              ></begda-number3>
            </begda-card>
            <begda-card type="2">   是发上的发生的</begda-card>
            <begda-card type="3">   是发上的发生的</begda-card>
          </div>
        </begda-data-panel>
      </el-col>
    </el-row>
    <div style="height: 20px"></div>
    <begda-data-panel title="隐患治理情况">
      <template slot="action">
        <el-button type="primary">主要按钮</el-button>
        <el-button>危险按钮</el-button>
        <el-button type="text">危险按钮</el-button>
        <el-dropdown>
          <!--              <span class="el-dropdown-link">-->
          <!--                下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
          <!--              </span>-->
          <el-button
          >危险按钮 <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i
          ></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <begda-echarts :options="a" @loading="aaa"></begda-echarts>
    </begda-data-panel>

    <begda-data-panel title="图标按钮">
      <el-badge :value="12">
        <el-button type="text" class="icon-badge">
          <i class="zhzs zhzs-meitanshengchan icon-max lv"></i>
        </el-button>
        <div style="" class="icon-title">煤矿</div>
      </el-badge>
      asdfa
      <div>
        <span
        ><i
                class="zhzs zhzs-duiwu"
                style="color: aliceblue;font-size:60px"
        ></i>
          <div>文字描述</div>
        </span>
      </div>
    </begda-data-panel>
  </div>
</template>

<script>
  // @ is an alias to /src

  import BegdaProgress1 from "../components/progress/src/progress1";
  export default {
    name: "home",
    components: { BegdaProgress1 },
    data() {
      return {
        a: {
          color: ["#21abfa", "#fa5220", "#1de826", "#fae21d"],
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: "line"
            }
          ]
        },
        b: {},
        c: {
          color: ["#21abfa", "#fa5220", "#1de826", "#fae21d"],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "55%",
              center: ["50%", "60%"],
              data: [
                { value: 335, name: "直接访问" },
                { value: 310, name: "邮件营销" },
                { value: 234, name: "联盟广告" },
                { value: 135, name: "视频广告" },
                { value: 1548, name: "搜索引擎" }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        }
      };
    },
    created() {},
    mounted() {
      this.onJiazai();
    },

    methods: {
      aaa(chart) {},
      onJiazai() {
        const self = this;
        self.b = {};
        setTimeout(() => {
          self.b = {
            color: ["#21abfa", "#fa5220", "#1de826", "#fae21d"],
            grid: {
              x: "7%",
              y: "50px",
              x2: "0px",
              y2: "20px"
              // left:'10%'
            },
            tooltip: {
              trigger: "item",
              formatter: "{a}<br>{b}年: {c} (处)"
            },

            legend: {
              right: "0",
              top: 0,
              textStyle: {
                fontSize: 12,
                color: "#fff"
              },
              data: [
                { name: "已整改", icon: "rect" },
                { name: "未整改", icon: "rect" },
                { name: "按时上报", icon: "rect" }
              ]
            },
            xAxis: {
              type: "category",
              data: ["2010", "2012", "2013", "2014", "2015"],
              nameTextStyle: {
                color: "#ffffff"
              },

              //  改变x轴字体颜色和大小
              axisLabel: {
                textStyle: {
                  color: "#21abfa",
                  fontSize: "12"
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                lineStyle: {
                  color: "#21abfa"
                }
              }
            },
            yAxis: {
              type: "value",

              //隐藏边线
              axisLine: {
                show: false
              },
              //改变刻度
              axisTick: {
                show: false,
                lineStyle: {
                  color: "#21abfa"
                }
              },
              //改变线颜色
              splitLine: {
                show: true,
                //  改变轴线颜色
                lineStyle: {
                  // 使用深浅的间隔色
                  color: "#0071BC"
                }
              },
              //  改变x轴字体颜色和大小
              axisLabel: {
                textStyle: {
                  color: "#21abfa",
                  fontSize: "12"
                }
              }
            },
            series: [
              {
                name: "已整改",
                data: [
                  29,
                  69,
                  100,
                  300,
                  30,
                  22,
                  55,
                  89,
                  32,
                  43,
                  78,
                  34,
                  12,
                  67,
                  45,
                  98,
                  32,
                  34
                ],
                type: "bar",

                //线颜色
                lineStyle: {
                  width: 2,
                  color: "#39B54A"
                }
              },
              {
                name: "未整改",
                data: [
                  29,
                  69,
                  100,
                  300,
                  30,
                  22,
                  55,
                  89,
                  32,
                  43,
                  78,
                  34,
                  12,
                  67,
                  45,
                  98,
                  32,
                  34
                ],
                type: "bar",

                //线颜色
                lineStyle: {
                  width: 2,
                  color: "#FC416D"
                }
              },
              {
                name: "按时上报",
                data: [
                  29,
                  69,
                  100,
                  300,
                  30,
                  22,
                  55,
                  89,
                  32,
                  43,
                  78,
                  34,
                  12,
                  67,
                  45,
                  98,
                  32,
                  34
                ],
                type: "bar",

                //线颜色
                lineStyle: {
                  width: 2,
                  color: "#3FA9F5"
                }
              }
            ]
          };
          console.log(self.b);
        }, 2000);
      },
      onChongzhi() {
        this.b = {};
      },
      bbb(chart) {
        // console.log(chart)
        // chart=false
        // setTimeout(()=>{
        //   chart.hideLoading();
        // },5000)
      }
    }
  };
</script>
