<template>
  <div id="app">
    <loading-component v-if="this.$store.getters.getLoading"></loading-component>
    <!-- <div v-if="this.$store.state.loading" class="loading">loading</div> -->
    <!-- <transition :name="transitionName">
    <router-view v-show="!this.$store.state.loading"/>
    </transition> -->
    <transition :name="transitionName">
      <router-view/>
    </transition>
    <!-- <footer v-show="!this.$store.state.loading"></footer> -->
  </div>
</template>

<script>
import loadingComponent from "./components/parts/Common/LoadingComponet.vue";

export default {
  components: { loadingComponent },
  name: "App",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      //设置 css 动画
      // console.log(to)
      // let toName = to.name
      // const toIndex = to.meta.index
      // const fromIndex = from.meta.index
      // this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
      this.transitionName = "bounce";
    }
  }
};
</script>

<style>
#app {
  font-family: Microsoft YaHei;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

/* 【左右滑动动画】
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
*/

/* 拉伸出现动画 */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
