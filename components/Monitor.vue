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
    if (display.value.height * 1.60 < display.value.width) {
      w.value = display.value.height * 1.08;
      h.value = display.value.height / 1.59;
      mt.value = 64;
    } else {
      w.value = display.value.width / 1.45;
      h.value = display.value.width / 2.5;
      mt.value = display.value.width / 2;
    }
  });
</script>

<template>
  <header>
    <!--PC-->
    <section v-if="!display.smAndDown" :class="(display.height * 1.60 < display.width) ? '' : 'align-end'" class="background d-flex justify-center">
      <v-card :height="h" :width="w" class="mt-9 mt-xl-12" rounded="lg" style="margin-bottom:21%" variant="outlined">
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
                  <v-img alt="Lulu web studio logo" class="mb-8 w-100" max-width="50%" src="/img/monitor-lulu.png"/>
                  <span class="fz-32 mb-5">Studio</span>
                  <span class="fz-18">Where Design Meets Function</span>
                </v-col>
              </v-row>
            </v-responsive>
          </v-card>
        </v-container>
      </v-card>
    </section>

    <!--MOBILE-->
    <section v-else style="height: 100vh">
      <v-container class="h-100 pa-0">
        <v-card class="h-100 rounded-0">
          <v-row class="h-100" no-gutters>
            <v-col class="d-flex flex-column" cols="12">
              <v-card variant="text" class="d-flex flex-column h-100">
                <v-card-title class="d-flex justify-space-between align-center">
                  <v-img class="flex-grow-0" height="65" src="/svg/footer/cat.svg" width="65"></v-img>
                  <v-menu class="flex-0-0" open-on-click>
                    <template v-slot:activator="{ props }">
                      <div id="menuToggle" class="flex-0-0" v-bind="props">
                        <input type="checkbox"/>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </template>

                    <v-list class="pa-3" variant="elevated" width="150">
                      <v-item-group v-model="selectedFilter" mandatory>
                        <v-list-item-title v-for="(filter, index) in rewardFilters" :key="index" class="py-3 text-center">
                          <v-item v-slot="{ isSelected, toggle }" :value="filter">
                            <nuxt-link :class="isSelected ? 'text-mainViolet' : 'text-black custom-link'" :href="`${filter.link}`" class="link cursor-pointer font-weight-medium fz-18" @click="scrollToAnchor(filter.link)">
                              <span @click="toggle">{{ filter.name }}</span>
                            </nuxt-link>
                          </v-item>
                        </v-list-item-title>
                      </v-item-group>
                    </v-list>
                  </v-menu>
                </v-card-title>

                <v-card-text class="d-flex justify-center flex-column align-center" >
                  <v-img alt="Lulu web studio logo" class="w-100 flex-0-0" max-width="500"  src="/img/monitor-lulu.png"/>
                  <span class="fz-32 mb-5">Studio</span>
                  <span class="fz-18">Where Design Meets Function</span>
                </v-card-text>

                <v-img class="justify-end flex-0-0 align-self-center" src="/img/mobile-monitor-bg.png" max-width="600" width="100%"></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
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

  #menuToggle {
    display: block;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: black;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
    opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0 0;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0 100%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
  }


  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
</style>