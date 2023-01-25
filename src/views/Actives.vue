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
              description: 'Computational & Systems Biology'
            },
            {
              image: 'Anu.jpg',
              title: 'Anu Shivakumar',
              description: 'Business Economics'
            },
          ]
        },
        {
          title: 'Upsilon Class',
          item: [
            {
              image: 'executives-img-1.png',
              title: 'Austin Pham',
              description: 'Linguistics and Computer Science, Business Economics, Statistics'
            },
            {
              image: 'Brian.jpg',
              title: 'Brian Roysar',
              description: 'Computer Science, Applied Mathematics'
            },
            {
              image: 'Ashton.jpg',
              title: 'Ashton Yuan',
              description: 'Communications, Public Affairs'
            },
            {
              image: 'executives-img-3.png',
              title: 'Cynthia Gong',
              description: 'Statistics'
            },
            {
              image: 'Eleanor.jpg',
              title: 'Eleanor Pae',
              description: 'Computational & Systems Biology'
            },
            {
              image: 'executives-img-3.png',
              title: 'Elli Pellot',
              description: 'Cognitive Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Ringy Zhang',
              description: 'Cognitive Science, Philosophy'
            },
          ]
        },
        {
          title: 'Phi Class',
          item: [
            {
              image: 'executives-img-1.png',
              title: 'Dakota Edison',
              description: 'Business Economics'
            },
            {
              image: 'executives-img-2.png',
              title: 'Emily Ng',
              description: 'Computational Biology '
            },
            {
              image: 'executives-img-3.png',
              title: 'George Ma',
              description: 'Business Economics'
            },
            {
              image: 'Jacob.jpg',
              title: 'Jacob John',
              description: 'Bioengineering'
            },
            {
              image: 'executives-img-3.png',
              title: 'Melissa Chen',
              description: 'Computer Science'
            },
            {
              image: 'Natasha.jpg',
              title: 'Natasha Cheung',
              description: 'Business Economics'
            },
            {
              image: 'Neal.jpg',
              title: 'Neal Agrawal',
              description: 'Psychobiology'
            },
            {
              image: 'Pallavi.jpg',
              title: 'Pallavi Jayaraman',
              description: 'Economics'
            },
            {
              image: 'executives-img-3.png',
              title: 'Varun Patro',
              description: 'Chemical Engineering'
            },
          ]
        },
        {
          title: 'Chi Class',
          item: [
            {
              image: 'executives-img-1.png',
              title: 'Aanya Tanti',
              description: 'Psychobiology, Economics'
            },
            {
              image: 'executives-img-2.png',
              title: 'Ben Myers',
              description: 'Mathematics'
            },
            {
              image: 'Christian.jpg',
              title: 'Christian Millar',
              description: 'Mechanical Engineering'
            },
            {
              image: 'executives-img-3.png',
              title: 'Dylan Kostovick',
              description: 'Economics'
            },
            {
              image: 'Kele.jpg',
              title: 'Kele Onuoha',
              description: 'Economics'
            },
            {
              image: 'executives-img-3.png',
              title: 'Mithil Chakraborty',
              description: 'Bioengineering'
            },
            {
              image: 'Natalia.jpg',
              title: 'Natalia Luzuriaga',
              description: 'Computer Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Noah Justice',
              description: 'Business Economics'
            },
            {
              image: 'Tejes.jpg',
              title: 'Tejes Srivalsan',
              description: 'Computer Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Vicky Jen',
              description: 'Design Media Arts'
            },
            {
              image: 'Yeon.jpg',
              title: 'Yeon Joo Nam',
              description: 'Design Media Arts'
            },
          ]
        },
        {
          title: 'Psi Class',
          item: [
          {
              image: 'executives-img-1.png',
              title: 'Andrea Nuñez Guido',
              description: 'Global Studies, Labor Studies'
            },
            {
              image: 'executives-img-2.png',
              title: 'Anish Ravilla',
              description: 'Statistics, Cognitive Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Emily Glazer',
              description: 'Microbiology, Immunology, and Molecular Genetics'
            },
            {
              image: 'executives-img-3.png',
              title: 'Grace Yang',
              description: 'Cognitive Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Ivan Sit',
              description: 'Computer Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Jason Inaba',
              description: 'Computer Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Juskeerat Anand',
              description: 'Computer Science and Engineering'
            },
            {
              image: 'executives-img-3.png',
              title: 'Kiel Messinger',
              description: 'Economics, Statistics'
            },
            {
              image: 'executives-img-3.png',
              title: 'Lance Ding',
              description: 'Mathematics of Computation'
            },
            {
              image: 'executives-img-3.png',
              title: 'Sophie Waszkelewicz',
              description: 'Cognitive Science'
            },
          ]
        },
        
        {
          title: 'Alpha Alpha Class',
          item: [
            {
              image: 'executives-img-1.png',
              title: 'Agastya Rao',
              description: 'Statistics, Business Economics'
            },
            {
              image: 'executives-img-2.png',
              title: 'Allie Young',
              description: 'Economics'
            },
            {
              image: 'executives-img-3.png',
              title: 'Avery Pak',
              description: 'Cognitive Science, Communication'
            },
            {
              image: 'executives-img-3.png',
              title: 'Camille Chou',
              description: 'Computer Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Eden Tan',
              description: 'Business Economics'
            },
            {
              image: 'executives-img-3.png',
              title: 'Gregorio Marinez',
              description: 'Business Economics'
            },
            {
              image: 'executives-img-3.png',
              title: 'Janak Sunil',
              description: 'Economics, Cognitive Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Lindsey Lee',
              description: 'Biochemistry'
            },
            {
              image: 'executives-img-3.png',
              title: 'Makena Silva',
              description: 'Business Economics'
            },
            {
              image: 'executives-img-3.png',
              title: 'Molly Smith',
              description: 'Environmental Science'
            },
            {
              image: 'executives-img-3.png',
              title: 'Xinyan Lu',
              description: 'Business Economics'
            },
            {
              image: 'executives-img-3.png',
              title: 'Young-Ghee Hong',
              description: 'Computer Science and Engineering'
            },
          ]
        }
      ]
    }
  },
}
</script>
<style>

.actives-header {
  text-align: center;
  
}

.actives-header h3 {
  font-size: 60px;
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
  font-weight: 600;
  margin-bottom: 10px;
}

.actives-item-main-inner .actives-item .actives-item-inner .actives-content p {
  line-height: 1.5em;
  font-size: 17px;
  font-family: 'AvenirLT';
  font-weight: 400;
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
  font-weight: bold;
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
