<template>
  <div id="app">
      <component :is="layout">
          <router-view :layout.sync="layout"/>
      </component>
  </div>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'

export default {
    el: '#app',
    name:'App',

    data: () => ({
        layout: DefaultLayout,
    })
}
</script>
