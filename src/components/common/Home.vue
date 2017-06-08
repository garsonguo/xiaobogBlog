<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
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


