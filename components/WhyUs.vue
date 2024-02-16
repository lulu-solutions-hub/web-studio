<script lang="ts" setup>

</script>

<template>
  <section class="background position-relative">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex justify-center" cols="12">
          <v-container class="container-main" fluid>
            <h2 class="fz-48 subtitle text-white font-weight-medium lh-1 mb-11">Why us?</h2>
          </v-container>
        </v-col>
        <v-col cols="12">
          <v-container fluid>
            <v-row>
              <v-spacer/>
              <v-col cols="6" style="z-index: 2">
                <v-card class="card-bg" height="743"></v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-sheet location="right top" position="absolute" width="324">
        <v-img src="/svg/whyus/cat.svg" width="324"></v-img>
      </v-sheet>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
  .background {
    background-size: contain;
    height: 982px;
    width: 100%;
    background: url('../public/svg/whyus/why_us.svg') no-repeat top center;
  }

  .card-bg {
    backdrop-filter: blur(50px) !important;
    filter: drop-shadow(0px 1px 7.7px rgba(0, 0, 0, 0.10)) !important;
  }
</style>