<template>
  <div class="home">
    <h1>home</h1>
    <h2>my name is {{name}} and my age is {{ age }}</h2>
    <button @click="handleClick">Click me</button>
    <button @click="age++">add age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'


export default {
  name: 'HomeView',
  setup() {
    const name = ref('Mel')
    const age = ref(25)

    const handleClick = () => {
      name.value = 'John',
      age.value = 26
    }


    return { name, age, handleClick}
  }
}
</script>
