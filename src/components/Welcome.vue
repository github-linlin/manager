<script>
  export default {
    name: 'welcome',
    methods:{
      goLogin() {
        this.$router.push('/login')
      }
    }
  }
</script>

<template>
  <div>欢迎页面</div>
  <el-button @click="goLogin">到登陆页面</el-button>

</template>

<style scoped>

</style>
