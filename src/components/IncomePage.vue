<template>
 <h3 class="title">income</h3>

 <tra-cker></tra-cker>
 <tra-cker></tra-cker>
 <tra-cker class="seven" name="Last 7 days Income" :amount="incomeWeek"></tra-cker>
 <tra-cker class="thirty" name="Last 30 days Income" :amount="incomeMonth"></tra-cker>
 <tra-cker class="total" name="Total Income" :amount="totalIncome"></tra-cker>
 
</template>

<script>
import TraCker from '@/components/TraCker.vue';
import axios from 'axios';
export default {
  name: 'IncomePage',
  components:{
    TraCker
  },
  data(){
    return{
      incomeWeek: 0 ,
      incomeMonth: 0,
      totalIncome: 0,
    }
  },
  mounted(){
     axios.get('https://etba.xpertbotacademy.online/api/incomes/last-30-days')
      .then(response => {
        this.incomeMonth = response.data.incomeMonth;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

      axios.get('https://etba.xpertbotacademy.online/api/incomes/last-7-days')
      .then(response => {
        this.incomeWeek = response.data.incomeWeek;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

      axios.get('https://etba.xpertbotacademy.online/api/incomes/total-income')
      .then(response => {
        this.totalIncome = response.data.totalIncome;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }
  
};
</script>

<style scoped>
.title{
  position: relative;
  left: 400px;
  border: 2px  #FFD700 solid;
  width: 900px;
  text-align: center;
}

.seven{
  position: relative;
  left: 150px;
  top: 150px;
}

.thirty{
  position: relative;
  left: 800px;
  bottom: 80px;
}

.total{
  position: relative;
  left: 450px;
}
</style>