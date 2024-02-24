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
    <!--WHY US-->
    <v-container class="container-main" fluid>
      <v-row>
        <v-col cols="12">
          <h2 class="fz-48 subtitle text-white font-weight-medium lh-1 text-center">Why us?</h2>
        </v-col>
      </v-row>
    </v-container>

    <!--COLUMNS-->
    <v-container fluid>
      <v-row>

        <!--LEFT-->
        <v-col cols="6">
          <v-card class="container-50 bg-transparent" style="margin: 0 0 0 auto;" variant="text">
            <v-container>
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
            </v-container>
          </v-card>
        </v-col>

        <!--RIGHT-->
        <v-col cols="6">
          <v-card variant="text" class="rounded-xl pl">
            <v-img src="/svg/whyus/card.svg" cover max-height="613" class="">
              <v-container class="container-50 pl-12 pt-16" style="margin: auto 0 0 0; padding-bottom: 73px">
                <h4 class="text-white fz-32 font-weight-regular ls-normal">Discuss the project</h4>
                <v-text-field label="Name*" variant="underlined" class="text-textGrey mb-6" base-color="white"></v-text-field>
                <v-text-field label="Number*" variant="underlined" class="text-textGrey mb-6" base-color="white"></v-text-field>
                <v-text-field label="Tell us about your idea" variant="underlined" class="text-textGrey" base-color="white"></v-text-field>
                <v-checkbox class="ml-n2" density="compact" color="red">
                  <template v-slot:label>
                    <span class="text-textGrey ml-3">I consent to the processing of personal data</span>
                  </template>
                </v-checkbox>
              </v-container>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

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
    background: no-repeat/cover url('../public/svg/whyus/card.svg') !important;
  }

  .plants {
    transform: translateY(4px);
  }

  .container-50 {
    max-width: 521px;
  }
</style>