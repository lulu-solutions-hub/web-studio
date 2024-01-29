import {createVuetify} from "vuetify";

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components';

export default defineNuxtPlugin((context) => {
  const locale = useCookie('locale');
  const vuetify = createVuetify({
    locale: {
      locale: locale.value as string,
      fallback: 'en',
    },
    components: {
      ...components,
      ...labsComponents,
    },
    directives,
    ssr: true,
    theme: {
      defaultTheme: 'light',
      themes: {
        dark: {

        }
      }
    },
    defaults: {
      global: {
        ripple: false,
      }
    }
  });

  context.vueApp.use(vuetify);
});