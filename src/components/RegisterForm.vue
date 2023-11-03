<template>
  <label :for="name" class="form-label">{{ name }}:</label>
  <input
    :type="type"
    class="form-input"
    :id="name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "RegisterForm",

  props: {
    type: {
      type: String,
      default() {
        return "text";
      },
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: String,
    rules:{
      type: Object,
      default(){
        return {}
      }
    }
  },
};
</script>

<style scoped>
h6 {
  padding-left: 15px;
  padding-top: 11px;
}

input[type="text"] {
  color: #ffd700;
}

input[type="email"] {
  color: #ffd700;
}

input[type="password"] {
  color: #ffd700;
}

input[type="numbers"] {
  color: #ffd700;
}

input[type="date"] {
  color: #ffd700;
}

.form-label {
  display: block;
  position: relative;
  top: 70px;
  left: 80px;
  margin: 10px;
}

.form-input {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #000;
  position: relative;
  top: 70px;
  left: 170px;
  padding: 7px 50px 0px 0px;
  margin: 5px;
}
.p {
  position: relative;
  left: 72px;
  top: 70px;
}
</style>
