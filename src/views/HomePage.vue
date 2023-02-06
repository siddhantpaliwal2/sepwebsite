<template>
  <section class="homepage">
    <header-prismic />
    <section class="hero-section">
      <div class="hero-inner-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-box-section">
                <div class="hero-box-inner-section">
                  <h1>Welcome to Sigma Eta Pi</h1>
                  <h6>UCLA's Premier Co-Ed Entrepreneurship Fraternity</h6>
                  <p>Our members have started ventures in every industry from education to technology. Every one of our
                    members has a demonstrable passion for learning, driving change, and self-improvement, but none of
                    them go through it alone.</p>
                    <router-link to = "/recruitment" class = "btn ct-button">Join Us </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="dream-section">
      <div class="dream-inner-section">
        <div class="container">
          <div class="dream-main text-center">
            <h1>Dare to Dream</h1>
            <p>Founded in 2010 at UCLA. 40+ Active Members. 10+ Active Startups. </p>
              <router-link to="/executives" class="btn ct-button">Our Brothers</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class = "whoweare-main-section">
      <div class = "whoweare-inner-section">
        <div class="container">
          <div class="whoweare-main text-center">
            <img src="../assets/img/masonary_slider/SEP_1.jpg" alt="">       
          </div>
        </div>
       </div> 
    </section>
    <section class = "wherewework-section">
        <div class = "wherewework-inner-section">
          <div class="container">
            <div class="wherewework-main text-center">
              <h1>What we've founded</h1>
              <img src= "../assets/img/what weve started.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class = "founded-section">
      <div class = "founded-inner-section">
        <div class="container">
          <div class="founded-main text-center">
            <h1>Where we work</h1>
            <img src= "../assets/img/companies.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class = "wherewework-section">
        <div class = "wherewework-inner-section">
          <div class="container">
            <div class="wherewework-main text-center">
              <h1>Join our Brotherhood</h1>
              <div class="brotherhood-slider">
                  <div class="brotherhood-inner-slider">
                      <carousel :per-page="1" :navigationEnabled="true"
                      :paginationEnabled="false" :mouse-drag="false">
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
                          </div>
                          </div>
                       </slide>
                      </carousel>   
              </div>
            </div>   
          </div>
          </div>
      </div>
    </section>
    <footer-prismic />
  </section>
</template>

<script>
// imports for all components
import HeaderPrismic from '../components/HeaderPrismic.vue'
import FooterPrismic from '../components/FooterPrismic.vue'
import MasonarySlider from '../components/slices/MasonarySlider.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'home-page',
  components: {
    HeaderPrismic,
    FooterPrismic,
    MasonarySlider,
    Carousel,
    Slide
  },
  data() {
    return {
      records: [
        {
          'image': 'SEP_5.jpg',
          'type': 'image',
        },
        {
          'image': 'SEP_6.jpg',
          'type': 'image',
          
        },
        {
          'image': 'SEP_3.jpg',
          'type': 'image',
        },
        {
          'image': 'SEP_7.jpg',
          'type': 'image',
        },
        {
          'image': 'SEP_9.jpg',
          'type': 'image',
        },
        {
          'image': 'SEP_10.jpg',
          'type': 'image',
        },
        {
          'image': 'SEP_11.jpg',
          'type': 'image',
        },
      ],
    }
  }
}
</script>

<style>
.hero-section {
  padding-bottom: 35px;
  background-color: #fff;
}

.hero-inner-section .container {
  max-width: 1742px;
}

.hero-inner-section {
  min-height: 690px;
  display: flex;
  align-items: center;
  background-image: url(../assets/img/skyline.jpeg) ;
  background-repeat: no-repeat;
}

.hero-box-inner-section {
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px 190px;
  background-color: #fff;
  opacity: 0.8;
}

.hero-box-inner-section h1 {
  font-size: 72px;
  font-weight: 400;
  margin-bottom: 29px;
}

.hero-box-inner-section h6 {
  font-size: 20px;
  font-family: 'Poppins';
  margin-bottom: 22px;
}

.hero-box-inner-section p {
  font-size: 20px;
  font-family: 'AvenirLT';
  font-weight: 200;
  line-height: 1.67em;
  max-width: 480px;
  text-align: justify;
  margin-bottom: 29px;
}

.ct-button {
  min-height: 40px;
  min-width: 142px;
  border: 1px solid #282626;
  border-radius: 0;
  padding: 12px;
  padding-top: 25px;
  font-size: 16px;
  font-family: 'AvenirLT';
  align-content: center;
  font-weight: 200;
  text-decoration-color: #fff;
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
  background-color: #282626;
  color: #fff;
}

.ct-button:hover {
  background-color: transparent;
  color: #282626;
}

