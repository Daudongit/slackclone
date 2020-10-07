<template>
    <div class="left-side">
        <h3 class="channel-title">Channel</h3>
        <ul class="channel">
            <li>
                <a href="#">
                    <span class="type">#</span> Spiderman <span class="unread">4</span>
                </a>
            </li>
            <li><a href="#"><span class="type">#</span> Superman</a></li>
            <li class="active"><a href="#"><span class="type">#</span> Avenger</a></li>
            <li><a href="#"><span class="type">#</span> Superforce</a></li>
        </ul>
        <h3 class="dm-title">DM</h3>
        <ul class="dm">
            <li><a href="#"><span class="online"></span> Daud</a></li>
            <li><a href="#"><span class="offline"></span> Tochk</a></li>
            <li><a href="#"><span class="offline"></span> Dare</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'LeftSide'
}
</script>
<style scoped>
.left-side{
    background-color: #3f0e40;
    color: #ffffff;
    font-weight: 300;
}

.channel-title, .dm-title{
    padding-left: 10px;
}

.left-side .channel,.left-side .dm{
    list-style: none;
    margin-bottom: 20px;
}

.left-side .channel li,.left-side .dm li{
    padding: 5px 25px;
}

.left-side .channel li.active,
.left-side .dm li.active,
.left-side .channel li.active:hover,
.left-side .dm li.active:hover{
    background-color: #1164A3;
    font-weight: bold;
}

.left-side .channel li:hover,.left-side .dm li:hover{
    background-color: #350d36;
}

.left-side .channel a,.left-side .dm a{
    display: block;
    color: #ffffff;
    text-decoration: none;
}

.left-side .channel .type{
     color: #BCABBC;
}

.left-side .channel li.active .type{
    color: #ffffff;
}

.left-side .channel .unread{
    margin-left: 100px;
    padding: 1px 8px;
    color: #ffffff;
    border-radius: 5px;
    background-color: #CD2553;
}

.left-side .dm .online{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #2BAC76;
}

.left-side .dm .offline{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #8F728F;
}
</style>