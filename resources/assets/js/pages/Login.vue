<template>
    <!-- <div>
        <p>Hellow there login page</p>
        <router-link to="/dashboard">Dashboard</router-link>
    </div> -->
<ul>


<li class="date">
    <date-chat-item>
        Date: 1/21/2017
    </date-chat-item>
</li>

<li class="msg" v-for="(chat,k) in chats" :key="k">
    <span class="user">Username: </span>
    Hello this is a test message. I am messaging you from messages about messages that message
</li>

<li class="date">
    <date-chat-item>
        Date: 1/22/2018
    </date-chat-item>
</li>

<li class="msg" v-for="(chat,k) in chats" :key="k+'_'+k">
    <span class="user">Username: </span>
    Hello this is a test message. I am messaging you from messages about messages that message
</li>

<li class="date">
    <date-chat-item>
        Date: 1/23/2019
    </date-chat-item>
</li>

<li class="msg" v-for="(chat,k) in chats" :key="k+'_'+k+'_'+k">
    <span class="user">Username: </span>
    Hello this is a test message. I am messaging you from messages about messages that message
</li>

<!-- <li class="date">Date: 1/24/2020</li>

<li class="msg" v-for="(chat,k) in chats" :key="k+'_'+k+'_'+k+'_'+k">
    <span class="user">Username: </span>
    Hello this is a test message. I am messaging you from messages about messages that message
</li>

<li class="date">Date: 1/25/2021</li>

<li class="msg" v-for="(chat,k) in chats" :key="k+'_'+k+'_'+k+'_'+k+'_'+k">
    <span class="user">Username: </span>
    Hello this is a test message. I am messaging you from messages about messages that message
</li> -->
</ul>
</template>
<script>
import LoginLayout from '../layouts/LoginLayout.vue'
import DateChatItem from '../components/DateChatItem.vue'

export default {
    name:'Login',
    components:{DateChatItem},
    data:()=>({
        chats:[1,2,3,4,5,6,7]
    }),
    created(){
        this.$emit('update:layout',LoginLayout)
    }
}
</script>
<style scoped>
ul, li {
  list-style-type: none;
  padding:0px;
  margin:0px;
}
.user {font-weight:bold; padding-right: 5px;}
.msg{
 display:flex;
 background:white;
 margin: 20px;
 margin-left:5px;
 padding: 20px;
 border-radius: 10px;
}
.date {
    /* width:100%; 
    background: tomato; 
    text-align:center; 
    padding: 15px; 
    color:white; 
    font-weight:bold; */
    position:sticky;
    top:0;
}
</style>