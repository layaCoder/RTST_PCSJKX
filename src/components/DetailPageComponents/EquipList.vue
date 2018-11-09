<template>
 <div>
   <strong>Equip List</strong>
    <div>节点编号 {{this.$route.params.wsCode}}</div>
    <div>节点ip {{this.$route.params.ipAddress}}</div>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        data:''
      };
    },
    methods: {
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 strong{
     color: blue;
 }

</style>