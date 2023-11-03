<template>
    <div class="main">
        <h3 class="title">Expense</h3>
    </div>
    <div class="form"> 
    <register-form v-model="Amount" name="Amount" type="numbers" class="amount" ></register-form>
    <register-form v-model="description" name="Shop"   type="text" class="shop" ></register-form>
    <register-form v-model="name" name="name"   type="text" class="date" ></register-form>
    <form-button text="Add Expense" class="button" @submit.prevent="sendData"></form-button>
    </div>



</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue';
import FormButton from '@/components/FormButton.vue';
import axios from 'axios';
export default {
    name: 'ExpensePage',
    components:{
        RegisterForm,
        FormButton
    },
  data() {
    return {
        datasend:{
            name: '',
            description: '',
            Amount: 0,
        }
    };
  },
  methods:{
    sendData(){
     axios.post('https://etba.xpertbotacademy.online/api/register', this.datasend)
      .then(response => {
        console.log('Post request successful:', response.data);
        this.datasend.Amount='';
        this.datasend.description='';
        this.postData.name='';
         if (response.status === 200) {
      console.log('Data was sent successfully');
    } else {
      console.log('Data was not sent successfully');
    }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  },
  }
}
</script>

<style scoped>
.title{
    position: relative;
    left: 250px;
    border: 2px  #FFD700 solid;
    width: 1100px;
    text-align: center;
    height: 45px;
}

.form{
    position: relative;
    left: 200px;
    bottom: 50px;
}

.button{
    position: relative;
    left: 400px;
}


</style>