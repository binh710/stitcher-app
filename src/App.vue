<template>
  <SideBar />
  <div class="body-container">
    <router-view/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}

</script>
<style>
* {
  position: relative;
}
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100vh;
}

.body-container {
  padding-left: 64px;
  height: 100%;
}

</style>
