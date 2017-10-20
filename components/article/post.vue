<template>
    <div  class="transisi">

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
                <div id="fb-root"></div>
             
                <ul class="pagination">
                    <li class="page-item">
                        <a href="#" @click.prevent="getPost()" class="page-item" >Home </a>
                    </li>
                </ul>
        </div>
        <div v-else ="singleView">
          
            <div class="item row">
              
                <div class="desc col-md-12">
                    <h1 class="post-title">
                        <nuxt-link
                         :to="'/article/'+post.slug" click.native.prevent="getDetailPost(post)"
                        class="more-link" replace><i class="fa fa-external-link"></i>
                            {{ post.title }}</nuxt-link>
                    </h1>
                    <p><span class="post-date">{{dateFormat(post.created_at)}} 
                        - created by {{ post.author_id.name}} </span> <br/>
                        Category : {{ post.category.slug }}
                    </p>
                    
                    <p>{{ post.excerpt }}</p>
                    <p>
                      <nuxt-link
                      :to="'/article/'+post.slug" click.native.prevent="getDetailPost(post)"
                      class="more-link" replace><i class="fa fa-external-link"></i>
                    Read More</nuxt-link> <br/>

                  </p>
                   <hr/>
                </div><!--//desc-->
               
          </div><!--//item-->


        </div>

          

    </div>


</template>

<script>

import { mapGetters,mapActions } from 'vuex'
import moment from 'moment'
export default {

props: ['post'] ,
computed: {
    ...mapGetters(['singleView'])
},
methods : {
    ...mapActions(['getPost','getDetailPost']),
    updatedSlug(param) {
        this.$store.state('slug',param)
        
    },
    dateFormat(param) {
       return moment(param).fromNow();
    }
}

}
</script>
