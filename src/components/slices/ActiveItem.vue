<template>
    <div class="actives-item-inner">
      <div class="actives-img">
        <img :src="require(`@/assets/img/${image}`)" alt="">
      </div>
      <div class="actives-content">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: ['image', 'title', 'description'],
  name: 'activeItem'
}
</script>

<style scoped>
</style>
