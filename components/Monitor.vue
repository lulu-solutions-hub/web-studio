<script lang="ts" setup>
  const enum RewardsFilters {
    HOME = 0,
    STAGES = 1,
    PRICE = 2,
    CONTACTS = 3
  }
  
  const rewardFilters = ["Home", "Stages", "Price", "Contacts"]
  const selectedFilter = ref(RewardsFilters.HOME)
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
                          <span :class="isSelected ? 'text-mainViolet' : ''" class="cursor-pointer font-weight-medium fz-18" @click="toggle">{{ filter }}</span>
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