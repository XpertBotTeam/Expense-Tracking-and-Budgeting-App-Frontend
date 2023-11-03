<template>
<div class="main">
   <h3>You Can Download Our App</h3>
   <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1" target="_blank"><img src="../assets/playstore.png" alt="Play Store" class="playstore" /> </a>  
   <a href="https://www.apple.com/app-store/" target="_blank"><img src="../assets/appstore.png" alt="App Store" class="appstore"/>     </a>
</div>
</template>

<script>
export default {
    name: 'FooTer',

}
</script>

<style scoped>
.playstore{
    position: relative;
    width: 100px;
    background: #FFD700;
    bottom: 1000px;
    left: 800px;
}

.appstore{
    position: relative;
    width: 100px;
    background: #FFD700;
    bottom: 1000px;
    left: 350px;
}

h3{
    color: #FFD700;
    position: relative;
    bottom: 1050px;
}
</style>