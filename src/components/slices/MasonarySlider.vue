<template>
  <div class="row">
    
    <div class="col-sm-12">
      <div class="community-slider">
        <div class="community-inner-slider">
          <carousel :per-page="1" :navigationEnabled="true" :paginationEnabled="false"
            :mouse-drag="false">
            <slide  v-for="(item, index) in records" :key="'classes'+index">
              <div class="item">
                <div class="inner-item">
                  <div  v-if="(item.type=='image')" class="item-img">
                    <img :src="require(`@/assets/img/masonary_slider/${item.image}`)" alt="">
                  </div>
                  <div v-else class="item-img">
                    <video autoplay loop muted>
                      <source :src="require(`@/assets/img/masonary_slider/${item.image}`)" type="video/mp4">
                      {{ item.text }}
                    </video>
                  </div>
                  <div class="item-like">
                    <button class="btn like-button">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path
                          d="M8.1816,5.0039 C7.9276,5.0039 7.6696,5.0279 7.4106,5.0759 C5.7326,5.3909 4.3566,6.8479 4.0646,8.6189 C3.9346,9.4039 4.0036,10.2029 4.2616,10.9319 C4.2636,10.9379 4.2656,10.9439 4.2676,10.9499 C5.1716,13.8579 10.2066,17.4019 11.7286,18.4189 C11.8966,18.5329 12.1076,18.5309 12.2746,18.4189 C13.7956,17.4019 18.8266,13.8589 19.7326,10.9499 C19.9966,10.2029 20.0646,9.4039 19.9356,8.6189 C19.6426,6.8479 18.2666,5.3909 16.5896,5.0759 C14.9596,4.7749 13.3646,5.4459 12.4126,6.8369 C12.2256,7.1099 11.7736,7.1099 11.5876,6.8369 C10.7866,5.6669 9.5276,5.0039 8.1816,5.0039 M12.0016,19.5029 C11.7136,19.5029 11.4246,19.4189 11.1726,19.2509 C9.1366,17.8899 4.2966,14.3869 3.3156,11.2559 C3.0036,10.3719 2.9216,9.4039 3.0776,8.4569 C3.4436,6.2429 5.1106,4.4889 7.2266,4.0939 C9.0226,3.7539 10.8006,4.3809 11.9996,5.7409 C13.1996,4.3829 14.9766,3.7569 16.7736,4.0939 C18.8896,4.4899 20.5566,6.2429 20.9216,8.4569 C21.0786,9.4069 20.9956,10.3789 20.6816,11.2659 C19.7116,14.3819 14.8676,17.8889 12.8306,19.2509 C12.5786,19.4189 12.2896,19.5029 12.0016,19.5029"
                          fill-rule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      records: [
        {
          'image': 'img-1.png',
          'type': 'image',
        },
        {
          'image': 'slider-video.mp4',
          'type': 'video',
          'text': 'Your browser does not support the video tag.'
        },
        {
          'image': 'img-2.png',
          'type': 'image',
        },
        {
          'image': 'img-3.png',
          'type': 'image',
        },
        {
          'image': 'img-4.png',
          'type': 'image',
        },
        {
          'image': 'img-5.png',
          'type': 'image',
        },
      ],
    }
  }
}
</script>
<style>
.community-inner-section .container {
  max-width: 1320px;
}

.community-inner-slider .VueCarousel-navigation-prev {
  left: 50px;
  font-size: 0;
  background-image: url(../../assets/img/pre.png);
  background-size: cover;
  padding: 0 !important;
  width: 23px;
  height: 39px;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
}

.community-inner-slider .VueCarousel-navigation-next {
  right: 50px;
  font-size: 0;
  background-image: url(../../assets/img/next.png);
  background-size: cover;
  padding: 0 !important;
  width: 23px;
  height: 39px;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
}

.community-inner-slider .VueCarousel-navigation--disabled {
  display: none;
}

.community-inner-slider .inner-item {
  position: relative;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
  margin: 0 10px;
  height: 100%;
  max-height: 550px;
}

.community-inner-slider .inner-item::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #000;
  transition: all 0.6s ease;
  opacity: 0;
  visibility: hidden;
}

.community-inner-slider .inner-item:hover::before {
  opacity: 0.5;
  visibility: visible;
}

.community-inner-slider .inner-item .item-like {
  position: absolute;
  width: 34px;
  height: 34px;
  bottom: 20px;
  left: 20px;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s ease;
}

.community-inner-slider .inner-item:hover .item-like {
  opacity: 1;
  visibility: visible;
}

.community-inner-slider .inner-item .item-like .like-button {
  padding: 0;
}

.community-inner-slider .inner-item .item-like .like-button svg {
  fill: #fff;
}

.community-inner-slider .inner-item .item-like .like-button:hover svg {
  fill: #ccc;
}

.community-inner-slider .item {
  height: 100%;
}

.community-inner-slider .inner-item .item-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(14, 62, 155, 1);
}

.community-inner-slider .inner-item .item-content h3 {
  color: #fff;
  font-size: 46px;
  font-weight: 300;
}

.community-header h1 {
  font-size: 50px;
  font-weight: 400;
  margin-top: 44px;
  margin-bottom: 42px;
  margin-left: 25px;
}

.community-inner-slider {
  margin-bottom: 25px;
}

.community-inner-slider .item .item-img {
  display: flex;
  align-items: center;
  height: 100%;
}

.community-inner-slider .item video {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.community-inner-slider .item .item-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.community-inner-section {
    background-color: rgba(248, 248, 248);
}

@media(max-width: 991px) {
  .community-header h1 {
    font-size: 40px;
  }
}

@media(max-width: 767px) {
  .community-header h1 {
    font-size: 32px;
  }
}

@media(max-width: 520px) {
  .community-header h1 {
    font-size: 28px;
    margin-top: 0px;
    margin-bottom: 14px;
    margin-left: 0px;
  }

  .community-inner-slider .VueCarousel-navigation-next {
    right: 35px;
    width: 20px;
    height: 20px;
  }

  .community-inner-slider .VueCarousel-navigation-prev {
    left: 35px;
    width: 20px;
    height: 20px;
  }

  .community-inner-section .col-sm-12 {
    padding: 0;
  }

  .community-inner-slider .inner-item {
    margin: 0;
  }
}
</style>
