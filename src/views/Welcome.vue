<template>
  <div>
    
   <app-master>

       
       <app-large-banner></app-large-banner>
       <app-partner></app-partner>
       





       
   </app-master>

        


  </div>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import Partner from "@/components/Partner.vue";
import LargeBanner from "@/components/LargeBanner.vue"

export default {
  name: "Welcome",
  components: {
    "app-master" : Master,
    "app-partner": Partner,
    "app-large-banner": LargeBanner
    
  }
};
</script>


<style>



</style>
