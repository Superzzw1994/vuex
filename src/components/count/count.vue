<template>
  <div>
      <h2>{{msg}}</h2>
      <hr>
      <h3>{{count}}</h3>
      <button @click ="add(20)">+</button>
      <button @click ="recease">-</button>

      <button @click ="addAction">+</button>
      <button @click ="receaseAction">-</button>
  </div>
</template>
<script>
//引入状态
import store from '../../vuex/store';
import { mapState , mapMutations ,mapGetters , mapActions} from 'vuex';
export default {
  data(){
      return{
          msg: 'zzw1994529'
      }
  },
  methods: {
    ...mapMutations(['add','recease']) ,
    ...mapActions(['addAction','receaseAction'])
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])  
},
  store
}
</script>
<style scoped>

</style>
