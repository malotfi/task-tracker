import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import fontawesome free solid icons */
import { faTimes, faEdit, faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTimes, faEdit, faSquare, faCheckSquare);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
