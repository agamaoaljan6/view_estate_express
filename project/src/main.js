// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
// import './../node_modules/bulma/css/bulma.css';
import VueCarousel from "@chenfengyuan/vue-carousel";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faLaptop, faCommentDollar, faBuilding} from "@fortawesome/free-solid-svg-icons";
// import { faFacebook faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHome, faLaptop, faCommentDollar, faBuilding, faFacebook, faTwitter, faInstagram,);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueCarousel);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
