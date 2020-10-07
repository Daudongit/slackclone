<template>
    <div class="chat-item">
        <a href="#" class="profile">
            <img src="assets/images/azeem_tut_cert.jpg" class="image" alt="profile-image">
        </a>
        <div class="chat-item-content">
            <div class="head">
                <h3 class="username">Daud</h3>
                <span class="time">11:50 PM</span>
            </div>
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
    name:'ChatItemWrapper'    
}
</script>
<style scoped>
.chat-item{
    display: grid;
    grid-template-columns: 55px auto;
    grid-column-gap: 5px;
    padding: 20px;
}

.chat-item .profile{
    text-decoration: none;
}

.chat-item .profile .image{
    width: 50px;
    height: 50px;
    border-radius: 5px;
}

.chat-item .chat-item-content .head{
    display: flex;
    align-items: center;
}

.chat-item .chat-item-content .head .username{
    margin-right: 15px;
    color: #1d1d1d;
    font-size: 15px;
}

.chat-item .chat-item-content .head .time{
    color: #747374;
    /* line-height: 1.5; */
    font-size: 12px;
}
</style>