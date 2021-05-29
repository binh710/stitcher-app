<template>
  <div class="stitcher-app-sidebar">
      <div class="logo-container">
        <router-link to="/">
          <img alt="Vue" src="../assets/logo.png">
        </router-link>
      </div>
      <div class="sidebar-route">
        <router-link to="/child/app-1">
          <img alt="app-1" src="../assets/app-icon-1.png">
        </router-link>
      </div>
      <div class="sidebar-route">
        <router-link to="/child/app-2">
          <img alt="app-2" src="../assets/app-icon-2.png">
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stitcher-app-sidebar {
  cursor: pointer;
  width: 64px;
  height: 100%;
  background: #36495e;
  position: fixed;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
}
.logo-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid white;
}
img {
  width: 24px;
}
.sidebar-route {
  padding: 8px;
}

</style>
