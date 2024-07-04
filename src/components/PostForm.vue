<template>
    <form @submit.prevent>
        <h5>create card</h5>
        <input v-model="post.title" class="input" type="text" placeholder="title">
        <input v-model="post.body" class="input" type="text" placeholder="desc">
        <RouterLink to ="/">
            <button class="btn" @click="createPost">create</button>
        </RouterLink>
        <RouterLink to="/"><button class="btn">back</button></RouterLink>
    </form>
</template>

<script>
export default {
   
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
            
        }
    }
}
</script>

<style scoped>
.input {
    width: 50%;
    border: 1px solid teal;
    padding: 10px;
    margin: 10px;
}

form {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>