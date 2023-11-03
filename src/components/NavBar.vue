<template>
  <div class="sidebar">
    <router-link to="/deposit" class="deposit">Deposit</router-link>
    <router-link to="/WithdrawalPage" class="withdraw">Withdraw</router-link>
    <router-link to="/ExpensePage" class="expense">Expenses</router-link>
    <router-link to="ExpensesReports" class="expensereports">ExpensesReports</router-link>
    <router-link to="/NetWorth" class="networth">Networth</router-link>
    <router-link to="/IncomePage" class="income">Incomes</router-link>
    <router-link to="/ScanPage" class="scan">Scan</router-link>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
.sidebar {
  width: 250px; 
  background-color: #000; 
  padding: 40px;
  border: 2px #FFD700 solid;
}

.deposit{
  text-decoration: none;
  color:#FFD700;
  display: inline-block;
  margin: 30px;
  padding: 10px;
}

.withdraw{
  text-decoration: none;
  color: #FFD700;
  display: inline-block;
  margin: 30px;
}

.expense{
  text-decoration: none;
  color: #FFD700;
  display: inline-block;
  margin: 30px;
}

.expensereports{
  text-decoration: none;
  color: #FFD700;
  display: inline-block;
  margin: 30px;
}

.networth{
  text-decoration: none;
  color: #FFD700;
  display: inline-block;
  margin: 30px;
}

.income{
  text-decoration: none;
  color: #FFD700;
  display: inline-block;
  margin: 30px;
}

.scan{
  text-decoration: none;
  color: #FFD700;
  display: inline-block;
  margin: 30px;
}

</style>
