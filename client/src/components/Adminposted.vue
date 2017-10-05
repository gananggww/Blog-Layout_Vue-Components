<template lang="html">
  <div class="ui segment">
    <h1>{{resultProps.title}}</h1>
    <img class="ui image" :src="resultProps.picture" alt="">
    <p>{{resultProps.desc}}</p>
    <p>{{resultProps.author}}</p>
  </div>
</template>

<script>
export default {
  props: ['resultProps']
}
</script>

<style lang="css">
</style>
