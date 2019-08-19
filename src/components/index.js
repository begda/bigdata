import panel from "./panel/index";
import number from "./number/index";
import Echarts from "./echarts/index";
import progress from "./progress/index";
import card from "./card/index";
import tag from "./tag/index";
import "./theme/index.less";
const components = [panel, Echarts, ...number, ...progress, card, tag];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { panel, number, Echarts, progress, card, tag };

export default { install };
