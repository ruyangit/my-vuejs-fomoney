<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import './utils/validator.js'
export default {
  name: 'app'
}
</script>
