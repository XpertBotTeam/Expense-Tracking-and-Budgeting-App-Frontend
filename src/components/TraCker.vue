<template> 
<div class="main">
    <label :for="name" class="label">{{name}}</label>
    <div class="circle">
        <p>{{amount}}</p>
    </div>
</div> 
</template>

<script>
export default {
    name: 'TraCker',
    props: {
    name: {
      type: String,
      default() {
        return 'text';
      },
    },
    amount: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.circle {
  width: 200px; 
  height: 200px;
  background-color: #FFD700 ; 
  border-radius: 50%;
  margin-left: 300px;
  position: relative;
  bottom: 550px;
  text-align: center;
}

P{
    padding-top: 90px;
}

.label{
    margin-left: 340px;
    position: relative;
    bottom: 570px;
    color: #FFD700;
    
}
</style>