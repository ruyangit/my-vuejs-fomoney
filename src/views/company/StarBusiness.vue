<template>
  <div class="item sbe active">
      <div class="banner"></div>
  </div>
</template>
<script>
import api from '@api'
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    data(){
        return{
            
        }
    },
    components:{
        zHeader,
        zFooter
    }
}

</script>
<style scoped>
.sbe .banner{
    width: 7.5rem;
    height: 2.1rem;
    background: url(/static/images/company_sbe_banner.png) no-repeat center center;
    background-size: 7.5rem 2.1rem;
}
</style>


