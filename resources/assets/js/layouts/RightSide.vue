<template>
    <div class="right-side">
        <div class="head">
        </div>   
        <reply-chat-list />    
    </div>
</template>
<script>
import TextItem from '../components/TextItem.vue'
import ChatItemWrapper from '../components/ChatItemWrapper.vue'
import ReplyChatList from '../components/ReplyChatList.vue'

export default {
    name:'Rightside',
    components:{ChatItemWrapper,TextItem,ReplyChatList}
}
</script>
<style scoped>
.right-side .head{
    height: 70px;
    border-bottom: 1px solid #E2E2E2;
}
.right-side{
    border-left: 1px solid #E2E2E2;
}
</style>