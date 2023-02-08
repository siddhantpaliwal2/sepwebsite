<template>
  <section>
    <header-prismic />
    <section class="recruitment-section">
      <div class="recruitment-inner-section">
        <div class="recruitment-container">
          <div class="recruitment-heading">
            <h3>{{ title }}</h3>
            <p>{{ subtitle }}</p>
          </div>
          <div class="recruitment-body">
            <div class="d-flex align-items-start flex-wrap recruitment-inner-body">
              <div class="card recruitment-item" v-for="(item, index) in records" :key="'rec'+index">
                <div class="recruitment-inner-item">
                  <div class="recruitment-img">
										<img :src="require(`../assets/img/${item.image}`)" :alt="item.image" class="card-img-top"/>
                  </div>
                  <div class="card-body recruitment-content">
                    <h2>{{ item.title }}</h2>
                    <h2>{{ item.status }}</h2>
                    <p>{{ item.date }}</p>
                  </div>
                </div>
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

export default {
  name: 'Recruitment',
  components: {
    HeaderPrismic,
    FooterPrismic
  },
  data() {
    return {
      title: 'SPRING RUSH 2023',
      subtitle: 'Become a Member',
      records: [
        {
          'image': 'meet_actives (1).jpg',
          'title': 'MEET THE ACTIVES',
          'status': '(open rush)',
          'date': 'TBD'
        },
        {
          'image': 'pro_night.jpg',
          'title': 'PROFESSIONAL NIGHT',
          'status': '(invite only)',
          'date': 'TBD'
        },
        {
          'image': 'coffee_chat.jpg',
          'title': 'COFFEE CHATS',
          'status': '(invite only)',
          'date': 'TBD'
        },
        {
          'image': 'interview.jpg',
          'title': 'FINAL INTERVIEWS',
          'status': '(invite only)',
          'date': 'TBD'
        },
      ],
    }
  }
}
</script>

<style>
.recruitment-inner-section {
  margin-bottom: 30px;
}

.recruitment-container {
  max-width: 1743px;
  padding: 0 15px;
  margin: 0 auto;
}

.recruitment-inner-section .recruitment-heading {
  margin: 60px 0;
  text-align: center;
}

.recruitment-inner-section .recruitment-heading h3 {
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: 400;
}

.recruitment-inner-section .recruitment-heading p {
  font-size: 18px;
  font-family: 'AvenirLT';
  font-weight: 200;
}

.recruitment-body .recruitment-item {
  height: 100%;
  width: 25%;
  border: none;
  border-radius: 0;
}

.recruitment-inner-item {
  padding: 10px 20px;
}

.recruitment-inner-item .recruitment-content {
  background-color: rgba(241, 241, 241);
  min-height: 231px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 42px;
}

.recruitment-inner-item .recruitment-content h2 {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
}

.recruitment-inner-item .recruitment-content p {
  font-size: 18px;
  font-family: 'AvenirLT';
  font-weight: 200;
}

@media (max-width: 1240px) {
  .recruitment-inner-item {
    padding: 10px;
  }

  .recruitment-inner-item .recruitment-content {
    padding: 15px;
    min-height: 180px;
    justify-content: center;
  }

  .recruitment-inner-item .recruitment-content h2 {
    font-size: 20px;
  }

  .recruitment-inner-item .recruitment-content h2 br {
    display: none;
  }
}

@media (max-width: 1400px) {
  .recruitment-body .recruitment-item {
    width: 33.33%;
  }
}
@media (max-width: 767px) {
  .recruitment-body .recruitment-item {
    width: 75%;
  }
}
@media (max-width: 520px){
  .recruitment-inner-item .recruitment-content h2{
    font-size: 18px;
  }
  .recruitment-body .recruitment-item{
    width: 100%;
  }
}
</style>
