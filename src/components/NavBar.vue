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
                    <a href="/"><img src="assets/img/logo.png" alt="logo"></a>
                </div>
                <div class="nav-right-part nav-right-part-mobile">
                    <a class="btn btn-yellow" href="/application">APPLICATION FORM <span class="right"><i class="la la-plus"></i></span></a>
                </div>
                <div class="collapse navbar-collapse" id="realdeal_main_menu">
                    <ul class="navbar-nav menu-open">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li class="menu-item-has-children">
                            <a href="#">Property</a>
                            <ul class="sub-menu">
                                <li><a href="property.html">Lilycourt Estate</a></li>
                                <li><a href="propertys-availavbe.html">Primenest Estate</a></li>
                               
                            </ul>
                        </li>
                        
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div class="nav-right-part nav-right-part-desktop">
                    <a class="btn btn-yellow" href="/application">APPLICATION FORM <span class="right"><i class="la la-plus"></i></span></a>
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


<style scoped>

</style>
