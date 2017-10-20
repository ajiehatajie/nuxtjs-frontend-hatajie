<template>
  <div class="transisi">
      
        <div v-if="posts.length == 0">
               <section class="about section">
                    <div class="section-inner">
                        <h1 class="post-title">Not Found</h1>
                        <br/>
                        <div class="content">
                            <p>
                               Oops Sory Your keyword is Not Found
                            </p>
                        </div><!--//content-->
                    </div><!--//section-inner-->                 
                </section><!--//section-->
        </div>
        <div v-if="singleView == true ">
            <post :post="post"></post>
        </div>
        <div v-else="singleView">
               
                <post v-for="post in posts" :key="post.id" :post="post"
                    @click.native.prevent="getDetailPost(post)">
               </post>

            <div v-if="paging_post">
                  <ul class="pagination">
                    <li v-if="paging_post.prev_page_url" class="page-item">
                        <a @click.prevent="getDataPostwithPaging(paging_post.prev_page_url)" 
                            href="#" class="page-link">&laquo; Previous</a>
                    </li>
                    <li v-if="paging_post.next_page_url" class="page-item">
                        <a @click.prevent="getDataPostwithPaging(paging_post.next_page_url)" 
                        href="#" class="page-link">Next &raquo;</a>
                    </li>
                    
                    </ul>
            </div>
         
      </div>


 </div><!--//item-->
</template>
<script>
import axios from 'axios'
import { mapGetters,mapActions } from 'vuex'
import post from './post'
export default {
   
    components : {
        post
    },
    mounted() {
        this.getPost()
        // console.log(this.$store.state.paging_post + 'mounted')
    },
    computed : {
        ...mapGetters(['singleView','posts','post','paging_post'])
    },
    methods : {
        ...mapActions(['getPost','getDetailPost','getDataPostwithPaging'])
    }
}
</script>
