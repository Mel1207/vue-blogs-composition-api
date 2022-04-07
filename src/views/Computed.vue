<template>
    <div class="home">
        <h1>Lesson - Computed Values</h1>
        <input type="text" v-model="search">
        <p>search term - {{search}}</p>
        <div v-for="name in matchingNames" :key="name">
            <p>{{ name }}</p>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'

export default {
    name: 'computed',
    setup() {
        const search = ref('')
        const names = ref(['Mel', 'John', 'Juvy', 'Anne'])


        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        return { names, search, matchingNames }
    }
}
</script>