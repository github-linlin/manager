<script>
import { useRouter } from 'vue-router'
  export default {
    name: 'login',
    setup() {
      const route = useRouter();
      function goWelcome(){
        route.push('/welcome')
      }

      return {
        goWelcome
        }
    }
    }
</script>

<template>
  <div>登录页面</div>
  <el-button @click="goWelcome">到欢迎页面</el-button>

</template>

<style scoped>

</style>
