import { type DirectiveBinding } from "vue/dist/vue";

export default defineNuxtPlugin((context) => {
  const handlePadding = (el: HTMLElement, binding: DirectiveBinding<string>) => {
    el.style.padding = binding.value + "px"
    console.log(binding.value + 'px')
  }

  context.vueApp.directive('pa', {
    beforeMount: handlePadding,
    updated: handlePadding,
    getSSRProps: (binding) => {
      return {
        style: {
          pa: binding.value,
        },
      }
    },
  })
});