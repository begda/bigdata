<template>
  <div class="begda-number-5" :style="{ width: size }">
    <div
      class="info"
      :style="{
        width: size + 'px',
        height: size + 'px',
        color: color,
        fontSize: size / 2 + 'px',
        borderColor: color
      }"
    >
      <template v-if="info">
        {{ info }}
      </template>
      <template v-else>
        <i :class="[icon, 'icon']"></i>
      </template>
    </div>
    <div
      class="title"
      :style="{
        color: color,
        fontSize: titleSize + 'px',
        borderColor: color,
        width: size
      }"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "begdaNumber5",
  props: {
    color: { type: String, default: null },
    title: { type: String, default: null },
    info: { type: String, default: null },
    icon: { type: String, default: null },
    // iconSize: { type: Number, default: 20 },
    titleSize: { type: Number, default: 14 },
    size: { type: Number, default: 40 }
  }
};
</script>

<style scoped lang="less">
.begda-number-5 {
  display: inline-block;
  margin-right: 10px;
  margin-left: 10px;

  .title {
    font-size: 15px;
    text-align: center;
    line-height: 2em;
  }

  .info {
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
    background: transparent;
    width: 40px;
    height: 40px;
    border: 3px #3e8b3f solid;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    line-height: 2em;
  }
}
</style>
