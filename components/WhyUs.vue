<script lang="ts" setup>

</script>

<template>
  <section class="background position-relative">
    <v-row>
      <v-col cols="12">
        <v-col class="d-flex justify-center" cols="12">
          <h2 class="fz-48 subtitle text-white font-weight-medium lh-1 mb-11">Services</h2>
        </v-col>
        <v-col cols="12">
          <div class="card-bg" style="z-index: 1000;">
            <v-container class="container-main" fluid>
              <v-row no-gutters>

                <v-col cols="12">

                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-col>
      <v-sheet location="right top" position="absolute" width="324" style="z-index: -1">
        <v-img src="/svg/whyus/cat.svg" width="324"></v-img>
      </v-sheet>
    </v-row>
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
    height: 100%;
    background-image: url('http://i.imgur.com/9HMnxKs.png');
    background-repeat: repeat-y;
    background-size: 50% auto;
    background-position: right;
  }
</style>