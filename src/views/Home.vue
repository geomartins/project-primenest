<template>
  <div>
    
    <app-preloader></app-preloader>
    <app-overlay></app-overlay>
    <app-nav-bar></app-nav-bar>
     








    
    <app-partner></app-partner>





    <app-footer></app-footer>
    <app-back-to-top></app-back-to-top>

   



  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import Preloader from "@/components/Preloader.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
import Partner from "@/components/Partner.vue";
import Overlay from "@/components/Overlay.vue";

export default {
  name: "Home",
  components: {
    "HelloWord" : HelloWorld,
    "app-nav-bar" : NavBar,
    "app-preloader" : Preloader,
    "app-footer" : Footer,
    "app-back-to-top" : BackToTop,
    "app-partner": Partner,
    "app-overlay" : Overlay,
    
  }
};
</script>


<style>



</style>
