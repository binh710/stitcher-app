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
    pathMatch() {
      return this.$route?.params?.pathMatch
    },
    additionalRouteParams() {
      return this.pathMatch ? this.pathMatch.join('/') : ''
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
            // change sticher route if the message is valid
            this.changeRoute(event.data.route)
          }
        }
      }
    },
    changeRoute(routeUrl) {
      // get the path to navigate to
      const url = routeUrl.substring(1)
      let encodeURI = url ? `/${encodeURIComponent(url)}` : url

      if (this.additionalRouteParams && routeUrl === '/') {
        // this condition check when there's additional route
        // if user navigate back to the original route
        // the router should catch this and do a progrmatic navigation
        // so that the iframe url is correctly updated
        this.$router.push(`/child/${this.$route?.params?.appId}`)
      } else {
        // else, the below method should be call t
        // just update the url (without refreshing the route)
        history.pushState(
          {},
          null,
          this.$route.path + encodeURI
        )
      }
      
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
  background: antiquewhite;
}

</style>
