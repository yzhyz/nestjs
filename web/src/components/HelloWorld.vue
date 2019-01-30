<template>
  <div class="hello">
    {{msg}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.data1();
    this.data2()
  },
  methods: {
    data1() {
      axios.get('/api/user').then(
        res => {
          console.log(res)
        }
      )
    },
    data2() {
      axios.post('/api/user', {id: '2', name: 'li', age: 18}).then(
        res => {
          console.log(res)
        }
      )
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
