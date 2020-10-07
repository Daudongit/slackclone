import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

const router = createRouter()

export default router


function createRouter () {
    const router = new Router({
      scrollBehavior,
      mode: 'history',
      routes
    })
  
    // router.beforeEach(beforeEach)
    // router.afterEach(afterEach)
  
    return router
}

  /**
 * Scroll Behavior
 *
 * @link https://router.vuejs.org/en/advanced/scroll-behavior.html
 *
 * @param  {Route} to
 * @param  {Route} from
 * @param  {Object|undefined} savedPosition
 * @return {Object}
 */
function scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
  
    if (to.hash) {
      return { selector: to.hash }
    }
  
    const [component] = router.getMatchedComponents({ ...to }).slice(-1)
  
    if (component && component.scrollToTop === false) {
      return {}
    }
  
    return { x: 0, y: 0 }
}