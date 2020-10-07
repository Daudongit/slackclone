<template>
    <p class="text-item">
        <slot/>
    </p>
</template>
<script>
export default {
    name:'TextItem'
}
</script>
<style scoped>
.text-item{
    color: #292829;
    line-height: 1.46668;
    font-size: 15px;
    text-align: left;
}
</style>