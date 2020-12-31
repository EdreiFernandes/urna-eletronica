<template>
  <div id="app" class="position-absolute h-100 w-100 bg-candy">
    <Topbar/>
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';
export default {
  name: 'App',
  components: {
    Topbar,
  },
}
</script>

<style>
.bg-contton-candy{
  background-color: #adf9ff;
}
.bg-chantilly{
  background-color: #f9ffff;
}
.bg-ice{
  background-color: #f2f8ff;
}
.bg-candy{
  background-color: #ffddea;
}
.bg-chocolate{
  background-color: #31261f;
}
</style>
