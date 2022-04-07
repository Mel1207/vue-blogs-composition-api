<template>
    <div class="home">
        <h1>Lesson - Computed Values</h1>
        <input type="text" v-model="search">
        <p>search term - {{search}}</p>
        <div v-for="name in matchingNames" :key="name">
            <p>{{ name }}</p>
        </div>
        <button @click="handleClick">Stop Watching</button>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-core'

export default {
    name: 'computed',
    setup() {
        const search = ref('')
        const names = ref(['Mel', 'John', 'Juvy', 'Anne'])

        const stopWatch = watch(search, () => {
            console.log('watch function running')
        })

        const stopEffect = watchEffect(() => {
            console.log('watch effect function running', search.value)
        })


        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        const handleClick = () => {
            stopWatch()
            stopEffect()
        }

        return { names, search, matchingNames, handleClick }
    }
}
</script>