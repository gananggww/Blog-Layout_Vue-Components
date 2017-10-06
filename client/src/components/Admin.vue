<template lang="html">
  <div class="ui container">
    <div class="ui form">
      <div class="field">
        <label>Judul</label>
        <textarea v-model="insert.judul" rows="1"></textarea>
      </div>
      <div class="field">
        <label>Gambar via URL</label>
        <textarea rows="1" v-model="insert.gambar"></textarea>
      </div>
      <div class="field">
        <label>Deskripsi singkat</label>
        <textarea rows="2" v-model="insert.mini_konten"></textarea>
      </div>
      <div class="field">
        <label>Konten</label>
        <textarea v-model="insert.konten"></textarea>
      </div>
      <button @click="insArticle(insert)" class="ui fluid blue button" type="button" name="button">Posting gan!</button>
      <br>
    </div>
    <button @click="gotoBlog()" class="ui right labeled green fluid icon button">
      <i class="right arrow icon"></i>
      Go To Your Blog
    </button>
    <Adminposted :resultProps = "result" v-if="result !== null"></Adminposted>
  </div>
</template>

<script>
import Adminposted from '@/components/Adminposted'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Adminposted
  },
  data () {
    return {
      insert: {
        judul: '',
        gambar: '',
        mini_konten: '',
        konten: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'insArticle'
    ]),
    ...mapState([
      'articleIns'
    ]),
    gotoBlog () {
      this.$router.push('/')
    }
  },
  computed: {
    result () {
      return this.articleIns()
    }
  }
}
</script>

<style lang="css">
</style>
