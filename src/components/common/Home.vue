<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
  </div>
</template>
<script>
    import vHeader from './Header.vue'
    import vSidebar from './Sidebar.vue'
    export default{
      components: {
        vHeader, vSidebar
      }
    }
</script>


