<script lang="ts" setup>
  const texts = reactive([
    {
      main: "Complete creativity and individuality",
      secondary: "We creatively approach each task, because we do not like the same solutions and repetitions;"
    },
    {
      main: "Code-based development, not constructor",
      secondary: "Code-based development provides flexibility, individual approach, high productivity and full control, which guarantees an optimized and customized product for the client."
    },
    {
      main: "Full adaptability",
      secondary: "we fully adapt the pages to mobile and tablet versions."
    },
    {
      main: "Better SEO",
      secondary: "SEO increases brand visibility, attracts targeted traffic, reduces advertising costs, and contributes to the continuous improvement of marketing strategies."
    },
  ]);
</script>

<template>
  <section class="background position-relative">
    <v-container class="container-main" fluid>
      <v-row>
        <v-col cols="12">
          <h2 class="fz-48 subtitle text-white font-weight-medium lh-1 text-center">Why us?</h2>
        </v-col>
      </v-row>
    </v-container>
    <div class="card-bg mr-n2">
      <v-container class="container-main" fluid>
        <v-row>

          <!--LEFT-->
          <v-col>
            <v-row class="mb-6">
              <v-col v-for="(text, id) in texts" :key="id" cols="12">
                <v-avatar :size="15" class="mr-3">
                  <v-img src="/svg/whyus/dot.svg"></v-img>
                </v-avatar>
                <span class="text-white fz-18 font-weight-medium ls-normal">{{ text.main }} - </span>
                <span class="fz-18 text-textGrey lh-180 ls-normal">{{ text.secondary }}</span>
              </v-col>
            </v-row>

            <div>
              <p class="fz-18 text-textGrey">
                <span class="text-white fz-18 font-weight-medium ls-normal">Our team</span> consists of professionals who are responsible and passionate about their work. Trying as much as possible to do my work perfectly and qualitatively.
              </p>
            </div>
          </v-col>

          <!--RIGHT-->
          <v-col>
            <v-card class="bg-transparent" variant="text"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-sheet class="bg-transparent" location="top right" position="absolute" style="right: 123px">
      <v-img height="158" src="/svg/whyus/cat.svg" width="118"></v-img>
    </v-sheet>
    <v-sheet class="bg-transparent plants" location="top right" position="absolute" style="z-index: -1">
      <img src="/svg/whyus/plants.svg">
    </v-sheet>
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
    background-image: url('../public/svg/whyus/card.svg');
    background-repeat: no-repeat;
    background-size: 50% auto;
    background-position: top right;
  }

  .plants {
    transform: translateY(4px);
  }
</style>