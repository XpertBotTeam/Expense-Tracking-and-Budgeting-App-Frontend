<template>
  <div class="outer">
    <div class="inner">
      <img class="logo" src="../assets/app.jpg" alt="app" />
      <div class="greeting-phrase">Welcome to Budget Login page</div>
      <form class="form" @submit.prevent="sendData">
        <register-form  v-model="postData.email" name="Email" type="email" />
        <register-form  v-model="postData.password" name="Password" type="password" />
        <form-button
          class="button"
          text="Login"
          :disabled="false"
        ></form-button>
        <p class="p">forget my password?</p>
      </form>

      <div class="footer">
        <p class="s">
          or <router-link class="r" to="/register">Sign Up</router-link> using
        </p>
        <a href="https://www.facebook.com/" target="_blank" ><img class="face" src="../assets/facebook.png" alt="facebook" /></a>
        <a href="https://www.google.com/" target="_blank" ><img class="google" src="../assets/google.png" alt="google" /></a>
        <a href="https://www.linkedin.com/" target="_blank" ><img class="linklden" src="../assets/linkedin.png" alt="LinkedIn" /></a>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";
import FormButton from "@/components/FormButton.vue";
import axios from "axios";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
export default {
  name: "LoginPage",
  components: {
    RegisterForm,
    FormButton,
  },
  data() {
    return {
      postData:{
        email: '',
        password: '',
      }
    };
  },
  methods: {
    sendData() {
      
        axios.post("https://etba.xpertbotacademy.online/api/login", this.postData)
        .then((response) => {
          console.log("Post request successful:", response.data);
          this.postData.email = "";
          this.postData.password = "";
          if (response.status === 200) {
             this.authToken = response.data.token;
            console.log("Data was sent successfully");
             setTimeout(() => {
              this.$router.push('/');
            }, 3000);
          } else {
            console.log("Data was not sent successfully");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>

<style scoped>
.logo {
  width: 9%;
  border-radius: 100%;
  position: relative;
  left: 440px;
  bottom: 30px;
}

.face {
  width: 10%;
  height: 10%;
  position: relative;
  left: 300px;
  top: 40px;
  background: #FFD700;
}

.google {
  width: 10%;
  height: 10%;
  position: relative;
  left: 350px;
  top: 40px;
  background: #FFD700;
  width: 10%;
}
.linklden {
  width: 10%;
  position: relative;
  left: 400px;
  top: 40px;
  background: #FFD700;
}

.outer {
  background: #000;
  padding: 20px;
  overflow: hidden;
}
.inner {
  background: #808080;
  border-radius: 50px;
  position: relative;
  margin: 75px 300px 171px 60px;
  position: relative;
  left: 150px;
  padding: 50px;
  overflow: hidden;
}

.greeting-phrase {
  position: relative;
  left: 320px;
  background: #000;
  border-top: 3px solid #ffd700;
  border-left: 3px solid #ffd700;
  width: 30%;
  padding: 20px;
  color: #ffd700;
}

.form {
  position: relative;
  left: 230px;
  bottom: 50px;
  color: #ffd700;
}

.p {
  position: relative;
  left: 410px;
  top: 50px;
}

.button {
  position: relative;
  left: 250px;
  top: 95px;
}

.s {
  position: relative;
  left: 475px;
  top: 20px;
  
}

.r {
  text-decoration: none;
  color: #ffd700;
}
</style>
