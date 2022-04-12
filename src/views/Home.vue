<template>
    <div class="home">
        <h1>Hey there</h1>
        <div v-if="error">{{ error }}</div>
        <PostList v-if="showPost" :posts="posts" />
        <button @click="showPost = !showPost">Toggle Post</button>
        <button @click="posts.pop()">Delete Post</button>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'

export default {
    name: 'home',
    components: { PostList },
    setup() {
        const posts = ref([])
        const error = ref(null)

        const load = async () => {
            try {
                let data = await fetch('http://localhost:3000/posts')
                // console.log(data)
                if(!data.ok) {
                    throw new Error('No data Available')
                }

                posts.value = await data.json()
            }
            catch(err) {
                error.value = err.message
                console.log(error.value)
            }
        }

        load()

        const showPost = ref(true)

        return { posts, showPost, load, error }
    }
}
</script>