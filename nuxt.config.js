module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Blog Ajie Hatajie berisi Catatan Kecil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'ajie hatajie, vuejs,php,laravel' },
      { hid: 'description', name: 'blog ajie hatajie ,berisi catatan kecil berisi pemprograman PHP,Javascript, Nodejs', content: 'catatan kecil ajie hatajie berisi pemprograman PHP,Javascript, Nodejs' }
    ],
    script: [
      { src: '/js/scale.fix.js' },
      { src: '/js/prism.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,300italic,400italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
      { rel: 'stylesheet', href: '/css/pygment_trac.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: '/css/prism.css' }
    ]
  },
  modules: [
    '@nuxtjs/axios', '@nuxtjs/google-analytics'
  ],
  'google-analytics': {
    id: 'UA-49819383-4'
  },
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#07ed38', strokeWidth: 5 },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
