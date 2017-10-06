<template>
  <div >
    <!-- <Menus></Menus> -->
    <div class="ui container">
      <div class="ui one column grid">
        <div class="column">
          <div class="ui segment">
            <Hot></Hot>
          </div>
        </div>
        <div class="column">
          <div class="ui stackable two column grid">
            <div class="four wide column">
              <Sidebarx :articleProps = "allData"></Sidebarx>
            </div>
            <div class="twelve wide column">
              <div class="ui one column grid">
                <div class="column">
                  <div class="ui segment">
                    <h1>Hai Dude, Apa kabar mu hari ini..?</h1>
                  </div>
                </div>
                <div class="column">
                  <div class="ui segment">
                    <router-view></router-view>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menus from '@/components/Menus'
import Sidebarx from '@/components/Sidebarx'
import Blog from '@/components/Blog'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Menus,
    Sidebarx,
    Blog
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'getArticles'
    ]),
    ...mapState([
      'articles'
    ])
  },
  mounted () {
    this.getArticles()
  },
  computed: {
    allData () {
      return this.articles()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
