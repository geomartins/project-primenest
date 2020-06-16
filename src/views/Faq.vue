<template>
  <div>
    
   <app-master>

     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Help Center</h1>
            <ul class="page-list">
                <li><a href="/">Home</a></li>
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
                        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis enim vel leo laoreet, quis sodales purus blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> -->
                    </div>
                    <div class="accordion" id="accordion">
                        <!-- single accordion -->
                        <div class="single-accordion card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Are there payment plans asides from one-off purchases?</button>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                   You can make a one-off payment, or you can subscribe to instalment or mortgage plans. An outright payment guarantees you complete ownership of the property, with no additional or future charges.
                                   However, our payment plans are flexible. We have three instalment plans which allows you to stretch your payments, either over the period of 12 months (1 year), 18 months (1 ½ years), and 24 months (2 years). 
                                  Our mortgage payment plan stretches over a period of 20 years, at a fixed premium.
 
                                </div>
                            </div>
                        </div>
                        <!-- single accordion -->
                        <div class="single-accordion card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">What happens if I couldn’t complete payment in due time?</button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                   We have set up a structure that’s designed to help manage your budget, in a way that it doesn’t take a heavy toll on your finances. Whether you’re looking to pay for your property in instalments or on mortgage, make sure to draw up a financial plan that projects your potential income and expenditure for the next few years, to be able to determine if you’ll be able to meet up with the payment.  
                                </div>
                            </div>
                        </div>
                        <!-- single accordion -->
                        <div class="single-accordion card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">Which company oversees the project?</button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                   Leveraging industry professionals and multiple years of experience, Prime Nest Solutions is an infrastructure development company overseeing the Bricks Court project. 
                                </div>
                            </div>
                        </div>
                        <!-- single accordion -->
                        <div class="single-accordion card">
                            <div class="card-header" id="headingFour">
                                <h2 class="mb-0">
                                    <button class="btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">People lose their properties through government acquisitions. How safe is my investment?</button>
                                </h2>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                <div class="card-body">
                                    While many unscrupulous real estate outfits would sell houses that pose a risk of government future acquisition, we ensure that all our properties are safe for purchase, and free of troubles that may arise in the future. We obtain all necessary documents (including C of O’s) to guarantee your peace of mind.
                                </div>
                            </div>
                        </div>
                        <!-- single accordion end -->
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 offset-xl-1">
                    <div class="shape-image-list-wrap">
                        <div class="shape-image-list left-top">
                            <img src="/img/faq1.png" alt="img">
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
import { seo } from "../Repositories/seo"


export default {
  name: "Faq",
  mixins: [seo],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb
    
    
  },
  created(){
       this.seoMetaData('Frequently Asked Questions' , '');
  }
  
};
</script>


<style>



</style>
