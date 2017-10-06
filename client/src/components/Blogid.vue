<template lang="html">
  <div class="ui">
    <h1>{{getAll[0].title}}</h1>
    <img class="ui image" :src="getAll[0].picture">
    <p>{{getAll[0].desc}}</p>
    <h5>{{getAll[0].author}}</h5>
    <div class="ui label">
      <img class="ui right spaced avatar image" :src="getAll[0].author.picture">
      {{getAll[0].author.name}}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['id'],
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'getArticlesId'
    ]),
    ...mapState([
      'articleID'
    ])
  },
  mounted () {
    this.getArticlesId(this.id)
  },
  computed: {
    getAll () {
      return this.articleID()
    }
  },
  watch: {
    id () {
      this.getArticlesId(this.id)
    }
  }
}
</script>

<style lang="css">
</style>
