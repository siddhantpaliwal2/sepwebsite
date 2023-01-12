<template>
  <div>
    <!-- Vue tag to add header component -->
    <header-prismic/>
    <div class="inner-content-wrapper">
      <h1>Page not found</h1>
      <p>Sorry we were unable to find the page you are looking for.</p>
      <p><router-link to="/" style="text-decoration: underline;">Back to home</router-link></p>
    </div>
    <footer-prismic/>
  </div>
</template>

<script>
import HeaderPrismic from '../components/HeaderPrismic.vue'
import FooterPrismic from '../components/FooterPrismic.vue'

export default {
  name: 'NotFound',
  components: {
    HeaderPrismic,
    FooterPrismic
  }
}
</script>
