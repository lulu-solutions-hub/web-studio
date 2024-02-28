<script lang="ts" setup>
  const { scrollToAnchor } = useAnchorScroll();

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
  })
</script>

<template>
  <header>
    <div class="wrapper">
      <section class="background">
        <v-container class="d-flex justify-center container-main px-0" fluid>
          <v-card :height="584" :max-width="1043" class="bg-mainGray w-100 pa-4 mt-12" rounded="lg">
            <v-responsive class="bg-white h-100 px-8 px-lg-16 pt-5">
              <v-row no-gutters>

                <!--HEADER-->
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
                <v-col class="d-flex flex-column align-center h-100" cols="12">
                  <v-img :max-width="539" class="mb-8 w-100" src="/img/monitor-lulu.png" alt="Lulu web studio logo"/>
                  <span class="fz-32 mb-5">Studio</span>
                  <span class="fz-18">Where Design Meets Function</span>
                </v-col>
              </v-row>
            </v-responsive>
          </v-card>
        </v-container>
      </section>
    </div>
  </header>
</template>

<style scoped>
  .background {
    background-size: contain;
    padding-bottom: 250px;
  //height: 990px; width: 100%; background: url('/img/monitor.png') no-repeat top center;
  }

  .wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
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