<template>
  <div class="coin-container" @mouseenter="flipCoin">
    <div class="coin" :class="{ 'flipped': isFlipped }">
      <div class="side front"></div>
      <div class="side back"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FlippingCoin' ,
    data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    flipCoin() {
      this.isFlipped = !this.isFlipped;
    },
  },
}
</script>

<style scoped>
.coin-container {
    display: inline-block;
    perspective: 1000px;
    position: absolute;
    top: 50px;
    left: 280px;
}

.coin {
  width: 150px;
  height: 150px;
  background-color: #f1c40f; 
  border-radius: 50%; 
  position: relative;
  transition: transform 0.5s ease-in-out;
  transform-style: preserve-3d;
}

.coin:after {
  content: '€';
  width: 100%;
  height: 100%;
  background-color: #FFD700; 
  border-radius: 50%; 
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: inherit;
}



.flipped {
  transform: rotateY(180deg);
}

</style>