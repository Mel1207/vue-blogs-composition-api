<template>
<!-- Refs vs Reactive -->
  <div class="home">
    <h1>home</h1>
    <h2>refs</h2>
    <p>Hi my name is {{ personOne.name }} and I'm {{ personOne.age }}</p>
    <button @click="updatePersonOne">Click me</button>
    <br>
    <h2>reactive</h2>
    <p>Person two {{personTwo.name}} - {{ personTwo.age }}</p>
    <button @click="updatePersonTwo">Update two</button>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'


export default {
  name: 'HomeView',
  setup() {
    const personOne = ref({ name: 'Mel', age: 25})
    const personTwo = reactive({ name: 'John', age: 22})

    const updatePersonOne = () => {
      personOne.value.age = 27
    }

    const updatePersonTwo = () => {
      personTwo.age = 30
    }


    return { personOne, updatePersonOne, personTwo, updatePersonTwo}
  }
}
</script>
