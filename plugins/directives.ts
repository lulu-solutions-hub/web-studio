import { type DirectiveBinding } from "vue/dist/vue";

// export default defineNuxtPlugin((nuxtApp) => {
//   const paddingDirectives = [
//     { name : "pa", style: "padding" },
//     { name : "pb", style: "paddingBottom" },
//     { name : "pt", style: "paddingTop" },
//     { name : "pl", style: "paddingLeft" },
//     { name : "pr", style: "paddingRight" },
//   ]
//
//   const handlePadding = (el: HTMLElement, binding: DirectiveBinding<string>, style: any) => {
//     el.style[style] = binding.value + "px"
//   }
//
//   function removePaddingStyle(el: HTMLElement, additionalValue: any) {
//     // Удаляем стиль перед удалением директивы
//     el.style[additionalValue] = '';
//   }
//
//   paddingDirectives.forEach((padding) => {
//     nuxtApp.vueApp.directive(padding.name, {
//       beforeMount: (el, binding) => {
//         handlePadding(el, binding, padding.style)
//       },
//       updated: (el, binding) =>  {
//         handlePadding(el, binding, padding.style)
//       },
//       mounted: (el, binding) =>  {
//         handlePadding(el, binding, padding.style)
//       },
//       beforeUnmount: (el, binding) => {
//         // Убираем стиль перед удалением директивы
//         removePaddingStyle(el, padding.style);
//       },
//       getSSRProps: (binding) => {
//         return {
//           style: {
//             [padding.name] : binding.value,
//           },
//         }
//       },
//     })
//   })
// });

// export default defineNuxtPlugin((nuxtApp) => {
//   const handlePadding = (el: HTMLElement, binding: DirectiveBinding<string>) => {
//     el.style.padding = binding.value + "px"
//     console.log(binding.value + 'px')
//   }
//
//   nuxtApp.vueApp.directive('pa', {
//     beforeMount: handlePadding,
//     updated: handlePadding,
//     getSSRProps: (binding) => {
//       return {
//         style: {
//           pa: binding.value,
//         },
//       }
//     },
//   })
// });

export default defineNuxtPlugin((nuxtApp) => {
  const handlePadding = (el: HTMLElement, binding: DirectiveBinding<string>) => {
    el.style.color = binding.value + "px"
  }

  nuxtApp.vueApp.directive('pa', {
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




