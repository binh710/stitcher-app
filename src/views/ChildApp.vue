<template>
  <div class="child-app-page" v-if="appId && appSrc">
    <iframe :src="appSrc" :key="appId" />
  </div>
</template>

<script>
import routes from '../routes.json';

export default {
  name: 'ChildApp',
  data: function () {
    return {
      appList: routes.appList,
    }
  },
  computed: {
    appId() {
      return this.$route?.params?.appId
    },
    appSrc() {
      const activeApp = this.appList.find(app => app.id === this.appId);
      const appSrc = activeApp?.appDomain ? activeApp.appDomain : ''
      const pathMatch = this.$route?.params?.pathMatch
      const additionalRouteParams = pathMatch ? pathMatch.join('/') : ''

      return `${appSrc}/child/${this.appId}/${additionalRouteParams}`;
    }
  }
}
</script>


<style>
.child-app-page {
  padding: 0;
  margin: 0;
  height: 100vh;
  min-height: 800px;
}

iframe {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
}
</style>

// https://www.youtube.com/embed/9cV_09a2Iyo