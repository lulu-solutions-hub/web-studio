<script lang="ts" setup>

</script>

<template>
  <section class="background">
    <v-container class="d-flex justify-center container-main px-0" fluid>
      <v-card :height="584" :max-width="1043" class="bg-white w-100 pa-4 monitor-border mt-12" rounded="lg">
        <v-responsive class="bg-white h-100 px-16 pt-5">
          <v-row no-gutters>

            <v-col cols="12" class="mb-8">
              <v-row align="center" >
                <v-col>
                  <span class="fz-24 font-weight-medium">LULU</span>
                </v-col>
                <v-col class="d-flex justify-space-between" cols="7" md="5">
                  <v-btn class="fz-18 font-weight-medium text-capitalize px-0 ls-normal" variant="text">Home</v-btn>
                  <v-btn class="fz-18 font-weight-medium text-capitalize px-0 ls-normal" variant="text">Stages</v-btn>
                  <v-btn class="fz-18 font-weight-medium text-capitalize px-0 ls-normal" variant="text">Price</v-btn>
                  <v-btn class="fz-18 font-weight-medium text-capitalize px-0 ls-normal" variant="text">Contacts</v-btn>
                </v-col>
              </v-row>
            </v-col>
            
            <v-col class="d-flex flex-column align-center h-100" cols="12">
              <v-img src="/public/img/monitor-lulu.png" :max-width="539" class="mb-8 w-100"/>
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
    background: #1A1A1A url('../public/img/monitor.png') no-repeat top center;
  }
  
  .monitor-border {
    background-color: #373738 !important;
  }
</style>