<template>
<div class="main">
    <h3 class="title">Withdrawal</h3>
    <register-form class="in" name="Amount to Withdraw" type="numbers" ></register-form>
    <form-button text="Withdraw" class="button" ></form-button>
</div>
    
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue';
import FormButton from '@/components/FormButton.vue';
export default {
    name: 'WithdrawalPage',
    components:{
        RegisterForm,
        FormButton
    },
}
</script>

<style scoped>
.button{
position: relative;
left: 400px;
}

.in{
    position: relative;
    left: 50vw;
}

.title{
    border: 2px  #FFD700 solid;
    width: 800px;
    position: relative;
    left: 400px;
    text-align: center;
}
</style>