<template>
  <div class="stitcher-app-sidebar">
      <div class="logo-container">
        <img alt="Vue" src="../assets/logo.png">
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
  width: 50px;
  height: 100%;
  background: #36495e;
  position: fixed;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-container img {
  width: 24px;
}
</style>
