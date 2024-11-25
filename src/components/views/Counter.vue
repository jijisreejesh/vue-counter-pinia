<script setup>
import { useCounterStore } from "../stores/counterStore";
import { storeToRefs } from "pinia"; //it helps to add reactivity to the state
const store = useCounterStore();
const { increment, decrement } = store;
const { count } = storeToRefs(store);
</script>
<template>
  <div id="container">
    <h1>Counter</h1>
    <h2>{{ count }}</h2>
    <div id="sectionBtn">
      <button @click="increment(count)">+</button>
      <button @click="decrement(count)">-</button>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#container{
    box-shadow: 0px 0px 1px 1px red;
  margin-top: 100px;
  width: 400px;
  background-color: aqua;
  margin-left: auto;
  margin-right: auto;
  line-height: 100px;
}
h2 {
  text-align: center;
  font-size: 50px;
}
h1 {
  /* padding-top: 20px; */
  font-size: 50px;
  text-align: center;
  color: rgb(83, 4, 83);
}
#sectionBtn {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
button {
  margin-right: 10px;
  font-size: 30px;
  width: 50px;
}
button:active{
    background-color: rgb(41, 23, 202);
}
button:hover{
    width:70px;
    color:rgb(226, 35, 9)
}
</style>
