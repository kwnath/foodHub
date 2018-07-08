import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import vueCalendar from 'vue2-simple-calendar';

Vue.use(vueCalendar, {
  // configuration goes here.
});
Vue.use(ElementUI, { locale })
sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
