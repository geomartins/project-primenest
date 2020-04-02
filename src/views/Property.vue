<template>
  <div>
    
   <app-master>

     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Properties</h1>
            <ul class="page-list">
                <li><a href="index.html">Home</a></li>
                <li>Properties by Estate</li>
            </ul>
        </div>
     </app-breadcrumb>




    <!-- Properties by city start -->
    <div class="properties-area pd-top-92" v-for="(estate,index) in estates" :key="index+'estate'">
        <div class="container">
            <div class="section-title">
                <h2 class="title">{{ estate.name }}</h2>
            </div>
            <div class="row">

                <div class="col-lg-3 col-sm-6" v-for="(estate_detail, index) in fetchEstateDetailsUsingCode(estate.code)" :key="index+'estate_detail'">
                    <div class="single-feature">
                        <div class="thumb">
                            <img :src="estate_detail.featured_thumbnail" alt="img">
                            <a href="#"><i class="fa fa-heart"></i></a>
                        </div>
                        <div class="details">
                            <a href="#" class="feature-logo">
                                <img src="assets/img/icons/l3.png" alt="icons">
                            </a>
                            <!-- <p class="author"><i class="fa fa-user"></i> Vilma Jarvi By Redbrox</p> -->
                            <h6 class="title"><a href="#">{{ estate_detail.name }}</a></h6>
                            <h6 class="price">&#8358;{{ estate_detail.price | number_format }}/unit</h6>
                            <!-- <del>$790/mo</del> -->
                            <ul class="info-list">
                                <li><i class="fa fa-bed"></i> {{ estate_detail.keypoint.bedroom }} Bed</li>
                                <li><i class="fa fa-bath"></i> {{ estate_detail.keypoint.bathroom }} Bath</li>
                                <li><img src="assets/img/icons/7.png" alt="img"> {{ estate_detail.keypoint.area }} sqm.</li>
                            </ul>
                            <ul class="contact-list">
                                <li><a class="phone" href="#"><i class="fa fa-phone"></i></a></li>
                                <li><a class="message" href="#"><img src="assets/img/icons/8.png" alt="img"></a></li>
                                <router-link :to="{ name: 'PropertyDetails', params: { estate: estate_detail.estate_code,name: convertToSlug(estate_detail.name) } }" tag="a" class="btn btn-yellow"> View Details </router-link>
                                <!-- <li><a class="btn btn-yellow" href="#">View Details</a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                

              
               
               
            </div>
        </div>
    </div>
    <!-- Properties by city end -->



   
       
   </app-master>

        


  </div>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import BreadCrumb from "@/components/BreadCrumb.vue"
import {seo} from "../Repositories/seo.js"
import {pick} from "../Repositories/pick.js"
import {vuesax} from "../Repositories/vuesax"
import { database } from "../Repositories/database"

export default {
  name: "Property",
  mixins: [seo,pick,vuesax,database],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb
  },
  data(){
      return {

      }
  },

  created(){
      this.seoMetaData('Properties' , '');
      console.log(this.fetchEstateDetailsUsingCode('primenest'));
  }
};
</script>


<style>



</style>
