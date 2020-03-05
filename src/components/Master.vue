
<template>
   <div>

    <app-preloader></app-preloader>
    <app-overlay></app-overlay>
    <app-nav-bar></app-nav-bar>


       <!-- Entrance -->
       <slot></slot>
       <!-- Entrance -->



    
    <app-footer></app-footer>
    <app-back-to-top></app-back-to-top>
    
   </div>
</template>


<script>
// @ is an alias to /src
import Overlay from "@/components/Overlay.vue";
import Preloader from "@/components/Preloader.vue";
import NavBar from "@/components/NavBar.vue";

import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";




export default {
  name: "Master",
  components: {
    "app-overlay" : Overlay,
    "app-preloader" : Preloader,
    "app-nav-bar" : NavBar,
    

    "app-footer" : Footer,
    "app-back-to-top" : BackToTop,

    
    
  }
};
</script>


<style>

</style>




 