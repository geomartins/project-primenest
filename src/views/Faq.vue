<template>
  <div>
    
   <app-master>

     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Help Center</h1>
            <ul class="page-list">
                <li><a href="index.html">Home</a></li>
                <li>Help Center</li>
            </ul>
        </div>
     </app-breadcrumb>



    <!-- faq area start -->
    <div class="faq-area pd-top-100 pd-bottom-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="section-title">
                        <h2 class="title">Frequently <br>asked questions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis enim vel leo laoreet, quis sodales purus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                    <div class="accordion" id="accordion">
                        <!-- single accordion -->
                        <div class="single-accordion card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Lorem ipsum dolor sit amet, consectetur</button>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis enim vel leo laoreet, quis sodales purus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </div>
                            </div>
                        </div>
                        <!-- single accordion -->
                        <div class="single-accordion card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">Consectetur adipiscing elit. Sed lobortis</button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis enim vel leo laoreet, quis sodales purus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </div>
                            </div>
                        </div>
                        <!-- single accordion -->
                        <div class="single-accordion card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">Lorem ipsum dolor sit amet, consectetur</button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis enim vel leo laoreet, quis sodales purus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </div>
                            </div>
                        </div>
                        <!-- single accordion -->
                        <div class="single-accordion card">
                            <div class="card-header" id="headingFour">
                                <h2 class="mb-0">
                                    <button class="btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">Lorem ipsum dolor sit amet, consectetur</button>
                                </h2>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                <div class="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis enim vel leo laoreet, quis sodales purus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </div>
                            </div>
                        </div>
                        <!-- single accordion end -->
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 offset-xl-1">
                    <div class="shape-image-list-wrap">
                        <div class="shape-image-list left-top">
                            <img src="assets/img/others/6.png" alt="img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- faq area End -->

       
   </app-master>

        


  </div>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import BreadCrumb from "@/components/BreadCrumb.vue"

export default {
  name: "Contact",
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb
    
    
  }
};
</script>


<style>



</style>
