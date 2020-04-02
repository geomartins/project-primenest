<template>
  <div>
    
   <app-master>

     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Properties</h1>
            <ul class="page-list">
                <router-link to="/" tag="a"> Home </router-link>
                <!-- <li><a href="index.html">Home</a></li> -->
                <li>{{ name.replace(/-/g,' ') }}</li>
            </ul>
        </div>
     </app-breadcrumb>




      <!-- property-details-area start -->
    <div class="property-details-area" v-for="(detail,index) in details" :key="index+'details'">
        <div class="bg-gray pd-top-100 pd-bottom-90">
            <div class="container">
                <div class="row ">
                    <div class="col-xl-9 col-lg-8">
                        <div class="property-details-slider">
                            <div class="item">
                                <div class="thumb">
                                    <img :src="detail.featured_image" alt="img">
                                </div>
                            </div>
                          
                        </div>
                        <div class="property-details-slider-info">
                            <h3><span>&#8358;{{ detail.price | number_format }}/unit</span> {{ detail.name }}</h3>
                            <!-- <del>$500</del> -->
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4">
                        <div class="widget widget-owner-info mt-lg-0 mt-5">
                            
                           
                            <div class="contact-info">
                                <h6 class="mb-3">Contact Info</h6>
                                <div class="media">
                                    <div class="media-left">
                                        <img src="/assets/img/icons/1.png" alt="img">
                                    </div>
                                    <div class="media-body">
                                        <p>Address</p>
                                        <span>18, Udi Street, Osborne Foreshore, Ikoyi Lagos</span>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="media-body">
                                        <p>Phone</p>
                                        <span>(+234) 708 082 9417</span> <br>
                                        <span> (+234) 701 737 0898</span>
                                    </div>
                                </div>
                                <div class="media mb-0">
                                    <div class="media-left">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <div class="media-body">
                                        <p>Email</p>
                                        <span>info@primenest.ng</span>
                                    </div>
                                </div>
                            </div>

                             <div class="contact">
                                 <router-link class="btn btn-yellow" to="/contact"> Send Messages</router-link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row pd-top-90">
                <div class="col-lg-9">
                    <div class="property-info mb-5">
                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                                <div class="single-property-info">
                                    <h5>Bedrooms</h5>
                                    <p><i class="fa fa-bed"></i>{{ detail.keypoint.bedroom}}</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-property-info">
                                    <h5>Bathrooms</h5>
                                    <p><i class="fa fa-bath"></i>{{ detail.keypoint.bathroom }}</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-property-info">
                                    <h5>Area</h5>
                                    <p><img src="/assets/img/icons/7.png" alt="img">{{ detail.keypoint.area }} sqm.</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-property-info">
                                    <h5>Parking</h5>
                                    <p><i class="fa fa-car"></i>{{ detail.keypoint.parking}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="property-news-single-card style-two border-bottom-yellow" v-if="detail.base_floor.plan != ''">
                        <h4>Base Floor Plan</h4>
                        <p v-html="detail.base_floor.plan"> </p>
                        <!-- <a href="#">Read More</a> -->
                    </div>
                    <div class="property-news-single-card border-bottom-yellow" v-if="detail.base_floor.image != ''">
                        <div class="thumb">
                            <img :src="detail.base_floor.image" alt="img">
                        </div>
                    </div>
                    <div class="property-news-single-card border-bottom-yellow">
                        <h4>Amenities</h4>
                        <div class="row">
                            <div class="col-sm-12">
                                <ul class="rld-list-style mb-3 mb-sm-0" v-for="amenity in detail.amenities" :key="amenity">
                                    <li><i class="fa fa-check"></i> {{ amenity }}</li>
                                    
                                    
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="property-news-single-card border-bottom-yellow pb-3">
                        <h4>Facts and Features</h4>
                        <div class="row">
                             
                            

                            <div class="col-md-3 col-sm-6" v-if="detail.facts.living_room != ''">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <i class="fa fa-bed"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6>Living Room</h6>
                                        <p>{{ detail.facts.living_room }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6" v-if="detail.facts.garage != ''" >
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <i class="fa fa-car"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6>Garage</h6>
                                        <p> {{ detail.facts.garage }}</p>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="col-md-3 col-sm-6" v-if="detail.facts.bedroom != ''">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <i class="fa fa-bed"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6>Bedroom</h6>
                                        <p> {{ detail.facts.bedroom }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6" v-if="detail.facts.bathroom">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <i class="fa fa-bath"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6>Bathroom</h6>
                                        <p>{{ detail.facts.bathroom }}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <!-- property details area end -->

    




   

       
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
  name: "PropertyDetails",
  mixins: [database, seo, vuesax, pick],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb
  },
  data(){
      return {
          estate: this.$route.params.estate,
          name: this.$route.params.name,
          details: ''
          
      }
  },
  created(){

      let x = this;

      x.details = x.fetchEstateDetailsUsingCodeAndName(x.estate,x.name.replace(/-/g,' '));
      this.seoMetaData(x.name.replace(/-/g,' ') , '');
  }
};
</script>


<style>

.rld-list-style li {
    display: inline-block;
    width: 33%;
    float: left;
    margin-top: 10px;
    

}

@media screen and (max-width: 500px) {
    .rld-list-style li {
    display: inline-block;
    width: 100%;
    float: left;
    margin-top: 10px;

   }
}



</style>
