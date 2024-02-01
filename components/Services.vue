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
  ])
</script>

<template>
  <section class="background">
    <v-container class="container-main" fluid>
      <v-row>
        <v-col class="d-flex justify-center" cols="12">
          <h2 class="fz-48 subtitle text-white font-weight-medium">Services</h2>
        </v-col>
        <v-col>
          <v-row>
            <v-col v-for="(service, id) in services" :key="id" cols="6">
              <v-card class="d-flex flex-column align-center bg-mainGray h-100" rounded="xl">
                <v-card-title class="pt-8 px-6 fz-28 font-weight-medium mb-9 pb-0">{{ service.title }}</v-card-title>
                <v-card-text class="fz-24 lh-140 text-center text-textGray px-6 pb-0" :style="`margin-bottom: 38px`">{{ service.text }}</v-card-text>
                <v-card-actions>
                  <div class="pt-6 pb-3 px-11 rounded-lg bg-mainBlack mb-n10" :style="`z-index: 1000000 !important`">
                    <span class="fz-48 lh-1">{{service.price}}</span>
                  </div>
                </v-card-actions>
              </v-card>
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
</style>