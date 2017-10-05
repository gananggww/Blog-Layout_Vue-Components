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
      <button @click="insData()" class="ui fluid blue button" type="button" name="button">Posting gan!</button>
    </div>
    <Adminposted :resultProps = "result" v-if="result !== null"></Adminposted>
  </div>
</template>

<script>
import axios from 'axios'
import Adminposted from '@/components/Adminposted'
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
      },
      result: null
    }
  },
  methods: {
    insData () {
      var self = this
      axios.post('http://localhost:3000/articles', {
        title: self.insert.judul,
        short_desc: self.insert.mini_konten,
        desc: self.insert.konten,
        picture: self.insert.gambar
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then(response => {
        this.result = response.data
      })
    }
  }
}
</script>

<style lang="css">
</style>
