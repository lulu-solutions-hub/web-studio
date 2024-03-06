<script lang="ts" setup>
  import { useDisplay } from "vuetify";

  const display = ref(useDisplay());
  const { xs } = useDisplay();

  const valid = ref(false);

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

  const runtimeConfig = useRuntimeConfig();
  const formattedText = ref(``);

  const data = ref({
    name: "",
    phone: "",
    message: "",
  });

  watchEffect(() => {
    formattedText.value = `Ім'я: ${ data.value.name }%0AТелефон: ${ data.value.phone }%0AПовідомлення: ${ data.value.message }`;
  });

  function sendMessage() {
    const url = `https://api.telegram.org/bot${ runtimeConfig.public.telegramSecretApi }/sendMessage?chat_id=${ runtimeConfig.public.chatId }&message_thread_id=${ runtimeConfig.public.topicId }&parse_mode=Markdown&text=${ formattedText.value }`;
    console.log(url)
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
  }
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
              <v-card class="h-100" variant="text">
                <!--FIELDS-->
                <v-form v-model="valid" action="/thanks" class="h-100 d-flex flex-column" data-netlify="true" data-netlify-honeypot="bot-field" method="POST" name="contact">
                  <div>
                    <input name="form-name" type="hidden" value="contact"/> <input name="bot-field" type="hidden"/>
                    <h4 class="text-white fz-32 font-weight-regular ls-normal">Discuss the project</h4>
                    <v-text-field v-model="data.name" :rules="[v => !!v || 'Field required']" base-color="white" class="text-textGrey mb-6" label="Name*" variant="underlined"></v-text-field>
                    <v-text-field v-model="data.phone" :rules="[v => !!v || 'Field required']" base-color="white" class="text-textGrey mb-6" label="Number*" variant="underlined"></v-text-field>
                    <v-text-field v-model="data.message" :rules="[v => !!v || 'Field required']" base-color="white" class="text-textGrey" label="Tell us about your idea" variant="underlined"></v-text-field>
                    <v-checkbox :rules="[v => !!v || 'consent is required']" class="ml-n1" color="red" density="compact">
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
                    <v-btn :disabled="!valid" class="ls-normal text-none fz-20" color="#FFF" min-width="144" size="large" type="submit" variant="outlined" @click="sendMessage">Send</v-btn>
                  </div>
                </v-form>
              </v-card>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-sheet :width="xs ? 80 : 107" class="bg-transparent cat" location="top right" position="absolute">
      <embed src="/svg/whyus/cat.svg" type="image/svg+xml"/>
    </v-sheet>

    <v-sheet class="bg-transparent plants" location="top right" position="absolute" style="z-index: -1">
      <v-img :width="xs ? 170: 312" alt="lulu plants" aspect-ratio="16/9" src="/svg/whyus/plants.svg"/>
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

    @media(max-width: 900px) {
      right: 100px !important;
    }
    @media(max-width: 600px) {
      right: 40px !important;
    }
  }
</style>