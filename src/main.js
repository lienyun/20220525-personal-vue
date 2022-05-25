import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css"
//axios
import axios from 'axios'
import VueAxios from 'vue-axios'


createApp(App).use(router).use(VueAxios, axios).mount('#app')

//.use(VueAxios, axios)掛載