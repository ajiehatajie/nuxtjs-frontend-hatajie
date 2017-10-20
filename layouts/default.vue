<template>
<div class="wrapper transisi">
      <header class="header">
           <div class="container">
            <img class="profile-image img-responsive"
             src="/image.jpg" alt="James Lee" />
          
            <div class="profile-content pull-left">
                <h1 class="name">Ajie Hatajie</h1>
                <h2 class="desc">Web App Developer</h2>
              
                <a class="btn btn-cta-primary" href="https://github.com/ajiehatajie">
                <i class="fa fa-github"></i> Github</a>
                <a class="btn btn-cta-primary" href="https://play.google.com/store/search?q=hatajie" target="_blank">
                <i class="fa fa-android"></i> Mobile Apps</a>
                <br/>
                <a class="btn btn-cta-primary" href="https://twitter.com/ajiehatajie">
                <i class="fa fa-twitter"></i> Twitter</a>
                <a class="btn btn-cta-primary" href="mailto:me@hatajie.com">
                <i class="fa fa-paper-plane"></i> Contact Me</a>
            
            </div><!--//profile-->
            <br/><br/><br/>
            
        </div><!--//container-->
         <div class="section-inner">
                <div class="card-body">
                        <div class="input-group">
                          <input type="text" class="form-control" 
                          placeholder="Search for..." v-model="search">
                          <span class="input-group-btn">
                             <div v-if="search">
                                <button class="btn btn-secondary" type="button"
                                     @click="reset()" >reset</button>
                             </div>
                            <div v-else="search">
                                 <button class="btn btn-secondary" type="button"
                                     @click="getSearchPost(search)" >Go</button>
                          </div>
                          </span>
                       
                        </div>
                        <br/>
                         <div class="input-group">
                          <div v-if="search">
                            keyword search :  <b>{{ search }}</b>
                          </div>
                         
                         
                        </div>
                </div>
        </div><!--//section-inner-->
      </header>
      
      <section>
             <nuxt/>
      </section>
      
      
      <footer>
        <p>&copy; 2016 . All rights reserved.</p>
        <p><small>Powered By 
             <a href="https://laravel.com" target="_blank">Laravel </a>&amp;
             <a href="https://vuejs.org" target="_blank"> Vue Js</a> &mdash; Theme by
             <a href="https://github.com/orderedlist" target="_blank" >orderedlist</a></small></p>
      </footer>


</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            search:''
        }
    },
    methods : {
        ...mapActions(['getSearchPost']),
        reset() {
            this.search = ''
        }
    },
    watch : {
        search: function(val) {
            if(val.indexOf('search') > -1) {

            }
            this.$router.push('/')
            this.getSearchPost(val)
            console.log(val)
        }
    }
}
</script>
