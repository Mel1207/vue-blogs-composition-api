<template>
    <div class="home">
        <h1>Hey there</h1>
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList :posts="posts" />
        </div>
        <div v-else>
            Loading...
        </div>
        
        
        <button @click="posts.pop()">Delete Post</button>
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPost from '../composables/getPost'

export default {
    name: 'home',
    components: { PostList },
    setup() {
        const { posts, error, load } = getPost();

        load()
        
        return { posts, error, load }
    }
}
</script>