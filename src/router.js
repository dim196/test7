import { createRouter, createWebHashHistory } from 'vue-router';
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/',component: PostList},
        {path: '/form', component: PostForm},
    ]
})