<template>
    <div class="post__list">
        <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"/>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem';

export default {
    components: {PostItem},
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.post__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    grid-auto-flow: dense;
    
}
</style>