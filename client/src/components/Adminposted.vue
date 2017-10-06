<template lang="html">
  <div class="ui segment">
    <h1>{{resultProps.title}}</h1>
    <img class="ui image" :src="resultProps.picture" alt="">
    <p>{{resultProps.desc}}</p>
    <div class="ui label">
      <img class="ui right spaced avatar image" :src="pic">
      {{user}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['resultProps'],
  data () {
    return {
      user: localStorage.getItem('nameUser'),
      pic: localStorage.getItem('imgUser')
    }
  }
}
</script>

<style lang="css">
</style>
