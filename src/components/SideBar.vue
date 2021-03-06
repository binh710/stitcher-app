<template>
  <div class="stitcher-app-sidebar">
      <div class="navigation-items">
        <div class="logo-container">
          <router-link class="sidebar-link" to="/">
            <img class="sidebar-icon" alt="Vue" src="@/assets/logo.png">
            <div class="sidebar-label"></div>
          </router-link>
        </div>
        <div class="sidebar-route" v-for="app in appList" :key="app.id">
          <router-link class="sidebar-link" :to="app.appUrl">
            <img class="sidebar-icon" :alt="`app-${app.id}`" :src="getImgUrl(app.iconImage)">
            <div class="sidebar-label">{{app.appName}}</div>
          </router-link>
        </div>
      </div>

      <div class="button-container">
          <button class="btn btn-primary" @click="alertChildApp()">
            Tell child app
          </button>
          <button class="btn btn-secondary" @click="logout()" v-if="isLoggedIn">
            Log out
          </button>
          <button class="btn btn-secondary" @click="login()" v-else>
            Login
          </button>
      </div>
  </div>
</template>

<script>
import routes from '../routes.json';
import {
  updateChildApps
} from '@/helpers/updateChildApps'


export default {
  name: 'SideBar',
  data: function () {
    return {
      appList: routes.appList,
      isLoggedIn: localStorage.getItem('jwt')
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/'+pic)
    },
    alertChildApp() {
      // create the message to inform stitcher app
      const msg = {
        action: 'alert',
        info: 'Listen to your parent'
      }
      
      // call global helper method to make child apps show alert
      updateChildApps(msg)
    },
    login() {
      // mock login method
      // imagine that this call an API 
      // passing username and password
      // and assuming that the call success
      // and the last step is
      // to just store the jwt token to localStorage
      this.isLoggedIn = true
      const jwt = 'secretSauce'
      localStorage.setItem('jwt', jwt)
      
      // construct the message to child app
      const msg = {
        action: 'login',
        token: jwt
      }
      this.alertChildAppLoginLogout(msg)
    },
    logout() {
      // mock logout method
      this.isLoggedIn = false
      localStorage.removeItem('jwt')
      const msg = {
        action: 'logout'
      }
      this.alertChildAppLoginLogout(msg)
    },
    alertChildAppLoginLogout(msg) {
      updateChildApps(msg)
    },
  }
}
</script>


<style scoped>
.stitcher-app-sidebar {
  
  width: 64px;
  height: 100%;
  background: #36495e;
  position: fixed;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
.button-container {
  padding: 0 8px;
}
.btn {
  padding: 6px;
  margin-top: 8px;
  width: 100%;
}
</style>
