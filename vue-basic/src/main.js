import { createApp } from 'vue'
import App from './App.vue'
import store from '../src/store/Store';

const app = createApp(App)

app.use(store)

app.mount('#app')

//  createApp(App).use(store).mount('#app');
