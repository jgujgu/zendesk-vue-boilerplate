import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const ZAFClient = require('zendesk_app_framework_sdk')

Vue.config.productionTip = false
const client = ZAFClient.init();
const MAX_HEIGHT = '500px';

const app = new Vue({
  router,
  store,
  render: h => h(App)
});

try {
  client.on('app.registered', function () {
    alert("mounting app");
    app.$mount('#app')
    client.invoke('resize', { height: MAX_HEIGHT });
  });
} catch(error) {
  app.$mount('#app');
}
