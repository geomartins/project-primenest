<template>
  <div>
    
   <app-master>

       <!-- 404 page start -->
    <div class="error-page text-center">
        <div class="container">
            <div class="error-page-wrap d-inline-block">
                <a href="index.html">Go Back</a>
                <h2>404</h2>
            </div>
        </div>
    </div>
    <!-- 404 page end -->


       
   </app-master>

        


  </div>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";

export default {
  name: "Error",
  components: {
    "app-master" : Master,
   
  }
};
</script>


<style>



</style>
