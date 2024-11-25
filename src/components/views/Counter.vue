<script setup>
import {useCounterStore } from '../stores/counterStore';
import { storeToRefs } from "pinia";//it helps to add reactivity to the state
const store=useCounterStore();
const {increment,decrement}=store;
const {count}=storeToRefs(store);
</script>
<template>
    <h1>Counter </h1>
    <h1>{{ count}}</h1>
    <button @click="increment(count)">+</button>
    <button @click="decrement(count)">-</button>
</template>