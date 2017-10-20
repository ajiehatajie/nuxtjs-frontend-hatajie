<template>
    <div class="transisi">
         <div v-if="singleView">
              <section class="about section">
                    <div class="section-inner">
                        <h1 class="post-title">{{ post.title }}</h1>
                        <p><span class="post-date">{{dateFormat(post.created_at)}} 
                        - created by {{ post.author_id.name}} </span> <br/>
                        Category : {{ post.category.slug }}
                        </p>
                        <div class="content">
                            <p>
                                <div v-html="post.body"></div>
                            </p>
                        </div><!--//content-->
                    </div><!--//section-inner-->                 
                </section><!--//section-->
                <hr/>
                <div id="fb-root"></div>
               <div class="fb-comments" 
               data-href="https://hatajie.com/`{urlPath}`" data-numposts="5"></div>
                <ul class="pagination">
                    <li class="page-item">
                        <nuxt-link to="/"> Home 
                        </nuxt-link>
                    </li>
                </ul>
         </div>
    </div>
</template>

<script>

import { mapGetters,mapActions } from 'vuex'
import moment from 'moment'
export default {
data() {
    return {
        urlPath:''
    }
},
computed: {
    ...mapGetters(['singleView','post','slug'])
},
mounted() {
    // this.urlPath = 'https://hatajie.com'+ this.$route.fullPath;
    // console.log(urlPath + ' ok')
},
methods : {
    ...mapActions(['getPost','getDetailPost']),
     dateFormat(param) {
       return moment(param).fromNow();
    }
}

}
</script>