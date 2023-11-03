<template>
 <div class="body">
    <flipping-coin></flipping-coin>
     <div class="description">
       <h3>JOIN US</h3>
       <p>Join us today and</p>
       <p>enjoy the smooth</p>
       <p>control of your financial</p>
       <p>expenses and many</p>
       <p>other options.</p>
     </div>
      <about-page></about-page>
      <form class="box" @submit.prevent="sendData">
        <h2 class="register">Register Here</h2>
        <register-form v-model="postData.name"  type="text" name="Username" />
        <register-form v-model="postData.email"  type="email" name="Email"/>
        <register-form v-model="postData.password"  type="password" name="Password"/>
        <p class="p">By clicking Register you agree on our privacy policy</p>
        <form-button text="Register" :disabled="false"></form-button>
      </form>
      
  </div>
  
</template>
<script>
import RegisterForm from '@/components/RegisterForm.vue';
import AboutPage from '@/components/AboutPage.vue';
import FlippingCoin from '@/components/FlippingCoin.vue';
import FormButton from '@/components/FormButton';
import axios from 'axios';
 
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
export default {
  name: 'RegisterPage',
  components: {
      RegisterForm,
      AboutPage,
      FlippingCoin,
      FormButton,
      
  },
  data(){
    return{
      postData:{
        email: '',
        name: '',
        password: '',
      },
    };
  },
  methods:{
    sendData(){
     axios.post('https://etba.xpertbotacademy.online/api/register',this.postData)
      .then(response => {
        console.log('Post request successful:', response.data);
        this.postData.email='';
        this.postData.password='';
        this.postData.name='';
         if (response.status === 200) {
          console.log('Data was sent successfully');
           setTimeout(() => {
              this.$router.push('/');
            }, 3000);
    } else {
      console.log('Data was not sent successfully');
    }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  },
  },
  };
</script>

<style scoped>
.body {
  position: relative;
  background-color: #000; 
}



.description {
    position: relative;
    top: 250px;
    left: 300px;
    color: #FFD700;
}


.box {
   border-radius: 0% 100% 100% 0 / 90%; 
	display: inline-block;
	width: 40rem;
    max-width: 50rem;
	height: 35rem;
	margin-left: 50rem;
    margin-top: 5rem;
	background: #FFD700;
  position: absolute;
  bottom: 50px;
  top: 20px;
  right: 150px;
}

  .register{
  padding: 10px;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;  
  width: 40%;
  margin: 0px 0px 15px 0px;
  padding-left: 20px;
  position: relative;
  top: 40px;
  left: 20px;
}

.p{
  position: relative;
    left: 72px;
    top: 100px;
}
</style>
