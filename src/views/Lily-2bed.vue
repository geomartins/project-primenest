<template>
  <div>
    
   <app-master>

     <app-breadcrumb>
         <div class="breadcrumb-inner">
            <h1 class="page-title">Properties</h1>
            <ul class="page-list">
                <router-link to="/" tag="a"> Home </router-link>
                <!-- <li><a href="index.html">Home</a></li> -->
                <li>Properties by Estate</li>
            </ul>
        </div>
     </app-breadcrumb>




      <!-- property-details-area start -->
    <div class="property-details-area">
        <div class="bg-gray pd-top-100 pd-bottom-90">
            <div class="container">
                <div class="row ">
                    <div class="col-xl-9 col-lg-8">
                        <div class="property-details-slider">
                            <div class="item">
                                <div class="thumb">
                                    <img src="/img/lil2.png" alt="img">
                                </div>
                            </div>
                          
                        </div>
                        <div class="property-details-slider-info">
                            <h3><span>#12.8m/unit</span> LilyCourt Estate Lagos</h3>
                            <!-- <del>$500</del> -->
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4">
                        <div class="widget widget-owner-info mt-lg-0 mt-5">
                            
                            <div class="contact">
                                <h6>Contact Us</h6>
                                <div class="rld-single-input">
                                    <input type="text" placeholder="Full Name">
                                </div>
                                <div class="rld-single-input">
                                    <input type="text" placeholder="Email">
                                </div>
                                <div class="rld-single-input">
                                    <input type="text" placeholder="Messages">
                                </div>
                                <a class="btn btn-yellow" href="#">Send Messages</a>
                            </div>
                            <div class="contact-info">
                                <h6 class="mb-3">Contact Info</h6>
                                <div class="media">
                                    <div class="media-left">
                                        <img src="assets/img/icons/1.png" alt="img">
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
                                    <p><i class="fa fa-bed"></i>02</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-property-info">
                                    <h5>Bathrooms</h5>
                                    <p><i class="fa fa-bath"></i>02</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-property-info">
                                    <h5>Area</h5>
                                    <p><img src="assets/img/icons/7.png" alt="img">300 sqm.</p>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-property-info">
                                    <h5>Parking</h5>
                                    <p><i class="fa fa-car"></i>02 Outdoor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="property-news-single-card style-two border-bottom-yellow">
                        <h4>Base Floor Plan</h4>
                        <p>Lily Court is positioned in a laid-back environment in Ifako-Ijaiye, a fast-developing Lagos suburb. An ultra-modern community which boasts elite amenities and optimum security, its location makes it ideal for young families and the business class.</p>
                        <p>  Lily Court houses 36 units of 2-bedroom apartments with a base floor of 300 sqm. Both rooms are en-suite. The living room combines the lounge and dining area, and the amply-spaced kitchen allows you to define your style. The terraces are excellent for taking in refreshing air and overlooking the scenic landscape.</p>
                        <!-- <a href="#">Read More</a> -->
                    </div>
                    <div class="property-news-single-card style-two border-bottom-yellow">
                        <h4>Base Floor Plan</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5621.1629504770535!2d-122.43633647504856!3d37.748515859182696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1578304196576!5m2!1sen!2sbd" style="border:0;" allowfullscreen=""></iframe>
                    </div>
                    <div class="property-news-single-card border-bottom-yellow">
                        <h4>Amenities</h4>
                        <div class="row">
                            <div class="col-sm-4">
                                <ul class="rld-list-style mb-3 mb-sm-0">
                                    <li><i class="fa fa-check"></i> 24hrs security personnel</li>
                                    <li><i class="fa fa-check"></i> Children layground</li>
                                    <li><i class="fa fa-check"></i> Well drainage system</li>
                                    <!-- <li><i class="fa fa-check"></i> Basketball Cout</li>
                                    <li><i class="fa fa-check"></i> Sprinklers</li> -->
                                </ul>
                            </div>
                            <div class="col-sm-4">
                                <ul class="rld-list-style mb-3 mb-sm-0">
                                    <li><i class="fa fa-check"></i>24hrs uninteruppted power supply</li>
                                    <li><i class="fa fa-check"></i> Ample parking space</li>
                                    <!-- <li><i class="fa fa-check"></i> Wine Cellar</li>
                                    <li><i class="fa fa-check"></i> Basketball Cout</li>
                                    <li><i class="fa fa-check"></i> Fireplace</li> -->
                                </ul>
                            </div>
                            <div class="col-sm-4">
                                <ul class="rld-list-style mb-3 mb-sm-0">
                                    <li><i class="fa fa-check"></i> CCTV camera</li>
                                    <li><i class="fa fa-check"></i> Adequate water supply</li>
                                    <!-- <li><i class="fa fa-check"></i> Deck</li>
                                    <li><i class="fa fa-check"></i> 24x7 Security</li>
                                    <li><i class="fa fa-check"></i> Indoor Game</li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="property-news-single-card border-bottom-yellow">
                        <h4>Floor Plan</h4>
                        <div class="thumb">
                            <img src="assets/img/others/10.png" alt="img">
                        </div>
                    </div>
                    <div class="property-news-single-card border-bottom-yellow pb-3">
                        <h4>Facts and Features</h4>
                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <i class="fa fa-bed"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6>Living Room</h6>
                                        <p>20 x 16 sq feet</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <i class="fa fa-car"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6>Garage</h6>
                                        <p>20 x 16 sq feet</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-md-3 col-sm-6">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <img src="assets/img/icons/7.png" alt="img">
                                    </div>
                                    <div class="media-body">
                                        <h6>Dining Area</h6>
                                        <p>20 x 16 sq feet</p>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="col-md-3 col-sm-6">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <img src="assets/img/icons/7.png" alt="img">
                                    </div>
                                    <div class="media-body">
                                        <h6>Dining Area</h6>
                                        <p>20 x 16 sq feet</p>
                                    </div>
                                </div>
                            </div> -->
                            <div class="col-md-3 col-sm-6">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <i class="fa fa-bed"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6>Bedroom</h6>
                                        <p>20 x 16 sq feet</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <i class="fa fa-bath"></i>
                                    </div>
                                    <div class="media-body">
                                        <h6>Bathroom</h6>
                                        <p>20 x 16 sq feet</p>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-md-3 col-sm-6">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <img src="assets/img/icons/17.png" alt="img">
                                    </div>
                                    <div class="media-body">
                                        <h6>Gym Area</h6>
                                        <p>20 x 16 sq feet</p>
                                    </div>
                                </div>
                            </div> -->
                            <!-- <div class="col-md-3 col-sm-6">
                                <div class="single-floor-list media">
                                    <div class="media-left">
                                        <img src="assets/img/icons/17.png" alt="img">
                                    </div>
                                    <div class="media-body">
                                        <h6>Gym Area</h6>
                                        <p>20 x 16 sq feet</p>
                                    </div>
                                </div>
                            </div> -->
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

export default {
  name: "LilyCourtEstate2",
  components: {
    "app-master" : Master,
    "app-breadcrumb" : BreadCrumb
  }
};
</script>


<style>



</style>
