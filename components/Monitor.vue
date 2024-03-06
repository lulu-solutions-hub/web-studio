<script lang="ts" setup>
  import { useDisplay } from "vuetify";

  const { scrollToAnchor } = useAnchorScroll();

  const display = ref(useDisplay());

  const rewardFilters = reactive([
    { name: "Home", link: "#monitor" },
    { name: "Services", link: "#services" },
    { name: "Why us", link: "#why-us" },
    { name: "About us", link: "#about-us" },
  ]);

  const selectedFilter = ref();

  const route = useRoute();

  watchPostEffect(() => {
    const link = rewardFilters.findIndex((filter) => filter.link == route.hash);
    if (link != -1) {
      selectedFilter.value = link;
    } else {
      selectedFilter.value = 0;
    }
  });

  useHead({
    link: [{ rel: 'canonical', href: '' }],
    title: "About Us - LULU Web Studio",
    meta: [
      {
        name: 'description',
        content: 'Learn about LULU Web Studio, a team of specialists dedicated to creating unique websites using advanced technologies. We aim to maximize the success of our clients’ businesses.'
      },
      {
        name: 'keywords',
        content: 'LULU Web Studio, web design, specialist team, advanced technologies, business development, website creation'
      }
    ]
  });

  const w = ref(0);
  const h = ref(0);
  const mt = ref(0);
  const mb = ref(0);

  watchEffect(() => {
    if (display.value.height * 1.30 < display.value.width) {
      w.value = display.value.height * 1.08;
      h.value = display.value.height / 1.60;
      mt.value = display.value.height / 16;
    } else {
      w.value = display.value.width / 1.45;
      h.value = display.value.width / 2.5;
      mt.value = display.value.width / 2;
    }
  });
</script>

<template>
  <header>
    <section class="background d-flex justify-center" :class="(display.height * 1.30 < display.width) ? '' : 'align-end'">
      <v-card :height="h" :style="`margin-top: ${mt}px; margin-bottom:21%`" :width="w" rounded="lg" variant="outlined">
        <v-container class="d-flex justify-center pa-0 w-100 h-100" fluid>
          <!--<p class="text-white">{{ display.width }}</p>-->
          <v-card class="bg-mainGray h-100 w-100 pa-4" rounded="lg">
            <v-responsive class="bg-white h-100 px-8 px-lg-16 pt-5">
              <v-row no-gutters>

                <!--HEADER-->
                <v-col class="mb-8" cols="12">
                  <v-row align="center" justify="space-between">
                    <v-col cols="auto">
                      <span class="fz-24 font-weight-medium">LULU</span>
                    </v-col>
                    <v-col cols="8" md="6">
                      <v-item-group v-model="selectedFilter" mandatory>
                        <v-row class="justify-space-between" dense>
                          <v-col v-for="(filter, index) in rewardFilters" :key="index" class="flex-0-0 fz-20" cols="auto">
                            <v-item v-slot="{ isSelected, toggle }" :value="filter">
                              <nuxt-link :class="isSelected ? 'text-mainViolet' : 'text-black custom-link'" :href="`${filter.link}`" class="link cursor-pointer font-weight-medium fz-18" @click="scrollToAnchor(filter.link)">
                                <span @click="toggle">{{ filter.name }}</span>
                              </nuxt-link>
                            </v-item>
                          </v-col>
                        </v-row>
                      </v-item-group>
                    </v-col>
                  </v-row>
                </v-col>

                <!--IMAGE-->
                <v-col class="d-flex flex-column align-center h-100 w-100" cols="12">
                  <v-img max-width="50%" alt="Lulu web studio logo" class="mb-8 w-100" src="/img/monitor-lulu.png"/>
                  <span class="fz-32 mb-5">Studio</span>
                  <span class="fz-18">Where Design Meets Function</span>
                </v-col>
              </v-row>
            </v-responsive>
          </v-card>
        </v-container>
      </v-card>
    </section>
  </header>
</template>

<style scoped>
  .background {
    background-size: contain;
    height: 100vh;
    width: 100%;
    background-image: url('/img/monitor.png');
    background-position: bottom;
    background-repeat: no-repeat;
  }

  .custom-link {
    border-bottom: 2px solid white;
    transition: 0.3s ease;

    &:hover {
      padding: 0 0 2px 0;
      border-color: black;
    }
  }
</style>