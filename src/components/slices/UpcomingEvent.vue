<template>
    <div class="upcoming-wrapper">
        <div class="slider">
          <carousel :autoplay="true" :center="true"  :items=2 :loop="true" :margin=10 :nav="true" :responsive="{0:{items:1,nav:false},1800:{items:1,nav:true}}">
            <template slot="prev"><span class="prev">prev</span></template>
            <img src="https://placeimg.com/200/200/any?1">
            <img src="https://placeimg.com/200/200/any?2">
            <img src="https://placeimg.com/200/200/any?3">
            <img src="https://placeimg.com/200/200/any?4">
            <template slot="next"><span class="next">next</span></template>
          </carousel>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'upcoming-slice',
  components: {
    carousel
  },
  data () {
        return {
            isDisplayMode: true
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.slider {
  width: 50%;
  border: 1px solid red;
  margin-left: 50px;
}
</style>
