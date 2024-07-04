 <template>
    <div class="app">
        <RouterLink to="/form">
            <button class="btn">create form</button>
        </RouterLink>
        <RouterView @create="createPost"></RouterView>
        <post-list
        :posts="posts"
        @remove="removePost"/>
    </div>
</template>

<script>
// <post-form @create="createPost"/>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
// let posts = JSON.parse(localStorage.getItem('posts'));

// console.log('posts');

export default {
    components: {
         PostList, PostForm, 
    },
    
    data() {
        return {
            posts: [
                {id: 1, title: 'vue1', body: 'descr1'},
                {id: 2, title: 'vue2', body: 'descr2'},
                {id: 3, title: 'vue3', body: 'descr3'},
                {id: 4, title: 'vue4', body: 'descr4'},
                {id: 5, title: 'vue5', body: 'descr5'},
                {id: 6, title: 'vue6', body: 'descr6'},
                {id: 7, title: 'vue7', body: 'descr7'},
                {id: 8, title: 'vue8', body: 'descr8'},
                {id: 9, title: 'vue9', body: 'descr9'},
                {id: 10, title: 'vue10', body: 'descr10'},
                {id: 11, title: 'vue11', body: 'descr11'},
                {id: 12, title: 'vue12', body: 'descr12'}
            ]
        }
    },
    
    methods: {
        createPost(post) {
            this.posts.push(post);
            localStorage.setItem ('posts', JSON.stringify(this.posts))

        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        }
    }
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>