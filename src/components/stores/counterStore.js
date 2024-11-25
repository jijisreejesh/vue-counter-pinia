import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const increment = (count1) => {
    count.value=count1+1;

  };
  const decrement = (count1) => {
    count.value=count1-1;
  };
  return{count,increment,decrement};
});
