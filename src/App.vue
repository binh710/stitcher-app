<template>
  <SideBar />
  <div class="body-container">
    <router-view/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import routes from './routes.json';

export default {
  name: 'App',
  components: {
    SideBar
  },
  data: function () {
    return {
      appList: routes.appList,
    }
  },
  computed: {
    allowedDomainList() {
      return this.appList.map(app => app.appDomain)
    },
  },
  methods: {
    listenForChildMessage(event) {
      // check if the message come from a list of allowed domain
      if (
          this.allowedDomainList &&
          this.allowedDomainList.length &&
          this.allowedDomainList.includes(event.origin)
      ) {
        // check if the message format is valid
        if ( event.data && event.data.action) {
          // check if the message format is valid
          if (event.data.action === 'alert' && event.data.info) {
            window.alert(event.data.info);
          } else if (event.data.action === 'update route' && event.data.route) {
            this.changeRoute(event.data.route)
          }
        }
      }
    },
    changeRoute(routeUrl) {
      const url = routeUrl.length ? routeUrl.substring(1) : routeUrl
      const encodeURI = url ? `/${encodeURIComponent(url)}` : url
      history.pushState(
        {},
        null,
        this.$route.path + encodeURI
      )
    }
  },
  mounted() {
    window.addEventListener('message', this.listenForChildMessage)
  },
  beforeUnmount () {
    window.removeEventListener('message', this.listenForChildMessage)
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app {
  width: 100%;
  height: 100vh;
}

.body-container {
  padding-left: 64px;
  height: 100%;
  background: bisque;
}

</style>
