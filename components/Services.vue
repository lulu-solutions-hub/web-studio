<script lang="ts" setup>
  import { reactive } from "vue";

  const services = reactive([
    {
      title: "Landing Page (site business card)",
      text: "A landing page is a special one-page site for quick persuasion and calling a specific action from the visitor: buy, order or leave a contact.",
      price: 400,
    },
    {
      title: "Small shop 1-10 products",
      text: "A small online store will be convenient and comfortable for a small business. Contains several pages.",
      price: 700,
    },
    {
      title: "Internet-shop",
      text: "A well-thought-out and well-organized website for the sale of goods in the network with properly created order management mechanisms",
      price: 1000,
    },
    {
      title: "Systems for business",
      text: "A platform for effective business management with simple navigation and a convenient interface.",
      price: 1200,
    },
  ]);
</script>

<template>
  <section>
    <v-container class="container-main" fluid>
      <v-row no-gutters>
        <v-col class="d-flex justify-center" cols="12">
          <h2 class="fz-48 subtitle text-white font-weight-medium lh-1 mb-11">Services</h2>
        </v-col>
        <v-col>
          <v-row class="my-n5 mx-n2">
            <v-col v-for="(service, id) in services" :key="id" class="px-2 py-5" cols="12" md="6">
              <v-sheet class="d-flex flex-column h-100 bg-transparent align-center mx-auto" max-width="507">
                <v-card class="d-flex flex-column align-center overflow-visible flex-grow-1 service-card" rounded="xl">
                  <v-card-title class="pt-8 px-6 fz-28 font-weight-medium mb-9 pb-0 text-white">{{ service.title }}</v-card-title>
                  <v-card-text :style="`margin-bottom: 80px`" class="fz-24 lh-140 text-center text-textGrey px-6 pb-0">{{ service.text }}</v-card-text>
                </v-card>
                <v-card :width="200" class="d-flex justify-center align-center mt-n10 pt-5 pb-3 px-4 bg-mainBlack custom-neon-border" height="76" style="position: relative" variant="outlined">
                  <span class="fz-48 font-weight-thin">+{{ service.price }}</span>
                </v-card>
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
    height: 1020px;
    width: 100%;
    background: url('../public/svg/services_background.svg') no-repeat top center;
  }

  .service-card {
    background: rgba(243, 243, 243, 0.07);
    box-shadow: 0px 1px 7.7px 0px rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(50px);
  }

  .custom-neon-border {
    box-shadow: 0 0 2px #fff,
    0 0 7px #fff,
    0 0 7px #6D30E9,
    0 0 7px #6D30E9,
    0 0 7px #6D30E9,
    inset 0 0 10px #6D30E9;

    &:hover {
      box-shadow: 0 0 2px #fff,
      0 0 17px #fff,
      0 0 17px #6D30E9,
      0 0 17px #6D30E9,
      0 0 17px #6D30E9,
      inset 0 0 10px #6D30E9;
    }
  }
</style>