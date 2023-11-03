<template>
<div class="head">
    <img src="../assets/app.jpg" alt="app">
    <router-link to="/" class="hp">HomePage</router-link>
    <router-link to="/register" class="reg" >RegisterPage</router-link>
    <router-link to="/login" class="log" >LoginPage</router-link> 
</div>
</template>
 
<script>

export default {
    name:'AppHeader'
}
</script>

<style scoped>
img{
        width: 100px;
        padding-left: 30px ;
        position: relative;
        right: 30px;
    }
.user{
    text-decoration: none;
    position: relative;
    left: 170px;
    color: #000 ;
}
.head{
    background: #ffd700;
}

.hp{
    text-decoration: none;
    position: relative;
    left: 50px;
    color: #000 ;
}
.reg{
    text-decoration: none;
    position: relative;
    left: 100px;
    color: #000 ;
}

.log{
    text-decoration: none;
    position: relative;
    left: 150px;
    color: #000 ;
}


</style>