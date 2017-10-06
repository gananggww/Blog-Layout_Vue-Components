<template>
 <div>
   <div class="ui vertical fluid menu">
     <router-link class="item" :to ="'/'">
       Go To Home
     </router-link>
     <router-link class="item" v-for="all in articleProps" :key="all._id" :to ="'/'+ all._id">
       {{all.title}}
     </router-link>
   </div>
 </div>
</template>

<script>
export default {
  props: ['articleProps']
}
</script>

<style lang="css">
</style>
