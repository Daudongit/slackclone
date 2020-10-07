import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

// import {
//   faUser, faLock, faSignOutAlt, faCog
// } from '@fortawesome/free-solid-svg-icons'

// import {
//   faGithub
// } from '@fortawesome/free-brands-svg-icons'


// library.add(
//     faUser, faLock, faSignOutAlt, faCog, faGithub
// )

// import {fad} from '@fortawesome/pro-duotone-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
// import {fal} from '@fortawesome/pro-light-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(far,fas,fab)

Vue.component('fa', FontAwesomeIcon)
