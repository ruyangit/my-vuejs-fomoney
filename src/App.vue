<template>
  <div id="app">
    <transition>
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
