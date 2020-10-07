<template>
    <chat-item-wrapper>
        <text-item>
            This is an example when using MongoDB:
            I display at most 20 record at a time, and use their pipeline to search for a name, and use the limit and offset pipeline for pagination, and refetch the next page after scrolling to the last record, that way you can handle big amounts of data sequentially, without overloading the process of your server. This way, you can also refetch on every change of the searchbox, making it a live search.
        </text-item>
        <thread-showcase />
    </chat-item-wrapper>
</template>
<script>
import ChatItemWrapper from './ChatItemWrapper.vue'
import ThreadShowcase from './ThreadShowcase.vue'
import TextItem from './TextItem.vue'

export default {
    name:'TextChatItem',
    components:{ChatItemWrapper,ThreadShowcase,TextItem}
}
</script>
<style scoped>

</style>