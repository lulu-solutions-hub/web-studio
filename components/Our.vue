<script lang="ts" setup>
  import { useDisplay } from "vuetify";

  const display = ref(useDisplay())

  const texts = reactive([
    { title: "Our team", subtitle: "We are ready to make the site even\nmore simple, convenient and logical", cols: "auto" },
    { title: "Our Mission", subtitle: "We energize websites through design\nthat inspires admiration and reliability.", cols: "auto" },
    { title: "Our Values", subtitle: "Team. Client. Innovations. Responsibility..", cols: 12 },
  ]);

</script>

<template>
  <v-container class="container-main" fluid>
    <v-row class="my-n7 my-md-n0 justify-space-between">
      <v-col v-for="(text, id) in texts" :key="id" :md="text.cols" cols="12" class="py-7 py-md-3">
        <v-card class="py-5 py-md-0 mx-auto" :class="{'neon-border' : display.smAndDown}" :variant="display.smAndDown ? 'outlined' : 'text'" :max-width="400">
          <v-card-item class="pa-0">
            <v-card-title class="text-center text-capitalize fz-40 font-weight-medium lh-140 text-gradient mb-4">{{ text.title }}</v-card-title>
            <v-card-subtitle class="text-center text-capitalize text-pre-wrap fz-20 lh-200 text-textGrey">{{ text.subtitle }}</v-card-subtitle>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .text-gradient {
    font-size: clamp(2.8rem, 1.5vw, 3rem);
    font-weight: bold;
    margin: 5px;
    background-image: linear-gradient(94deg, #6034BB -7.94%, #B89AF6 46.16%, #6D45C1 107.07%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 5s ease-in-out infinite alternate;
  }

  @keyframes textShine {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
</style>