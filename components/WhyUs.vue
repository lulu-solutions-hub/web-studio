<script lang="ts" setup>
  import { useDisplay } from "vuetify";

  const display = ref(useDisplay());
  const { xs } = useDisplay();
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
  <section class="position-relative">
    <!--WHY US-->
    <v-container class="container-main pb-6" fluid>
      <v-row>
        <v-col cols="12">
          <h2 class="fz-48 subtitle text-white font-weight-medium lh-1 text-center">Why us?</h2>
        </v-col>
      </v-row>
    </v-container>

    <!--COLUMNS-->
    <v-container class="pl-4 pr-0 py-0" fluid>
      <v-row>

        <!--LEFT-->
        <v-col cols="12" md="6" order="2" order-md="1">
          <v-card :class="{'column-right container-50': display.mdAndUp}" variant="text">

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

          </v-card>
        </v-col>

        <!--RIGHT-->
        <v-col class="rounded-s-xl" cols="12" md="6" order="1" order-md="2">
          <v-card :rounded="display.mdAndUp ? 's-xl' : ''" class="bg-blur h-100" variant="text">
            <v-container :class="{'column-left container-50': display.mdAndUp}" class="pl-4 pl-md-12 pt-16 h-100" style="padding-bottom: 77px">
              <v-card class="h-100 d-flex flex-column" variant="text">
                <!--FIELDS-->
                <div>
                  <h4 class="text-white fz-32 font-weight-regular ls-normal">Discuss the project</h4>
                  <v-text-field base-color="white" class="text-textGrey mb-6" label="Name*" variant="underlined"></v-text-field>
                  <v-text-field base-color="white" class="text-textGrey mb-6" label="Number*" variant="underlined"></v-text-field>
                  <v-text-field base-color="white" class="text-textGrey" label="Tell us about your idea" variant="underlined"></v-text-field>
                  <v-checkbox class="ml-n1" color="red" density="compact">
                    <template v-slot:label>
                      <span class="text-textGrey ml-3">I consent to the processing of personal data</span>
                    </template>
                  </v-checkbox>
                </div>
                <!--SPACER-->
                <div class="d-flex flex-column flex-grow-1"/>
                <!--SEND-->
                <div class="d-flex justify-space-between">
                  <div class="d-flex flex-0-0 align-center">
                    <v-img class="mr-4" height="37" src="/svg/attach.svg" width="37"></v-img>
                    <span class="text-white fz-20 font-weight-regular">Add file</span>
                  </div>
                  <v-btn class="ls-normal text-none fz-20" color="#FFF" min-width="144" size="large" variant="outlined">Send</v-btn>
                </div>
              </v-card>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet class="bg-transparent cat" location="top right" position="absolute">
      <v-img :height="xs ? 115 : 158" src="/svg/whyus/cat.svg" width="auto"></v-img>
    </v-sheet>
    <v-sheet class="bg-transparent plants" location="top right" position="absolute" style="z-index: -1">
      <v-img :width="xs ? 300: 312" src="/svg/whyus/plants.svg" aspect-ratio="16/9"/>
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

  .column-left {
    margin: auto 0 0 0;
  }

  .column-right {
    margin: 0 0 0 auto;
  }

  .bg-blur {
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, 0.14);
    border: 3px solid rgba(255, 255, 255, 0.05);
  }

  .cat {
    right: 123px !important;

    @media(max-width: 600px) {
      right: 10px !important;
    }
  }
</style>