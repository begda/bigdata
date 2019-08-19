<template>
  <div
    :class="['begda-data-panel', ' begda-data-panel-theme-' + type]"
    :style="styleBody"
  >
    <template v-if="header">
      <div
        :class="['begda-data-panel_header-' + type, 'clearfix']"
        :style="{ border: !headeBorder ? 'none' : '' }"
      >
        <!--        type控制header的 显示风格-->

        <template v-if="type === '1'">
          <ul class="begda-data-panel_header-title-line">
            <li>
              <div class="knob">&nbsp;</div>
            </li>
            <li class="begda-data-panel_header-title">
              <b>{{ title }}</b>
            </li>
            <li v-if="subTitle">
              <el-tag type="warning" effect="dark" class="subhead" size="mini"
                ><b>{{ subTitle }}</b></el-tag
              >
            </li>
          </ul>
        </template>
        <template v-if="type === '2'">
          <ul class="begda-data-panel_header-title-line">
            <li>
              <i class="knob begda begda-xiegang"></i>
            </li>
            <li class="begda-data-panel_header-title">
              <b>{{ title }}</b>
            </li>
            <li v-if="subTitle">
              <el-tag effect="dark" class="subhead" size="mini"
                ><b>{{ subTitle }}</b></el-tag
              >
            </li>
          </ul>
        </template>

        <div class="begda-data-panel_header-action">
          <slot name="action"></slot>

          <template v-if="refFilters">
            <template v-if="isFilters">
              <el-tooltip effect="dark" content="收起" placement="bottom">
                <el-button
                  icon="el-icon-arrow-up"
                  circle
                  size="mini"
                  @click="onFilters"
                ></el-button>
              </el-tooltip>
            </template>
            <template v-else>
              <el-tooltip effect="dark" content="展开" placement="bottom">
                <el-button
                  icon="el-icon-arrow-down"
                  circle
                  size="mini"
                  @click="onFilters"
                ></el-button>
              </el-tooltip>
            </template>
          </template>
        </div>
      </div>
      <!--复杂筛选-->
      <div class="begda-data-panel_filters" v-if="refFilters">
        <div style="padding: 20px" v-show="isFilters">
          <slot name="filters"></slot>
        </div>
      </div>
    </template>

    <!--工具按钮-->
    <div class="begda-data-panel_tools" v-if="refTools">
      <slot name="tools"></slot>
    </div>

    <!--中间内容区域-->
    <div :class="['begda-data-panel__body-' + type]">
      <!--      <el-scrollbar :style="styleScroll" tag="div">-->
      <slot></slot>
      <!--      </el-scrollbar>-->
    </div>

    <!--页脚-->
    <div class="begda-data-panel_footer" v-if="refFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BegdaDataPanel",
  data() {
    return {
      isFilters: this.filters
    };
  },
  props: {
    type: { type: String, default: "1" },
    title: { type: String, default: null },
    subTitle: { type: String, default: null },
    filters: { type: Boolean, default: false }, //筛选区域展开还是折叠控制
    header: { type: Boolean, default: true }, // 控制header区域是否显示
    headeBorder: { type: Boolean, default: true }, //header边框
    height: { type: Number, default: 0 }
  },

  methods: {
    onFilters() {
      this.isFilters = !this.isFilters;
    }
  },
  computed: {
    refFilters() {
      if (this.$slots.filters) {
        return true;
      }
    },
    refFooter() {
      if (this.$slots.footer) {
        return true;
      }
    },
    refTools() {
      if (this.$slots.tools) {
        return true;
      }
    },
    styleScroll() {
      if (this.height > 0) {
        return {
          height: this.height + "px",
          overflowY: "auto",
          overflowX: "hidden"
        };
      } else {
        return {
          overflow: "hidden"
        };
      }
    },
    styleBody() {
      // 如果 header 和 footer 都不存在的话 body区域的上下左右填充都是15px
      if (!this.header && !this.refFooter) {
        return {
          paddingTop: "15px",
          paddingBottom: "15px"
        };
      } else if (!this.header) {
        return {
          paddingTop: "15px"
        };
      } else if (!this.refFooter) {
        return {
          paddingBottom: "15px"
        };
      }
    }
  }
};
</script>

<style lang="less">
@import "../../theme/index";

.begda-data-panel-theme-1 {
  border: 1px @lineColor solid;
  background-color: @bgColor;
  border-radius: 5px;
}

.begda-data-panel-theme-2 {
  background-color: @bgColor;
  border-radius: 5px;
}

.header() {
  padding: 0px @paddingLeftRight;
  padding-top: 10px;
}

.header-title-line() {
  float: left;
  list-style: none;
  padding: 0;
  margin: 2px 0 0;
  display: block;
  /*height: 29px;*/

  :first-child {
    margin-left: 0;
  }

  > li {
    display: inline;
    margin-left: 8px;
    float: left;
  }

  .begda-data-panel_header-title {
    font-size: 16px;
    line-height: 27px;
    color: @titleColor;
  }

  .subhead {
    color: #000000;
    margin-top: 4px;
  }

  /*.knob {*/
  /*  background-color: #fc416d;*/
  /*  width: 5px;*/
  /*  height: 18px;*/
  /*  margin-top: 5px;*/
  /*}*/
}

.begda-data-panel {
  @paddingLeftRight: 15px;
  overflow: hidden;
  padding-bottom: 0 !important;

  .begda-data-panel_header-1 {
    padding: 0px @paddingLeftRight;
    padding-top: 10px;

    .begda-data-panel_header-title-line {
      .header-title-line();

      .knob {
        background-color: #fc416d;
        width: 5px;
        height: 18px;
        margin-top: 5px;
      }
    }
  }

  .begda-data-panel_header-2 {
    border-bottom: 1px @titleBlueColor dashed;

    .begda-data-panel_header-title-line {
      .header-title-line();

      .knob {
        background: initial !important;
        background: transparent !important;
        width: initial;
        height: initial;
        margin-top: initial;
        font-size: 22px;
        color: @titleBlueColor;
      }

      .begda-data-panel_header-title {
        color: @titleBlueColor;
        font-size: 18px;
        line-height: 27px;
      }
    }
  }

  .begda-data-panel_header-action {
    float: right;
    list-style: none;
    padding: 0;
    margin: 2px 0 0;
    display: block;
    height: 29px;

    .el-input {
      .el-input__inner {
        margin: 0;
        height: 29px;
        border-radius: 30px;
      }
    }

    .el-dropdown {
      margin-left: 10px;
    }

    button {
      padding: 5px;
      margin-left: 10px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .begda-data-panel_filters {
    /*padding-top: 15px;*/

    .el-form-item__label {
      font-size: 12px;
      line-height: 20px;
      padding-bottom: 2px;
    }

    .el-input__inner {
      padding: 0 5px;
    }
  }

  .begda-data-panel_tools {
    background-color: #f5faff;
    padding: 8px @paddingLeftRight;

    .el-button {
      padding: 6px 7px;
    }
  }

  .begda-data-panel__body-1 {
    padding: 0 @paddingLeftRight;
    /*overflow: hidden;*/
  }

  .begda-data-panel__body-2 {
    padding: 0;
    /*overflow: hidden;*/
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .begda-data-panel_footer {
    border-top: 1px @lineColor solid;
    padding: 10px @paddingLeftRight;
  }
}
</style>
