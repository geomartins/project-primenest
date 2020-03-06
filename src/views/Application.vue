<template>
  <div>
    
   <app-master>

     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Application</h1>
            <ul class="page-list">
                <li><a href="index.html">Home</a></li>
                <li>Application Form</li>
            </ul>
        </div>
     </app-breadcrumb>



    
    <!-- contact area start -->
    <div class="register-page-area pd-bottom-100">
        <div class="container">
            <div class="row justify-content-center">
               
                <div class="col-xl-10 col-lg-10 col-md-10">
                    <form class="contact-form-wrap contact-form-bg">
                        <h4>Application Form</h4>
                        <div class="rld-single-input">
                            <input type="text" placeholder="First Name">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Last Name">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Select User role">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Password">
                        </div>
                        <div class="rld-single-input">
                            <input type="text" placeholder="Re-enter password">
                        </div>
                        <div class="btn-wrap">
                            <button class="btn btn-yellow">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- contact area End -->




    

       
   </app-master>

        


  </div>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import BreadCrumb from "@/components/BreadCrumb.vue"

export default {
  name: "Application",
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb
    
    
  }
};
</script>


<style>



</style>
