<template>
  <div class="stitcher-app-sidebar">
      <div class="logo-container">
        <router-link class="sidebar-link" to="/">
          <img class="sidebar-icon" alt="Vue" src="../assets/logo.png">
          <div class="sidebar-label"></div>
        </router-link>
      </div>
      <div class="sidebar-route" v-for="app in appList" :key="app.id">
        <router-link class="sidebar-link" :to="app.appUrl">
          <img class="sidebar-icon" :alt="`app-${app.id}`" :src="getImgUrl(app.iconImage)">
          <div class="sidebar-label">{{app.appName}}</div>
        </router-link>
      </div>
      <!-- <div class="sidebar-route">
        <router-link class="sidebar-link" to="/child/app-2">
          <img class="sidebar-icon" alt="app-2" src="../assets/app-icon-2.png">
          <div class="sidebar-label">Child app 1</div>
        </router-link>
      </div> -->
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data: function () {
    return {
      appList: [{
        id: 1,
        iconImage: 'app-icon-1.png',
        appName: 'Child app 1',
        appUrl: '/child/app-1',
        appDomain: 'http://localhost:8081'
      },{
        id: 2,
        iconImage: 'app-icon-2.png',
        appName: 'Child app 2',
        appUrl: '/child/app-2',
        appDomain: 'http://localhost:8082'
      }]
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/'+pic)
    }
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
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 100;
  transition: width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow: hidden;
}
.stitcher-app-sidebar:hover {
  width: 200px;
}

.logo-container, .sidebar-route {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.logo-container {
  width: 100%;
  padding-bottom: 24px;
  /* border-bottom: 1px solid white; */
}
.sidebar-route {
  height: 64px;
}
.sidebar-route:hover {
  background-color: #2B3A4B;
}
.sidebar-route:hover .sidebar-link {
  color: #ffffff;
}
.sidebar-icon {
  width: 32px;
}
.sidebar-label {
  margin-left: 16px;
}
.sidebar-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #CCCCCC;
  padding-left: 16px;
  position: relative;
}
.router-link-active::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 64px; 
  background: #41B883;
  left: 0;
  top: -16px;
}
.router-link-active {
  color: #ffffff;
  font-weight: bold;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

</style>
