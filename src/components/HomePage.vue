<template>
<div class="main">
<user-info :name="name"></user-info>
<nav-bar></nav-bar>
<tra-cker name="Todays Expense" :amount="expenses_today" class="expense"></tra-cker>
<tra-cker name="Todays Income"  :amount="todayIncome" class="income"></tra-cker>
<tra-cker name="Todays Deposit" :amount="todayDeposits" class="deposit"></tra-cker>
<tra-cker name="Todays Withdrawal" :amount="todayWithdrawal" class="withdraw"></tra-cker>
<tra-cker name="Todays Budget" :amount="todayBudge" class="budget"></tra-cker>
<foo-ter></foo-ter>
</div>
</template>

<script>
import axios from "axios";
import UserInfo from '@/components/UserInfo.vue';
import NavBar from '@/components/NavBar.vue';
import TraCker from '@/components/TraCker.vue';
import FooTer from '@/components/FooTer.vue';

export default {
    name:'HomePage',
    components: {
    UserInfo,
    NavBar,
    TraCker,
    FooTer,
  },
    data() {
    return {
      expenses_today: 0,
      todayIncome: 0,
      todayDeposits: 0,
      todayWithdrawal: 0,
      todayBudge: 0,
      name: 'UserName',
    };
  },
  
    mounted(){

    axios.get('https://etba.xpertbotacademy.online/api/user')
      .then(response => {
        this.name = response.data.name;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    axios.get('https://etba.xpertbotacademy.online/today/income')
      .then(response => {
        this.todayIncome = response.data.todayIncome;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    axios.get('https://etba.xpertbotacademy.online/expenses/today')
      .then(response => {
        this.expenses_today = response.data.expenses_today;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });


    axios.get('https://etba.xpertbotacademy.online/transactions/today-deposits')
      .then(response => {
        this.todayDeposits = response.data.todayDeposits;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    axios.get('https://etba.xpertbotacademy.online/today/withdrawal')
      .then(response => {
        this.todayWithdrawal = response.data.todayWithdrawal;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });

    axios.get('https://etba.xpertbotacademy.online/today/budget')
      .then(response => {
        this.todayBudge = response.data.todayBudge;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
}
}
</script>

<style scoped>
.main{
  background: #000;
}

.income{
  position: relative;
  left: 950px;
  bottom: 225px;
}

.deposit{
  position: relative;
  left: 450px;
  bottom: 450px;
}

.withdraw{
  position: relative;
  left: 200px;
  bottom: 350px;
}

.budget{
  position: relative;
  bottom: 572px ;
  left: 750px;
}
</style>

