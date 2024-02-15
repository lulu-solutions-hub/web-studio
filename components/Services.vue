<script lang="ts" setup>
  import { reactive } from "vue";

  const services = reactive([
    {
      title: "Landing Page (site business card)",
      text: "A landing page is a special one-page site for quick persuasion and calling a specific action from the visitor: buy, order or leave a contact.",
      src: '/svg/services/400.svg',
    },
    {
      title: "Small shop 1-10 products",
      text: "A small online store will be convenient and comfortable for a small business. Contains several pages.",
      src: '/svg/services/700.svg',
    },
    {
      title: "Internet-shop",
      text: "A well-thought-out and well-organized website for the sale of goods in the network with properly created order management mechanisms",
      src: '/svg/services/1000.svg',
    },
    {
      title: "Systems for business",
      text: "A platform for effective business management with simple navigation and a convenient interface.",
      src: '/svg/services/1200.svg',
    },
  ]);
</script>

<template>
  <section class="background">
    <v-container class="container-main" fluid>
      <v-row no-gutters>
        <v-col class="d-flex justify-center" cols="12">
          <h2 class="fz-48 subtitle text-white font-weight-medium lh-1 mb-11">Services</h2>
        </v-col>
        <v-col>
          <v-row class="my-n5 mx-n2">
            <v-col v-for="(service, id) in services" :key="id" cols="12" md="6" class="px-2 py-5">
              <v-sheet class="d-flex flex-column h-100 bg-transparent align-center mx-auto" max-width="507">
                <v-card class="d-flex flex-column align-center overflow-visible flex-grow-1 service-card" rounded="xl">
                  <v-card-title class="pt-8 px-6 fz-28 font-weight-medium mb-9 pb-0 text-white">{{ service.title }}</v-card-title>
                  <v-card-text :style="`margin-bottom: 80px`" class="fz-24 lh-140 text-center text-textGray px-6 pb-0">{{ service.text }}</v-card-text>
                </v-card>
                <v-img :height="76" :width="200" class="mt-n10 flex-grow-0" :src="service.src" style="position: relative"></v-img>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
  .background {
    background-size: contain;
    height: 982px;
    width: 100%;
    background: url('../public/svg/services_background.svg') no-repeat top center;
  }

  .service-card {
    background: rgba(243, 243, 243, 0.07);
    box-shadow: 0px 1px 7.7px 0px rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(50px);
  }
</style>