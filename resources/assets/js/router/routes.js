
// function select_component(path){
//     return () => import(`../components/${path}`).then(m => m.default || m)
// }

function select_page(path){
    return () => import(`../pages/${path}`).then(m => m.default || m)
}
  
  export default [
    // { path: '/', name: 'login', component: select_page('Login.vue') },
    // { path: '/dashboard', name: 'dashboard', component: select_page('Dashboard.vue') },
    { path: '/', name: 'dashboard', component: select_page('Dashboard.vue') }
  
    // { path: '*', component: page('errors/404.vue') }
  ]
  