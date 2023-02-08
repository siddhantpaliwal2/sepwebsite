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
          'image': 'img-2.png',
          'type': 'image',
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
      slide: 1,
      sliding: null,
      records: [
        {
          'image': 'img-1.png',
          'type': 'image',
        },
        {
          'image': 'img-2.png',
          'type': 'image',
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
  max-width: 100px;
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
  height: 550px;
}

.community-inner-slider .inner-item::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  height: 550px;
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
  height: 550px;
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

.community-inner-slider .item .inner-item .item-img {
  display: flex;
  align-items: center;
  height: 1000px;
  height: 100%;
  width: 1000px;
  width: 100%;
}

.community-inner-slider .item video {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.community-inner-slider .item .inner-item .item-img img {
  width: 100%;
  height: 100%;
  height: 550px;
  width: 1000px;
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
