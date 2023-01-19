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
    <section class="testimonial-section">
      <div class="testimonial-inner-section">
        <div class="container">
          <div class="testimonial-main">
            <div class="row">
              <div class="col-md-6">
                <div class="testimonial-slider">
                  <div class="testimonial-inner-slider">
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
              <div class="col-md-6">
                <div class="testimonial-right">
                  <div class="testimonial-inner-right">
                    <h2>Who we are</h2>
                    <div class="testimonial-review">
                      <div class="testimonial-inner-review">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="review-item">
                              <div class="review-inner-item">
                                <div class="review-item-img">
                                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="12.5 19.999 175 160.002"
                                    viewBox="12.5 19.999 175 160.002" height="200" width="200"
                                    xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation"
                                    aria-hidden="true" aria-labelledby="svgcid-4i3e9a-a4ugjn">
                                    <title id="svgcid-4i3e9a-a4ugjn"></title>
                                    <g>
                                      <path
                                        d="M114.733 174.579c45.255-32.506 41.878-73.139 31.072-75.172-9.457-1.355-18.913-4.064-27.018-11.515-15.536-15.576-16.21-40.633-.676-56.208a39.47 39.47 0 0 1 56.064 0c23.641 24.379 12.157 71.787-6.08 101.585-8.105 13.546-19.588 31.154-48.632 46.732l-4.73-5.422z"
                                        fill="#666664" data-color="1"></path>
                                      <path
                                        d="M20.442 174.579c45.255-32.506 41.878-73.139 31.071-75.172-9.457-1.355-18.913-4.064-27.018-11.515-15.536-15.577-16.211-40.634-.676-56.209a39.47 39.47 0 0 1 56.064 0c23.641 24.379 12.157 71.787-6.08 101.585C65.697 146.814 54.215 164.422 25.17 180l-4.728-5.421z"
                                        fill="#666664" data-color="1"></path>
                                    </g>
                                  </svg>
                                </div>
                                <div class="review-item-content">
                                  <p>"Testimonials are a great way to showcase positive feedback you've received. Click
                                    to edit and add yours."</p>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="review-item">
                              <div class="review-inner-item">
                                <div class="review-item-img">
                                  <svg preserveAspectRatio="xMidYMid meet" data-bbox="12.5 19.999 175 160.002"
                                    viewBox="12.5 19.999 175 160.002" height="200" width="200"
                                    xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation"
                                    aria-hidden="true" aria-labelledby="svgcid-4i3e9a-a4ugjn">
                                    <title id="svgcid-4i3e9a-a4ugjn"></title>
                                    <g>
                                      <path
                                        d="M114.733 174.579c45.255-32.506 41.878-73.139 31.072-75.172-9.457-1.355-18.913-4.064-27.018-11.515-15.536-15.576-16.21-40.633-.676-56.208a39.47 39.47 0 0 1 56.064 0c23.641 24.379 12.157 71.787-6.08 101.585-8.105 13.546-19.588 31.154-48.632 46.732l-4.73-5.422z"
                                        fill="#666664" data-color="1"></path>
                                      <path
                                        d="M20.442 174.579c45.255-32.506 41.878-73.139 31.071-75.172-9.457-1.355-18.913-4.064-27.018-11.515-15.536-15.577-16.211-40.634-.676-56.209a39.47 39.47 0 0 1 56.064 0c23.641 24.379 12.157 71.787-6.08 101.585C65.697 146.814 54.215 164.422 25.17 180l-4.728-5.421z"
                                        fill="#666664" data-color="1"></path>
                                    </g>
                                  </svg>
                                </div>
                                <div class="review-item-content">
                                  <p>"Testimonials are a great way to showcase positive feedback you've received. Click
                                    to edit and add yours."</p>
                         
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class = "wherewework-section">
        <div class = "wherewework-inner-section">
          <div class="container">
            <div class="wherewework-main text-center">
              <h1>Where we work</h1>
              <p>Place for pictures </p>
          </div>
        </div>
      </div>
    </section>
    <section class = "founded-section">
      <div class = "founded-inner-section">
        <div class="container">
          <div class="founded-main text-center">
            <h1>What we've founded</h1>
            <p>Place for pictures </p>
          </div>
        </div>
      </div>
    </section>
    <section class="community-section">
      <div class="community-inner-section">
        <div class="container">
          <masonary-slider></masonary-slider>
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
  background-image: url(../assets/img/hero-bg-img.png);
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
  min-height: 750px;
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
  margin-bottom: 20px;
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

  .testimonial-main .inner-item {
    margin: 0;
  }
  .review-inner-item{
    min-height: 200px;
  }
}
</style>
