<script lang="ts" setup>
  import AboutUs from "~/components/AboutUs.vue";
  import Footer from "~/components/Footer.vue";

  useHead({
    title: "LULU Web Studio",
    meta: [
      {
        name: 'description',
        content: 'Learn about LULU Web Studio, a team of specialists dedicated to creating unique websites using advanced technologies. We aim to maximize the success of our clients’ businesses.'
      },
      {
        name: 'keywords',
        content: 'LULU Web Studio, web design, specialist team, advanced technologies, business development, Internet advertising, website creation'
      },
      {
        name: "google-site-verification",
        content: "Rwkp0cpo7uQ4uim7VwevGQlh7zqG8ZkYndj0rb7CKRc"
      },
    ]
  })
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