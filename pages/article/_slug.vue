<template>
  <div class="transisi">
      <Detail/>
  </div>
</template>

<script>

import { mapGetters,mapActions,mapMutations } from 'vuex'
import Index from '~/components/article/index.vue'
import Detail from '~/components/article/detail.vue'

export default {
  props :['post'],
  data() {
    return {
      // urlPath:''
    }
  },
  components: {
     Index, Detail
  },
  beforeMount() {
     console.log(this.$route.params.slug)
  },
  mounted() {
    if(this.$store.state.post) {
      console.log('mounted')
    } else {
      console.log('else mounted')
       this.getPostDetailSlug(this.$route.params.slug)
    }
  },
  computed : {
    ...mapGetters(['singleView'])
  },
  methods : {
    changeSingleView () {
      this.$store.commit('singleView',true)
    },
    ...mapActions(['getDetailPost','getPostDetail','getPostDetailSlug']),
    ...mapMutations(['DETAIL_POST'])
  }
}
</script>