.dream-inner-section {
  min-height: 373px;
  display: flex;
  align-items: center;
  background-color: rgba(248, 248, 248);
}

.dream-main h1 {
  font-size: 56px;
  margin-bottom: 20px;
  font-weight: 400;
}

.dream-main p {
  font-size: 16px;
  margin-bottom: 30px;
  font-family: 'AvenirLT';
  font-weight: 600;
  color: #3a3a3a;
}

.dream-main .ct-button {
  background-color: #282626;
  border-color: #282626;
}

.dream-main .ct-button a {
  color: #fff;
}

.dream-main .ct-button:hover {
  background-color: transparent;
  color: #607980;
}

.dream-main .ct-button:hover a {
  color: #607980;
}

.testimonial-inner-section {
  padding: 36px 0 46px 0;
}

.testimonial-inner-right {
  text-align: center;
  max-width: 500px;
}

.testimonial-inner-right h2 {
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 46px;
}

.testimonial-inner-review .col-md-6 {
  padding: 0 7px;
}

.review-inner-item {
  background-color: #282626;
  padding: 10px;
  min-height: 234px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.review-inner-item .review-item-img svg {
  width: 40px;
  margin-bottom: 16px;
}

.review-inner-item .review-item-img svg [data-color="1"] {
  fill: #fff;
}

.review-inner-item .review-item-content p {
  color: #fff;
  font-size: 14px;
  font-family: 'Helvetica';
  font-weight: normal;
  letter-spacing: 0em;
  line-height: normal;
  margin-bottom: 27px;
}

.review-inner-item .review-item-content span {
  font-size: 15px;
  color: #9D6200;
  font-family: 'Helvetica';
  font-weight: 700;
}

.testimonial-inner-section .container {
  max-width: 1400px;
}

.whoweare-main-section {
  height: 800px;
  margin-top: 30px;
  align-items: center;
  background-color: #fff;
}

.whoweare-main-section h1{
  font-size: 56px;
  font-weight: 400;
  margin-bottom: 25px;
}

.whoweare-inner-section .container{
  max-width: 1400px
}
.whoweare-inner-slider{
  max-width: 600px;
  position: relative;
}

.whoweare-slider{
  max-width: 600px;
  position: relative;
  margin-left: 380px;
}

.brotherhood-inner-slider{
  max-width: 1200px;
  max-height: 800PX;
  position: relative;
}

.brotherhood-slider{
  max-width: 1200px;
  max-height: 800PX;
  position: relative;
  margin-left: 100px;
}

.testimonial-inner-slider {
  max-width: 600px;
  position: relative;
}

.testimonial-main .inner-item .item-img {
  display: flex;
  align-items: center;
  height: 100%;
  max-height: 335px;
}

.testimonial-main .inner-item .item-img img {
  width: 100%;
}

.testimonial-main .inner-item .item-img video {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.item .inner-item .item-img {
  display: flex;
  align-items: center;
  height: 100%;
  max-height: 300px;
  max-width: 600px;
  margin-top: 30px;
  margin-bottom: 50px;
}

.item .inner-item .item-img img {
  width: 100%;
  align-items: center;
  max-height: 1000px;
}

.brotherhood-slider .brotherhood-inner-slider .item .inner-item .item-img {
  display: flex;
  align-items: center;
  height: 100%;
  max-height: 600px;
  max-width: 1200px;
  margin-top: 30px;
  margin-bottom: 50px;
}

.brotherhood-slider .brotherhood-inner-slider .item .inner-item .item-img img {
  width: 100%;
  align-items: center;
  max-height: 600px;
}

.whoweare-main .inner-item .item-img video {
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.whoweare-inner-slider .VueCarousel-navigation-prev {
  left: 50px;
  font-size: 0;
  background-image: url(../assets/img/pre.png);
  background-size: cover;
  padding: 0 !important;
  width: 23px;
  height: 39px;
  background-position: center;
  margin-bottom: 25px;
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
}

.whoweare-inner-slider .VueCarousel-navigation-next {
  right: 50px;
  font-size: 0;
  background-image: url(../assets/img/next.png);
  background-size: cover;
  padding: 0 !important;
  width: 23px;
  height: 39px;
  background-position: top;
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
}
.testimonial-inner-slider .VueCarousel-navigation-prev {
  left: 50px;
  font-size: 0;
  background-image: url(../assets/img/pre.png);
  background-size: cover;
  padding: 0 !important;
  width: 23px;
  height: 39px;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
}

.testimonial-inner-slider .VueCarousel-navigation-next {
  right: 50px;
  font-size: 0;
  background-image: url(../assets/img/next.png);
  background-size: cover;
  padding: 0 !important;
  width: 23px;
  height: 39px;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0) invert(1);
}
.whoweare-inner-slider .VueCarousel-navigation--disabled {
  display: none;
}

.whoweare-main .inner-item {
  position: relative;
  align-items: center;
  transition: all 0.6s ease;
  margin: 0 10px;
  height: 100%;
}

.testimonial-inner-slider .VueCarousel-navigation--disabled {
  display: none;
}

.testimonial-main .inner-item {
  position: relative;
  transition: all 0.6s ease;
  margin: 0 10px;
  height: 100%;
}

.testimonial-main .inner-item::before {
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

.testimonial-main .inner-item:hover::before {
  opacity: 0.5;
  visibility: visible;
}

.whoweare-main .inner-item::before {
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



.testimonial-main .inner-item .item-like {
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

.testimonial-main .inner-item:hover .item-like {
  opacity: 1;
  visibility: visible;
}

.testimonial-main .inner-item .item-like .like-button {
  padding: 0;
}

.testimonial-main .inner-item .item-like .like-button svg {
  fill: #fff;
}

.testimonial-main .inner-item .item-like .like-button:hover svg {
  fill: #ccc;
}

.testimonial-inner-slider .item {
  height: 100%;
}

.testimonial-main .inner-item .item-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(14, 62, 155, 1);
}

.testimonial-main .inner-item .item-content h3 {
  color: #fff;
  font-size: 46px;
  font-weight: 300;
}

.wherewework-inner-section {
  min-height: 600px;
  margin-top: auto;
  align-items: center;
  background-color: rgba(248, 248, 248);
}

.wherewework-main h1 {
  font-size: 56px;
  padding-top: 30px;
  text-align: center;
  
  margin-bottom: 20px;
  font-weight: 400;
  
}

.wherewework-main p {
  font-size: 16px;
  margin-top: 100px;
  font-family: 'AvenirLT';
  font-weight: 600;
  color: #3a3a3a;
}

.founded-inner-section {
  min-height: 500px;
  margin-top: 30px;
  align-items: center;
  background-color: #fff;
}

.founded-main h1 {
  font-size: 56px;
  font-weight: 400;
}

.founded-main p {
  font-size: 16px;
  margin-top: 100px;
  font-family: 'AvenirLT';
  font-weight: 600;
  color: #3a3a3a;
}
@media (max-width: 1480px) {
  .hero-box-inner-section {
    padding: 50px 100px;
  }
}

@media(max-width: 1180px) {
  .hero-box-inner-section {
    padding: 50px;
  }

  .hero-box-inner-section h1 {
    font-size: 42px;
    margin-bottom: 15px;
  }
}

@media(max-width: 991px) {
  .hero-box-inner-section p {
    max-width: 100%;
  }

  .hero-inner-section {
    min-height: 540px;
  }

  .hero-box-inner-section {
    min-height: 450px;
  }

  .testimonial-inner-right h2 {
    font-size: 40px;
  }
}

@media(max-width: 767px) {
  .hero-inner-section .col-lg-7 {
    padding: 0;
  }

  .hero-box-inner-section {
    min-height: 100%;
    padding: 30px;
  }

  .hero-box-inner-section h1 {
    font-size: 32px;
  }

  .dream-main h1 {
    font-size: 42px;
    margin-bottom: 10px;
  }

  .dream-main p {
    margin-bottom: 10px;
  }

  .testimonial-inner-slider {
    max-width: 100%;
  }

  .testimonial-inner-right {
    max-width: 100%;
    margin: 20px 0;
  }

  .testimonial-inner-right h2 {
    font-size: 32px;
  }
  .review-inner-item{
    margin: 10px 0;
  }
}

@media(max-width: 520px) {
  .hero-inner-section {
    min-height: 100%;
    padding: 15px 0;
  }

  .hero-box-inner-section {
    padding: 15px;
  }

  .hero-box-inner-section h1 {
    font-size: 22px;
  }

  .hero-box-inner-section h6 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .hero-box-inner-section p {
    font-size: 16px;
    max-width: 100%;
    margin-bottom: 10px;
  }

  .dream-main h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  .testimonial-inner-slider .VueCarousel-navigation-next {
    right: 35px;
    width: 20px;
    height: 20px;
  }

  .testimonial-inner-slider .VueCarousel-navigation-prev {
    left: 35px;
    width: 20px;
    height: 20px;
  }

  .testimonial-inner-right h2 {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .testimonial-inner-section {
    padding: 15px 0;
  }

  .testimonial-inner-section .col-md-6 {
    padding: 0;
  }

  .whoweare-inner-section .col-md-6 {
    padding: 0;
  }

  .testimonial-main .inner-item {
    margin: 0;
  }
  .review-inner-item{
    min-height: 200px;
  }
}
</style>
