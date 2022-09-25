<template>
  <div>
    <TypeNav/>
    <list-container></list-container>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/home/ListContainer'
import Recommend from '@/pages/home/Recommend'
import Rank from '@/pages/home/Rank'
import Like from '@/pages/home/Like'
import Floor from '@/pages/home/Floor'
import Brand from '@/pages/home/Brand'
export default {
  components: { 
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand 
  },
  name:"Home"
}
</script>

<style>

</style>
