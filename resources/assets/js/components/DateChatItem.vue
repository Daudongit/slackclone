<template>
    <p class="date"><span><slot/></span></p>
</template>
<script>
export default {
    name:'DateChatItem'
}
</script>
<style lang="scss" scoped>
$line-color:#DDDDDD;
$boder-line-color:#D7D7D7;
$text-color:#292829;

.date{
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $text-color;

    span{
        font-size: 13px;
        font-weight: bold;
        padding: 5px 20px;
        border-radius: 10px;
        border: 1px solid $boder-line-color;
        background-color: #ffffff;
    }

    &::before,&::after{
        content:'';
        display: block;
        flex: 1;
        background-color: $line-color;
        height: 1px;
    }
}
</style>