<template>
  <div class="welcome-msg">
    <h1>Welcome to</h1>
    <img alt="Vue" src="../assets/vue-geekle.png">
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style>
.welcome-msg {
  padding: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  margin-bottom: 48px;
}
</style>
