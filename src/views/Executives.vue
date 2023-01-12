<template>
	<section class="city">

		<!-- Vue tag to add header component -->
		<header-prismic />
		<section class="executives-section">
			<div class="executives-inner-section">
				<h1 class="text-center">{{ title }}</h1>
				<div class="d-flex flex-wrap justify-content-center executives-item-main px-3">
					<div class="executives-item"  v-for="(item, index) in records" :key="'rec'+index">
						<div class="executives-inner-item">
							<img :src="require(`../assets/img/${item.image}`)" :alt="item.image">
							<div class="executives-name">
								<h2>{{ item.title }}</h2>
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
			records: [
        {
          'image': 'executives-img-1.png',
          'title': 'NEHA BHONGIR'
        },
        {
          'image': 'executives-img-2.png',
          'title': 'ELI PELLOT'
        },
        {
          'image': 'executives-img-3.png',
          'title': 'BEN MYERS'
        }
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
.executives-inner-section {
	margin-bottom: 30px;
}

.executives-inner-section h1 {
	margin: 60px 0 120px 0;
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
	margin: 0;
	font-size: 22px;
	font-weight: 400;
	margin-bottom: 18px;
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
