import './bootstrap';

import { createApp, VueElement } from 'vue';
import app from './vue/app.vue'; 

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPlusSquare, faTrash)

createApp(app)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

 