<template>
    <div class="post" >
        <div>
            <div><strong>title:</strong>  {{post.title}}</div>
            <div><strong>desc:</strong>  {{post.body}}</div>
        </div>
        <div>
            <my-button  @click="$emit('remove', post)">
                <button class="btn">delete</button>
            </my-button>
        </div>
    </div>
    
</template>

<script>
export default {
    
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style >
.post {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
    justify-content: space-between;
    padding: 15px;
    border: 1px solid red;
}


</style>