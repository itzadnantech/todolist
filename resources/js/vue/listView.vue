<template>
   <div>
      <div v-for="(item,index) in items" :key="index">
      <list-item-vue :item="item" class="item" />

      </div>
     
   </div>

</template>

<script>
import listItemVue from './listItem.vue';
 
export default {
   props: ['items'],
   components: {
      listItemVue
   }
}
</script>
<style scoped>

.item {
   background: #e6e6e6;
   padding: 5px;
   margin-top: 5px;
}

</style>