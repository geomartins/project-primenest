<template>
   <!-- navbar start -->
    <div class="navbar-area">
        <nav class="navbar navbar-area navbar-expand-lg">
            <div class="container nav-container">
                <div class="responsive-mobile-menu">
                    <button class="menu toggle-btn d-block d-lg-none" data-toggle="collapse" data-target="#realdeal_main_menu" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-left"></span>
                        <span class="icon-right"></span>
                    </button>
                </div>
                <div class="logo">
                    <a href="/"><img src="/img/logo.png" alt="logo"></a>
                </div>
                <div class="nav-right-part nav-right-part-mobile">
                    <router-link class="btn btn-yellow" to='/application'>APPLICATION FORM <span class="right"><i class="la la-plus"></i></span></router-link>
                </div>
                <div class="collapse navbar-collapse" id="realdeal_main_menu">
                    <ul class="navbar-nav menu-open">
                        <li> <router-link to="/" tag="a"> Home </router-link> </li>
                        <li>  <router-link to="/about" tag="a"> About Us </router-link> </li>
                        <li> <router-link to="/property" tag="a"> Properties </router-link> </li>
                        <li>  <router-link to="/faq" tag="a"> FAQ </router-link> </li>
                        <li>  <router-link to="/contact" tag="a"> Contact Us </router-link> </li>
                    </ul>
                </div>
                <div class="nav-right-part nav-right-part-desktop">
                    <router-link class="btn btn-yellow" to='/application'>APPLICATION FORM <span class="right"><i class="la la-plus"></i></span></router-link>
                   
                </div>
            </div>
        </nav>
    </div>
    <!-- navbar end -->

  
</template>

<script>
export default {
  name: "NavBar",
  
};
</script>


<style >

.collapse{display:none!important}
.collapse.show {
    display: block!important;
}

</style>
