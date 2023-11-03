<template>
    <div class="main">
        <h3 class="title">Expense Reports</h3>
        <tra-cker name="Current Year Expenses" :amount="totalExpensesOfThisYear" class="currentyear"></tra-cker>
        <tra-cker name="Total Expenses" :amount="totalExpenses" class="total"></tra-cker>
        <tra-cker name="Last 7 days Expenses" :amount="thisWeek" class="sevendays"></tra-cker>
        <tra-cker name="Last 30 days Expenses" :amount="lastMonth" class="thirtydays"></tra-cker>
    </div>
</template>

<script>
import TraCker from '@/components/TraCker.vue';
import axios from 'axios';
export default {
    name: 'ExpenseReports',
    components:{
        TraCker,
    },
    data(){
        return{
            thisWeek: 0 ,
            lastMonth: 0 ,
            totalExpensesOfThisYear: 0 ,
            totalExpenses: 0 ,
        }
    },
    methods:{

    },
        mounted(){

    axios.get('https://etba.xpertbotacademy.online/api/expenses/last-30-days')
      .then(response => {
        this.lastMonth = response.data.lastMonth;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

      axios.get('https://etba.xpertbotacademy.online/api/expenses/this-week')
      .then(response => {
        this.thisWeek = response.data.thisWeek;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

      axios.get('https://etba.xpertbotacademy.online/api/expenses/current-year-expenses')
      .then(response => {
        this.totalExpensesOfThisYear = response.data.totalExpensesOfThisYear;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

      axios.get('https://etba.xpertbotacademy.online/api/expenses/total-Expenses')
      .then(response => {
        this.totalExpenses= response.data.totalExpenses;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    }
}
</script>

<style scoped>
.title{
    position: relative;
    left: 350px;
    top: 40px;
    border: 2px  #FFD700 solid;
    width: 900px;
    text-align: center;
    padding: 10px;
}
.sevendays{
    position: relative;
    top: 174px;
    left: 50px;
    
}

.thirtydays{
    position: relative;
    left: 700px;
    bottom: 50px;
}

.currentyear{
    position: relative;
    top: 950px;
    left: 50px;
}

.total{
    position: relative;
    left: 700px;
    top: 725px;
}


</style>