<template>
  <section :class="page">
    <!-- Vue tag to add header component -->
    <header-prismic />
    <section class="actives-section">
      <div class="actives-inner-section">
        <div class="container">
          <div class="actives-header">
            <h3>{{ title }}</h3>
            <p>{{ subtitle }}</p>
          </div>
          <div class="actives-item-main" v-for="(classitem, index) in classes" :key="'classes'+index">
            <div class="actives-item-main-header">
              <h3>{{ classitem.title }}</h3>
            </div>
            <div class="actives-item-main-inner d-flex align-items-center flex-wrap">
              <div class="actives-item" v-for="(item, itemindex) in classitem.item" :key="itemindex+'classes'+index">
                <active-item :image="item.image" :title="item.title" :description="item.description"></active-item>
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
import ActiveItem from '../components/slices/ActiveItem.vue'

export default {
  name: 'page',
  components: {
    HeaderPrismic,
    FooterPrismic,
    ActiveItem
  },
  data() {
    return {
      title: 'ACTIVE MEMBERS',
      subtitle: 'The Full List',
      classes: [
        {
          title: 'Tau Class',
          item: [
            {
              image: 'Neha Bhongir.jpg',
              title: 'Neha Bhongir',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Anu.jpg',
              title: 'Anu Shivakumar',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
          ]
        },
        {
          title: 'Upsilon Class',
          item: [
            {
              image: 'executives-img-1.png',
              title: 'Austin Pham',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Brian.jpg',
              title: 'Brian Roysar',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Ashton.jpg',
              title: 'Ashton Yuan',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Cynthia Gong',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Eleanor.jpg',
              title: 'Eleanor Pae',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Elli Pellot',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Ringy Zhang',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
          ]
        },
        {
          title: 'Phi Class',
          item: [
            {
              image: 'executives-img-1.png',
              title: 'Dakota Edison',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-2.png',
              title: 'Emily Ng',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'George Ma',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Jacob.jpg',
              title: 'Jacob John',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Melissa Chen',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Natasha.jpg',
              title: 'Natasha Cheung',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Neal.jpg',
              title: 'Neal Agrawal',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Pallavi.jpg',
              title: 'Pallavi Jayaraman',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Varun Patro',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
          ]
        },
        {
          title: 'Chi Class',
          item: [
            {
              image: 'executives-img-1.png',
              title: 'Aanya Tanti',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-2.png',
              title: 'Ben Myers',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Christian.jpg',
              title: 'Christian Millar',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Dylan Kostovick',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Kele.jpg',
              title: 'Kele Onuoha',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Mithil Chakraborty',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Natalia.jpg',
              title: 'Natalia Luzuriaga',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Noah Justice',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Tejes.jpg',
              title: 'Tejes Srivalsan',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Vicky Jen',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'Yeon.jpg',
              title: 'Yeon Joo Nam',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
          ]
        },
        {
          title: 'Psi Class',
          item: [
          {
              image: 'executives-img-1.png',
              title: 'Andrea Nuñez Guido',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-2.png',
              title: 'Anish Ravilla',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Emily Glazer',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Grace Yang',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Ivan Sit',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Jason Inaba',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Juskeerat Anand',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Kiel Messinger',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Lance Ding',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Sophie Waszkelewicz',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
          ]
        },
        
        {
          title: 'Alpha Alpha Class',
          item: [
            {
              image: 'executives-img-1.png',
              title: 'Agastya Rao',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-2.png',
              title: 'Allie Young',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Avery Pak',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Camille Chou',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Eden Tan',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Gregorio Marinez',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Janak Sunil',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Lindsey Lee',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Makena Silva',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Molly Smith',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Xinyan Lu',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
            {
              image: 'executives-img-3.png',
              title: 'Young-Ghee Hong',
              description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam similique consequuntur, quis'
            },
          ]
        }
      ]
    }
  },
}
</script>
<style>
.actives-item-main {
  margin-bottom: 40px;
}

.actives-header {
  text-align: center;
  margin: 60px 0 30px 0;
}

.actives-header h3 {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
}

.actives-header p {
  font-size: 18px;
  font-family: 'AvenirLT';
  font-weight: 200;
}

.actives-item-main-inner .actives-item {
  width: 25%;
}

.actives-item-main-inner .actives-item .actives-item-inner {
  padding: 10px;
}

.actives-item-main-inner .actives-item .actives-item-inner .actives-content {
  padding: 15px;
  background-color: rgba(241, 241, 241);
}

.actives-item-main-inner .actives-item .actives-item-inner .actives-content h3 {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
}

.actives-item-main-inner .actives-item .actives-item-inner .actives-content p {
  line-height: 1.375em;
  font-size: 15px;
  font-family: 'AvenirLT';
  font-weight: 200;
  display: block;
  display: -webkit-box;
  margin-bottom: 0;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


.actives-item-main-header h3 {
  width: fit-content;
  font-size: 29px;
  font-weight: 600;
  position: relative;
  margin-left: 10px;
  font-family: 'Poppins';
}

@media(max-width: 1140px) {
  .actives-item-main-inner .actives-item {
    width: 33.33%;
  }
}

@media(max-width: 767px) {
  .actives-item-main-inner .actives-item {
    width: 50%;
  }
}

@media(max-width: 520px) {
  .actives-item-main-inner .actives-item {
    width: 100%;
  }

  .actives-item-main {
    margin-bottom: 20px;
  }
}
</style>
