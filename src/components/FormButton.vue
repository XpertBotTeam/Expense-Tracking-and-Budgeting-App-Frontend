<template>
    <button class="button" :disabled="disabled">{{text}}</button>
</template>

<script>
export default {
    name: 'FormButton',
    props: {
        text: {
            type: String,
            required: true
        },
        disabled: {
            type: Boolean,
            required: false
        },
    },
};
</script>

<style scoped>
    .button{
        position: relative;
        top: 120px;
        left: 70px;
        display: block;
        padding: 5px 25px 5px 25px;
        border-radius: 10px;
        background-color: #000;
        color: #FFD700;
    }
</style>