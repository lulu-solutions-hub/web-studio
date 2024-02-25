<script lang="ts" setup>
  import AboutUs from "~/components/AboutUs.vue";
  import Footer from "~/components/Footer.vue";
</script>

<template>
  <div>
    <Monitor id="monitor" style="margin-bottom: 136px" class="spacer"/>
    <Services id="services" style="margin-bottom: 100px" class="spacer"/>
    <WhyUs id="why-us" style="margin-bottom: 100px" class="spacer"/>
    <AboutUs id="about-us" style="margin-bottom: 100px" class="spacer"/>
    <Our class="our"/>
    <Footer/>
  </div>
</template>

<style scoped>
  .spacer {
    @media(max-width: 600px) {
      margin-bottom: 30px !important;
    }
  }
</style>