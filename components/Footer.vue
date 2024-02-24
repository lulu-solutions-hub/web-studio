<script lang="ts" setup>

  import { useDisplay } from "vuetify";

  const { mobile } = useDisplay();

  const footerItems = [
    {
      name: "Contacts",
      lists: [
        { name: "Ukraine" },
        { name: "+38 (063) 818-79-69" },
        { name: "luLuwebstudio@gmail.com", },
      ],
    },
    {
      name: "Social networks",
      lists: [
        { name: "Instagram", link: "https://www.google.com.ua/?hl=uk", blank: true },
        { name: "Facebook", link: "https://www.google.com.ua/?hl=uk", blank: true },
        { name: "Linkedin", link: "https://www.google.com.ua/?hl=uk", blank: true },
      ]
    },
    {
      name: "Home",
      lists: [
        { name: "Services", link: "#services" },
        { name: "Why us", link: "#why-us" },
        { name: "About us", link: "#about-us" },
      ]
    },
  ];

  const { scrollToAnchor, scrollToTop } = useAnchorScroll({
    toTop: {
      scrollOptions: {
        behavior: 'auto',
        offsetTop: 100,
      }
    },
  });

  const footerPanels = ref([]);
</script>

<template>
  <footer>
    <v-container :fluid="mobile" class="container-main px-4 px-lg-0 pt-12 pb-8">
      <v-row no-gutters>
        <v-col class="mb-4" cols="12">

          <!--DESKTOP-->
          <div class="hidden-sm-and-down">
            <v-row class="align-center" no-gutters>

              <!--LEFT COLUMN-->
              <v-col cols="auto" style="margin-right: 100px">
                <v-img height="150" src="/svg/footer/cat.svg" width="165"></v-img>
              </v-col>

              <!--RIGHT COLUMN-->
              <v-col>
                <v-row justify="space-between">
                  <v-col v-for="(item, id) in footerItems" :key="id" cols="auto">
                    <h4 class="fz-28 font-weight-regular lh-200 text-capitalize text-white">{{ item.name }}</h4>
                    <v-list class="bg-transparent py-0" density="comfortable">
                      <v-list-item v-for="(route, routeId) in item.lists" :key="routeId" class="pa-0 fz-14 font-weight-regular route">
                        <div class="d-inline-block">
                          <nuxt-link v-if="route?.link" :href="`${route?.link}`" :target="route?.blank ? '_blank' : ''" class="link text-textGrey text-break fz-20 lh-200 text-capitalize" @click="scrollToAnchor(`${item?.link}`)">
                            {{ route.name }}
                          </nuxt-link>
                          <span v-else class="text-textGrey text-break fz-20 lh-200 text-capitalize">
                            {{ route.name }}
                          </span>
                        </div>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>

          <!--MOBILE-->
          <div class="hidden-md-and-up">
            <v-row dense>
              <v-col cols="12">
                <v-expansion-panels v-model="footerPanels" :multiple="true" class="mb-5">
                  <v-expansion-panel v-for="(item, index) in footerItems" :key="index" :value="index" elevation="0">
                    <v-expansion-panel-title class="fz-18 px-2" collapse-icon="mdi-minus" expand-icon="mdi-plus">
                      {{ item.name }}
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-row dense>
                        <template v-for="route in item.lists" :key="route.name">
                          <v-col cols="12">
                            <div class="d-inline-block">
                              <nuxt-link v-if="route?.link" :href="`${route?.link}`" :target="route?.blank ? '_blank' : ''" class="link text-textGrey text-break fz-20 lh-200 text-capitalize" @click="scrollToAnchor(`${item?.link}`)">
                                {{ route.name }}
                              </nuxt-link>
                              <span v-else class="text-textGrey text-break fz-20 lh-200 text-capitalize">
                                {{ route.name }}
                              </span>
                            </div>
                          </v-col>
                        </template>
                      </v-row>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </div>

        </v-col>
        <v-col class="d-flex justify-center" cols="12">
          <span class="fz-12 copyright text-center">All Rights Reserved</span>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style lang="scss" scoped>
  .container {
    max-width: 966px;
    margin: 0 auto;
  }

  .v-expansion-panel {
    background-color: transparent;
    color: white;

    &:not(:first-child)::after {
      border-top-style: hidden;
    }
  }

  .subtitle {
    color: rgba(255, 255, 255, 0.80);
  }

  .route {
    opacity: 0.8;
  }

  .v-list-item--density-compact.v-list-item--one-line {
    min-height: 0;
  }

  .copyright {
    color: rgba(255, 255, 255, 0.70);
  }

  .disabled-link {
    opacity: 0.3 !important;
    cursor: default !important;
  }
</style>