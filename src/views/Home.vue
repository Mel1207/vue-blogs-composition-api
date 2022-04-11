<template>
    <div class="home">
        <h1>Hey there</h1>
        <PostList :posts="posts" />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'

export default {
    name: 'home',
    components: { PostList },
    setup() {
        const posts = ref([
            {title: 'Welcome to blog', body: 'Lorem Ipsum', id: 1},
            {title: 'CSS tips', body: 'Lorem Ipsum Dolor', id: 2}
        ])

        return { posts }
    }
}
</script>