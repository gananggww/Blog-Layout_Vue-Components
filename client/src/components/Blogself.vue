<template lang="html">
  <div>
    <div class="ui stackable three column grid">
      <div class="five wide column">
        <h1>Lasted Post</h1>
      </div>
      <div class="eight wide column">
        <div class="ui fluid icon input">
          <input type="text" v-model="searchString" placeholder="Search articles title.">
          <i class="search icon"></i>
        </div>
      </div>
      <div class="three wide column">
        <div class="ui compact menu">
          <a class="item active">
            <i class="list layout icon"></i>
          </a>
          <div class="link item">
            <i class="grid layout icon"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="ui segment divided items">
      <div class="item" v-for="(all, index) in filteredArticles">
        <div class="ui small image">
          <img :src="all.picture">
        </div>
        <div class="middle aligned content">
          <div class="header">
            {{all.title}}
          </div>
          <div class="description">
            <p>{{all.short_desc}}</p>
          </div>
          <div class="extra">
            <div @click="read(all._id)" class="ui right floated mini button">
              Read more
            </div>
            <div @click="apusGan(all._id, index)" class="ui right floated mini button">
              Delete
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    read (id) {
      this.$router.push(`${id}`)
    },
    ...mapActions([
      'delSelfArticle'
    ]),
    apusGan (id, idx) {
      var bong = {
        id: id,
        idx: idx
      }
      this.delSelfArticle(bong)
    }
  },
  computed: {
    ...mapGetters([
      'filterSelfArticles'
    ]),
    filteredArticles () {
      return this.filterSelfArticles(this.searchString)
    }
  }
}
</script>

<style lang="css">
</style>
