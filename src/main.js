import { createApp, Vue } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(store)
  .use(vuetify)
  .mount('#app')

Vue.use(window["vue-js-modal"].default, { dialog: true });

var app = new Vue({
  el: '#app',
  methods: {
    show : function() {
      this.$modal.show('dialog', {
        title: 'Create New Chat Room',
        buttons: [
          {
            title: 'Cancel',
          },
          {
            title: 'Confirm'
          }
        ]
      });
    },
    hide : function () {
      this.$modal.hide('hello-world');
    },
  }
})