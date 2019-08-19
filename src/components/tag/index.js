import c from "./src/main";

/* istanbul ignore next */
c.install = function(Vue) {
  Vue.component(c.name, c);
};

export default c;
