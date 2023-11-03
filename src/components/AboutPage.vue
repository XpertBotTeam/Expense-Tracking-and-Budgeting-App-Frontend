<template>
    <div class="about">
          <router-link to="" class="ab">About us</router-link>
          <router-link to="" class="terms">Terms and Conditions</router-link>
    </div>
</template>

<script>
export default {
    name : 'AboutPage'
}
</script>

<style scoped>

  .about{
    position: relative;
    top: 350px;
    left: 300px;
  }

  .ab{
    position: relative;
    height: 50px;
    width: 100px;
    background-color: #000;
    border-radius: 0px 20px 20px 0px ;
    border: 2px #FFD700 solid ;
    color: #FFD700;
    text-decoration: none;
    padding: 10px;
  }

  .terms{
    color: #FFD700;
    text-decoration: none;
    position: relative;
    top: 40px;
    right: 87px;
  }

</style>