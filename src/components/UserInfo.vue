<template>
<div class="main">
    <div class="Username">{{name}}</div>
    <div class="date">{{currentDay}} , {{currentMonth}} {{currentYear}}</div>
     <div class="balance">{{accountBalance}}</div>
     
</div>
    
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserInfo',
     components: {
    

    },
    data() {
    return {
      currentDay: "",
      currentMonth: "",
      currentYear: "",
      accountBalance: 0,
    };
  },
  props:{
    name:{
      type: String,
    }
  },
  mounted() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"
            ];

        const currentDate = new Date();
        const dayIndex = currentDate.getDay();
        const monthIndex = currentDate.getMonth();
        const year = currentDate.getFullYear();

        this.currentDay = daysOfWeek[dayIndex];
        this.currentMonth = months[monthIndex];
        this.currentYear = year;


        axios.get('https://etba.xpertbotacademy.online/api/user/initialamount')
        .then(response => {
            this.accountBalance = response.data.initialamount;
        })
        .catch(error =>{
            console.error('Error fetching user data:', error);
        });
  },
}
</script>

<style scoped>
.main{
    background: #000;
    height: 150px;
    border: 2px #FFD700 solid;
}
.pic{
    width: 100px;
    position: relative;
     left: 50vw;
    bottom: 75px;
    border-radius: 50% 50%;
}

.Username{
    position: relative;
    left: 47vw;
    top: 115px;
    border: 2px solid #FFD700;
    border-radius: 20px;
    text-align: center;
    width: 200px;
    color: #FFD700;
}

.balance{
    position: relative;
    left: 300px ;
    bottom: 30px;
    border: 2px solid #FFD700;
    border-radius: 20px;
    text-align: center;
    width: 200px;
    color: #FFD700;
}

.date{
    position: relative;
    left: 1100px;
    top: 1px;
    bottom: 40px;
    border: 2px solid #FFD700;
    border-radius: 20px;
    text-align: center;
    width: 200px;
    color: #FFD700;
}
</style>