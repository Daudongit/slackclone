<template>
    <div class="main">
        <div class="head">
            <p style="height:100%">Team Dragon</p>
        </div>
        <ul class="chat-list">
            <li v-for="(textChat,k) in textChats" :key="k">
                <text-chat-item />
            </li>
            <li class="sticky-date">
                <date-chat-item>Yesterday</date-chat-item>
            </li>
            <li v-for="(textChat,k) in textChats" :key="k +'_'+ k">
                <text-chat-item />
            </li>
            <li class="sticky-date">
                <date-chat-item>Today</date-chat-item>
            </li>
            <li v-for="(textChat,k) in textChats" :key="k +'_'+k+'_'+ k">
                <text-chat-item />
            </li>
        </ul>
        <chat-box />
    </div>
</template>
<script>
import TextChatItem from '../components/TextChatItem.vue'
import DateChatItem from '../components/DateChatItem.vue'
import ChatBox from '../components/chatbox/ChatBox.vue'

export default {
    name:'MainContent',
    components:{TextChatItem,DateChatItem,ChatBox},
    mounted(){
        // this.$refs.listCont.addEventListener('scroll', () => {
        //     console.log('Hello')
        // })
    },
    data:() => ({
        textChats:[1,2,3,4,5]
    }),
    // computed:{
    //     randKey(){
    //         return Math.round(Math.random()*90)
    //     }
    // }
}
</script>
<style lang="scss" scoped>
$thumb-bg:#898989;
$track-bg:#ffffff;

.main{
    overflow:hidden;
    max-height: 92vh;
    display: flex;
    flex-direction: column;

    .head{
        height: 70px;
        // height: 30%;
        // flex-basis: 10%;
        border-bottom: 1px solid #E2E2E2;
    }

    .chat-list{
        flex: 1;
        list-style: none;
        overflow-y: scroll;
        margin-right: -50px;
        padding-right: 50px;
        scrollbar-width: thin;
        scrollbar-color: $thumb-bg $track-bg;
        transition: all .1s;
        //-ms-overflow-style: none; 

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

        &:hover{
            margin-right: 0px;
            padding-right: 0px;
        }

        .sticky-date{
            position: sticky;
            top:0;
        }
    }
}
</style>