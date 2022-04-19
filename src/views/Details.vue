<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="single-post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{post.body}}</p>
  </div>
</template>

<script>
import getSinglePost from '../composables/getSinglePost'

export default {
    props: [ 'id' ],
    setup(props) {
        const { post, error, load } = getSinglePost(props.id) 

        load()

        return { post, error }
    }
}
</script>

<style>

</style>