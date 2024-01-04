<template>
    <div>
        <!-- Header Componnet -->
        <Header/>
    <!--================================
             START HERO AREA
    =================================-->
    <Slider/>
    <!--================================
            END HERO AREA
    =================================-->

    <!--======================================
            START FEATURE AREA
     ======================================-->
    <Feature/>
    <!--======================================
           END FEATURE AREA
    ======================================-->

    <!--======================================
            START CATEGORY AREA
    ======================================-->
    <Category/>
    <!--======================================
            END CATEGORY AREA
    ======================================-->

    <!--======================================
            START COURSE AREA
    ======================================-->
    <Course/>
    <!--======================================
            END COURSE AREA
    ======================================-->

    <!--======================================
            START COURSE AREA
    ======================================-->
    <Course2/>

    <!--======================================
            END COURSE 2 AREA
    ======================================-->

    <!-- ================================
           START FUNFACT AREA
    ================================= -->
    <Funfact/>

    <!-- ================================
           START FUNFACT AREA
    ================================= -->

    <!--======================================
            START CTA AREA
    ======================================-->
    <Cta/>

    <!--======================================
            END CTA AREA
    ======================================-->

    <!--================================
             START TESTIMONIAL AREA
    =================================-->
    <Testimonial/>

    <!--================================
            END TESTIMONIAL AREA
    =================================-->

    <div class="section-block"></div>

    <!--======================================
            START ABOUT AREA
    ======================================-->
    <About/>

    <!--======================================
            END ABOUT AREA
    ======================================-->

    <div class="section-block"></div>

    <!--======================================
            START REGISTER AREA
    ======================================-->
    <HomeRegistration/>

    <!--======================================
            END REGISTER AREA
    ======================================-->

    <div class="section-block"></div>

    <!-- ================================
           START CLIENT-LOGO AREA
    ================================= -->
    <Client/>

    <!-- ================================
           START CLIENT-LOGO AREA
    ================================= -->

    <!-- ================================
           START BLOG AREA
    ================================= -->
    <Blog/>

    <!-- ================================
           START BLOG AREA
    ================================= -->

    <!--======================================
            START GET STARTED AREA
    ======================================-->
    <Started/>

    <!-- ================================
           START GET STARTED AREA
    ================================= -->

    <!--======================================
            START SUBSCRIBER AREA
    ======================================-->
    <Subscriber/>

    <!--======================================
            END SUBSCRIBER AREA
    ======================================-->

    <!-- ================================
             END FOOTER AREA
    ================================= -->
    <Footer/>
    <!-- ================================
              END FOOTER AREA
    ================================= -->

    </div>

</template>


<script type="text/javascript">
import Header from './include/header.vue';
import Slider from './home/slider.vue';
import Feature from './home/feature.vue';
import Category from './home/category.vue';
import Course from './home/course.vue';
import Course2 from './home/course2.vue';
import Funfact from './home/funfact.vue';
import Cta from './home/cta.vue';
import Testimonial from './home/testimonial.vue';
import About from './home/about.vue';
import HomeRegistration from './home/home-registration.vue';
import Client from './home/client.vue';
import Blog from './home/blog.vue';
import Started from './home/started.vue';
import Subscriber from './home/subscriber.vue';
import Footer from './include/footer.vue';
 export default {
  name: 'Home',
  components: {
    Header, // Register the Header component
    Slider,
    Feature,
    Category,
    Course,
    Course2,
    Funfact,
    Cta,
    Testimonial,
    About,
    HomeRegistration,
    Client,
    Blog,
    Started,
    Subscriber,
    Footer
  },
  // other options...
}
</script>
<style scoped>

</style>

