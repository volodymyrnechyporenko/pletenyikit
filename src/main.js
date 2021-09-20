import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import '@/assets/css/style.css'


library.add(faArrowAltCircleUp, faFacebookSquare, faInstagram, faBars, faTimes);

const app = createApp(App)

app
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');