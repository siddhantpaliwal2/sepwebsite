<template>
	<section class="city">

		<!-- Vue tag to add header component -->
		<header-prismic />
		<section class="executives-section">
			<div class="executives-inner-section">
				<div class = "executives-header">
				<h3 class="executives-header">{{ title }}</h3>
				<p class = "executives-header"> {{subtitle }}</p>
			    </div>
				<div class="d-flex flex-wrap justify-content-center executives-item-main px-3">
					<div class="executives-item"  v-for="(item, index) in records" :key="'rec'+index">
						<div class="executives-inner-item">
							<img :src="require(`../assets/img/${item.image}`)" :alt="item.image" style="width:100%;">
							<div class="executives-name">
								<h2>{{ item.title }}</h2>
								<div class = "executives-role"> 
									<p> {{ item.role }}</p>
								</div>
								<div class = "executives-description"> 
									<p> {{ item.description }}</p>
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
	name: 'city',
	components: {
		HeaderPrismic,
		FooterPrismic
	},
	data() {
		return {
      title:'EXECUTIVE BOARD',
	  subtitle: 'Full list of Executives',
			records: [
        {
          'image': 'Neha Bhongir.jpg',
          'title': 'Neha Bhongir',
		  'role' : 'President',
		  'description' : 'Lorem ipsum'
        },
        {
          'image': 'Elli.jpg',
          'title': 'Eli Pellot',
		  'role' : 'President',
		  'description' : 'Lorem ipsum'
        },
        {
          'image': 'Pallavi.jpg',
          'title': 'Pallavi Jayaraman',
		  'role' : 'Vice President of Professional Affairs',
		  'description' : 'Lorem ipsum'
        },
		{
          'image': 'Cynthia.jpg',
          'title': 'Cynthia Gong',
		  'role' : 'Vice President of Professional Affairs',
		  'description' : 'Lorem ipsum'
        },
		{
          'image': 'Ben.jpg',
          'title': 'Ben Myers',
		  'role' : 'Director of Operations and Technology',
		  'description' : 'Lorem ipsum'
        },
		{
          'image': 'Neal.jpg',
          'title': 'Neal Agrawal',
		  'role' : 'Director of Finance',
		  'description' : 'Lorem ipsum'
        },
		{
          'image': 'Melissa.jpg',
          'title': 'Melissa Chen',
		  'role' : 'Director of Marketing',
		  'description' : 'Lorem ipsum'
        },
		{
          'image': 'Vicky.jpg',
          'title': 'Vicky Jen',
		  'role' : 'Director of Media',
		  'description' : 'Lorem ipsum'
        },
		{
          'image': 'Yeon.jpg',
          'title': 'Yeon Joo Naam',
		  'role' : 'Director of Design',
		  'description' : 'Lorem ipsum'
        },
		{
          'image': 'Kiel.jpg',
          'title': 'Kiel Messinger',
		  'role' : 'Rush Chair',
		  'description' : 'Lorem ipsum'
        },
		{
          'image': 'Emily.jpg',
          'title': 'Emily Glazer',
		  'role' : 'Rush Chair',
		  'description' : 'Lorem ipsum'
        },
		
		{
          'image': 'Natalia.jpg',
          'title': 'Natalia Luzuriaga',
		  'role' : 'Director of Alumni Relations',
		  'description' : 'Lorem ipsum'
        },
		
      ],
		}
	},
	methods: {
		getContent(uid) {
			//Query to get post content
			this.$prismic.client.getByUID('city', uid)
				.then((response) => {
					if (response) {
						this.documentId = response.id
						this.fields.image = response.data.hero_image
						this.mainView = response.data.hero_image
						this.tabletView = response.data.hero_image.tablet
						this.mobileView = response.data.hero_image.phone
						this.fields.pagetitle = response.data.page_title
						this.fields.pagedescription = response.data.page_description
						this.fields.divcolor = response.data.divider_and_button_color
						this.fields.btnLink = response.data.button_link
						this.fields.btnLabel = response.data.button_label

						//Set slices as variable
						this.slices = response.data.body
						this.building = response.data.body.filter(function (slice) {
							if (slice.slice_type == 'building') {
								return slice.items;
							}
						});
						// Set Meta tags
						this.metaTags.title = (response.data.seo_page_title) ? response.data.seo_page_title[0].text : '';
						this.metaTags.description = (response.data.seo_description) ? response.data.seo_description[0].text : '';
						this.metaTags.image = (response.data.meta_image.url) ? response.data.meta_image.url : '';
						this.metaTags.url = (response.data.meta_url) ? response.data.meta_url.link_type : '';
						this.metaTags.site_name = (response.data.meta_site_name) ? response.data.meta_site_name[0].text : '';
						this.metaTags.twitter_handle = (response.data.twitter_handle) ? response.data.twitter_handle : '';
						this.metaTags.twitter_image = (response.data.twitter_image) ? response.data.twitter_image.url : '';
					}
					else {
						//returns error page
						this.$router.push({ name: 'not-found' })
					}
				})
		}
	},
	created() {
		this.getContent(this.$route.params.uid)
	},
	beforeRouteUpdate(to, from, next) {
		this.getContent(to.params.uid)
		next()
	}
}
</script>
<style>

.executives-inner-section .executives-header {
  text-align: center;

  align-items: center;
}

.executives-inner-section .executives-header h3 {
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
}

.executives-inner-section .executives-header p {
  font-size: 18px;
  font-family: 'AvenirLT';
  font-weight: 200;
  text-align: center;
}
.executives-inner-section {
	margin-bottom: 30px;
}

.executives-inner-section h1 {
	margin: 20px;
	font-size: 40px;
	font-weight: 400;
}
.executives-item-main {
    max-width: 1769px;
    margin: 0 auto;
}
.executives-inner-section .executives-item {
	width: 33.33%;
    padding: 10px 0;
}
.executives-inner-item {
	position: relative;
}

.executives-inner-item .executives-name {
	position: absolute;
	bottom: 0;
	left: 0;
	min-height: 135px;
	width: 100%;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 2;
}

.executives-inner-item .executives-name:before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(225, 239, 242);
	opacity: 0.75;
	z-index: -1;
}

.executives-inner-item .executives-name h2 {

	font-size: 22px;
	font-weight: 400;
	
}
.executives-inner-item .executives-role p {
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	
}
 .executives-subtitle h2 {
	font-size: 18px;
    font-family: 'AvenirLT';
    font-weight: 200;
	
}
.executives-inner-item .executives-description p {
	font-size: 14px;
	font-weight: 500;
	text-align: center;
	margin-top: 20px;
	
}
@media(max-width: 1200px){
	.executives-inner-section .executives-item{
		width: 33.33%;
	}
}
@media (max-width: 1024px) {
	.executives-inner-item .executives-name {
		min-height: 75px;
	}

	.executives-inner-item .executives-name h2 {
		margin-bottom: 0px;
		font-size: 18px;
	}
}

@media (max-width: 767px) {
	.executives-inner-section .executives-item {
		width: 50%;
		padding: 10px;
	}

	.executives-inner-item img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.executives-inner-section h1 {
		margin: 60px 0;
		font-size: 32px;
	}
}

@media (max-width: 520px) {
	.executives-inner-section .executives-item {
		width: 100%;
		padding: 10px;
	}

	.executives-inner-item img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.executives-inner-item .executives-name {
		min-height: 50px;
	}

	.executives-inner-item .executives-name h2 {
		font-size: 16px;
	}
	.executives-inner-section h1 {
		margin: 20px 0;
		font-size: 28px;
	}
}
</style>
