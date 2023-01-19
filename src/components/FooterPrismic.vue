<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="container">
        <h3>
          sigma eta pi
        </h3>
        <p>©2022 by sigma eta pi.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPrismic',
  data() {
    return {
    };
  }
}
</script>
<style>
.footer-inner {
  min-height: 217px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2f2e2e;
  text-align: center;
  padding: 15px  0;
}

.footer-inner h3 {
  font-size: 22px;
  text-align: left;
  color: #fff;
  margin-bottom: 22px;
  margin-left: 90px;
}

.footer-inner a {
  font-size: 15px;
  color: #fff;
  font-family: 'AvenirLT';
  margin-bottom: 43px;
  display: block;
}

.footer-inner p {
  font-size: 14px;
  text-align: left;
  margin-left: 90px;
  color: #fff;
  font-family: 'AvenirLT';
}

@media(max-width: 767px) {
  .footer-inner a {
    margin-bottom: 10px;
  }

  .footer-inner h3 {
    margin-bottom: 10px;
  }
  .footer-inner{
    min-height: 100%;
  }
}
</style>
