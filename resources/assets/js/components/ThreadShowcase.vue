<template>
    <div class="thread-showcase">
        <ul class="thread-list">
            <li class="th-item"><a href="#"><img src="assets/images/azeem_tut_cert.jpg" alt=""></a></li>
            <li class="th-item"><a href="#"><img src="assets/images/daud_in_conf.jpg" alt=""></a></li>
            <li class="th-item"><a href="#"><img src="assets/images/azeem_tut_cert.jpg" alt=""></a></li>
            <li class="th-item"><a href="#"><img src="assets/images/daud_in_conf.jpg" alt=""></a></li>
            <li class="th-item"><a href="#"><img src="assets/images/azeem_tut_cert.jpg" alt=""></a></li>
        </ul>
        <a href="" class="thread-count">4 replies</a>
    </div>
</template>
<script>
export default {
    name:'ThreadShowcase'
}
</script>
<style scoped>
.thread-showcase{
    margin-top: 10px;
    display: flex;
}

.thread-showcase .thread-list{
    list-style: none;
    display: flex;
}

.thread-showcase .thread-list .th-item{
    margin-right: 10px;
}

.thread-showcase .thread-list .th-item a{
    text-decoration: none;
}

.thread-showcase .thread-list .th-item img{
    width: 25px;
    height: 25px;
    border-radius: 5px;
}

.thread-showcase .thread-count{
    text-decoration: none;
    color: #1264A3;
}
</style>