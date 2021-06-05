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
    listenForRouteChange(event) {
      // check if
      if (
          this.allowedDomainList &&
          this.allowedDomainList.length &&
          this.allowedDomainList.includes(event.origin)
      ) {
        if (
          event.data &&
          event.data.action &&
          event.data.action === 'update route' &&
          event.data.route
        ) {
          let url = event.data.route.length ? event.data.route.substring(1) : event.data.route
          this.$router.replace({
            name: 'child',
            params: { pathMatch: url.split('/') },
          })
        }
      }
    },
  },
  mounted() {
    window.addEventListener('message', this.listenForRouteChange)
  },
  beforeUnmount () {
    window.removeEventListener('message', this.listenForRouteChange)
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
