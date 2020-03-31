<template>
   <!-- footer area start -->
    <footer class="footer-area">
        <div class="container">
            <div class="footer-top">
                <div class="row">
                    <div class="col-sm-4">
                        <a class="footer-logo" href="#"><img src="/img/logo.png" alt="logo"></a>
                    </div>
                    <div class="col-sm-8">
                        <div class="footer-social text-sm-right">
                            <span>FOLLOW US</span>
                            <ul class="social-icon">
                                <li>
                                    <a href="https://www.facebook.com/codingeek.net/" target="_blank"><i class="fa fa-facebook  "></i></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/codingeeknet" target="_blank"><i class="fa fa-twitter  "></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/codingeek/about/" target="_blank"><i class="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="widget widget_nav_menu">
                            <h4 class="widget-title">About Us</h4>
                            <p>At Prime Nest we work to give every Nigerian a realistic opportunity to own a home of their dreams.  </p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="widget widget_nav_menu">
                            <h4 class="widget-title">Quick Links</h4>
                            <ul>
                        <li>  <router-link to="/about" tag="a"> About Us </router-link> </li>
                        <li> <router-link to="/property" tag="a"> Properties </router-link> </li>
                        <li>  <router-link to="/faq" tag="a"> FAQ </router-link> </li>
                        <li>  <router-link to="/contact" tag="a"> Contact Us </router-link> </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="widget widget_nav_menu">
                            <h4 class="widget-title">Featured Links</h4>
                            <ul>
                        <li>  <router-link to="#" tag="a"> Blog </router-link> </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <form class="widget widget-subscribe">
                            <div class="rld-single-input">
                                <input type="text" placeholder="Full Name">
                            </div>
                            <div class="rld-single-input">
                                <input type="text" placeholder="Your@email.com">
                            </div>
                            <button class="btn btn-yellow w-100">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="copy-right text-center">
                Copyright© 2020  <a href="/" target="_blank"> Prime Nest Solutions,</a> All rights reserved
                
            </div>
        </div>
    </footer>
    <!-- footer area end -->
  
</template>

<script>
export default {
  name: "Footer",
  
};
</script>


<style>

</style>





 
    