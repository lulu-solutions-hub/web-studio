<script lang="ts" setup>
  import { onMounted } from "vue";

  const enum RewardsFilters {
    HOME = 0,
    STAGES = 1,
    PRICE = 2,
    CONTACTS = 3
  }

  const { scrollToAnchor } = useAnchorScroll({
    toTop: {
      scrollOptions: {
        behavior: 'auto',
        offsetTop: 100,
      }
    },
  });

  const rewardFilters = reactive([
    { name: "Home", link: "#monitor" },
    { name: "Services", link: "#services" },
    { name: "Why us", link: "#why-us" },
    { name: "About us", link: "#about-us" },
  ]);

  const selectedFilter = ref();

  const route = useRoute()

  watchPostEffect(() =>{
    selectedFilter.value = rewardFilters.findIndex((filter) => filter.link == route.hash)
  })
</script>

<template>
  <section class="background">
    <v-container class="d-flex justify-center container-main px-0" fluid>
      <v-card :height="584" :max-width="1043" class="bg-mainGray w-100 pa-4 mt-12" rounded="lg">
        <v-responsive class="bg-white h-100 px-8 px-lg-16 pt-5">
          <v-row no-gutters>

            <v-col class="mb-8" cols="12">
              <v-row align="center">
                <v-col>
                  <span class="fz-24 font-weight-medium">LULU</span>
                </v-col>
                <v-col cols="6" md="5">
                  <v-item-group v-model="selectedFilter" mandatory>
                    <v-row class="justify-space-between" dense>
                      <v-col v-for="(filter, index) in rewardFilters" :key="index" class="flex-0-0 fz-20" cols="auto">
                        <v-item v-slot="{ isSelected, toggle }" :value="filter">
                          <nuxt-link :href="`${filter.link}`" :class="isSelected ? 'text-mainViolet' : 'text-black'" class="link cursor-pointer font-weight-medium fz-18" @click="scrollToAnchor(filter.link)">
                            <span @click="toggle">{{ filter.name }}</span>
                          </nuxt-link>
                        </v-item>
                      </v-col>
                    </v-row>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-col>

            <v-col class="d-flex flex-column align-center h-100" cols="12">
              <v-img :max-width="539" class="mb-8 w-100" src="/img/monitor-lulu.png"/>
              <span class="fz-32 mb-5">Studio</span>
              <span class="fz-18">Where Design Meets Function</span>
            </v-col>
          </v-row>
        </v-responsive>
      </v-card>
    </v-container>
  </section>
</template>

<style scoped>
  .background {
    background-size: contain;
    height: 982px;
    width: 100%;
    background: url('/img/monitor.png') no-repeat top center;
  }
</style>