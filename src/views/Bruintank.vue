<template>
  <section>
    <header-prismic />
    <section class="bruintank-section">
      <div class="bruintank-inner-section d-flex align-items-center flex-wrap">
        <div class="bruintank-item bruintank-left">
          <div class="bruintank-inner-left">
            <img src="../assets/img/bruintank-img-1.png" alt="">
          </div>
        </div>
        <div class="bruintank-item bruintank-right">
          <div class="bruintank-inner-right">
            <h2>BRUIN TANK</h2>
            <p>Through a variety of philanthropic and social activities, Sigma Eta Pi inspires its members to adopt
              important values such as leadership, empathy and ambition, and to always strive for excellence.</p>
            <p>
              Sigma Eta Pi's premier social event is called Bruin Tank. We like to reach out to all UCLA students with
              any level of entrepreneurship experience, and encourage them to share their ideas on a platform that gives
              them instantaneous access to experienced VCs and entrepreneurs. Our next installment of Bruin Tank is
              expected to be held during Winter Quarter 2023. More details are yet to be announced. Contact us below to
              for more information.
            </p>
            <button class="btn">Contact</button>
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

export default {
  name: 'bruintank',
  components: {
    HeaderPrismic,
    FooterPrismic
  }
}
</script>
<style>
.bruintank-section {
  max-width: 1763px;
  padding: 0 15px;
  margin: 0 auto;
  margin-bottom: 40px;
}

.bruintank-inner-section {
  background-color: rgba(241, 241, 241);
}

.bruintank-inner-section .bruintank-item {
  width: 50%;
}

.bruintank-inner-section .bruintank-inner-right {
  text-align: center;
  padding: 0 200px;
}

.bruintank-inner-section .bruintank-inner-right h2 {
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 13px;
}

.bruintank-inner-section .bruintank-inner-right p {
  line-height: 1.875em;
  text-align: center;
  font-size: 15px;
  font-family: 'AvenirLT';
  font-weight: 200;
  margin-bottom: 30px;
}

.bruintank-inner-section .bruintank-inner-right button.btn {
  min-height: 30px;
  min-width: 148px;
  border: 1px solid #000;
  border-radius: 0;
  padding: 0;
  font-size: 14px;
  font-family: 'AvenirLT';
  font-weight: 200;
  transition: all 0.6s ease;
}

.bruintank-inner-section .bruintank-inner-right button.btn:hover {
  background-color: #000;
  color: #fff;
}

@media (max-width: 1520px) {
  .bruintank-inner-section .bruintank-inner-right {
    padding: 0 15px;
  }
}

@media(max-width: 1024px) {
  .bruintank-inner-section .bruintank-inner-right p {
    margin-bottom: 15px;
    line-height: normal;
  }

  .bruintank-inner-section .bruintank-inner-right h2 {
    font-size: 32px;
    margin-bottom: 7px;
  }

  .bruintank-inner-section .bruintank-inner-right {
    padding: 10px;
  }
}

@media(max-width: 991px) {
  .bruintank-inner-section .bruintank-item {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media (max-width: 767px) {
  .bruintank-inner-section .bruintank-inner-right h2 {
    font-size: 28px;
  }
}
</style>
