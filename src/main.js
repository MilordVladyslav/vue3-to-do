import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import {faArrowRotateLeft, faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowRotateLeft);
library.add(faCheck);
library.add(faXmark)
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");