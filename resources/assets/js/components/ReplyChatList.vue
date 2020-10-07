<template>
    <div class="reply-container">
        <ul class="replies">
            <li>
                <chat-item-wrapper>
                    <text-item>
                        This is an example when using MongoDB:
                        I display at most 20 record at a time, and use their pipeline to search for a name, and use the limit and offset pipeline for pagination, and refetch the next page after scrolling to the last record, that way you can handle big amounts of data sequentially, without overloading the process of your server. This way, you can also refetch on every change of the searchbox, making it a live search.
                    </text-item>
                </chat-item-wrapper>
            </li>
            <li>
                <p class="reply-count"><span>4 replies</span></p>
            </li>
            <li v-for="(reply,k) in replies" :key="k">
                <chat-item-wrapper>
                    <text-item>
                        I display at most 20 record at a time, and use their pipeline to search for a name, and use the limit and offset pipeline for pagination, and refetch the next page after scrolling to the last record, that way you can handle big amounts of data sequentially, without overloading the process of your server. This way, you can also refetch on every change of the searchbox, making it a live search.
                    </text-item>
                </chat-item-wrapper>
            </li>
        </ul>
    </div>
</template>
<script>
import ChatItemWrapper from './ChatItemWrapper.vue'
import TextItem from './TextItem.vue'

export default {
    name:'RelyChatList',
    components:{ChatItemWrapper,TextItem},
    data:()=>({
        replies:[1,2,3,4,5,6,7,9,0]
    })
}
</script>
<style lang="scss" scoped>
$thumb-bg:#898989;
$track-bg:#ffffff;

.reply-container 
{
    font-size:12px;
    overflow:hidden;

    .reply-count{
        color:#A9A9A9;
        padding-left: 20px;
        display: flex;
        align-items: center;

        &::after{
            content: '';
            display: block;
            // min-width:250px;
            flex:1;
            height:1px;
            background-color:#E2E2E2;
            margin-left:10px;
            margin-right: 10px;
        }
    }

    .replies{
        list-style: none;
        overflow-y:scroll;
        max-height: 85vh;
        // -ms-overflow-style: none;
        margin-right: -50px;
        padding-right: 50px;
        scrollbar-width: thin;
        scrollbar-color: $thumb-bg $track-bg;
        transition: all .1s;

        &:hover{
            margin-right: 0px;
            padding-right: 0px;
        }

        &::-webkit-scrollbar{
            width:12px
        } 

        &::-webkit-scrollbar-track{
            background-color: $track-bg;
        }

        &::-webkit-scrollbar-thumb{
            background-color: $thumb-bg;
            border-radius: 20px;
            border: 3px solid $track-bg;
        }
    }
}
</style>
