<template>
    <section class="content">
        <left-side/>
        <main-content/>
        <right-side/>
    </section>
</template>
<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import LeftSide from '../layouts/LeftSide.vue'
import MainContent from '../layouts/MainContent.vue'
import RightSide from '../layouts/RightSide.vue'

export default {
    name:'Dashboard',
    components:{LeftSide,MainContent,RightSide},
    created(){
        this.$emit('update:layout',DefaultLayout)
    }
}
</script>
<style scoped>
.content{
    display: grid;
    /* grid-template-columns: 250px auto 2fr; */
    grid-template-columns: .95fr 2.65fr 1.4fr;
    /* grid-template-rows: 100vh; */
    height: 100vh;
}
</style>