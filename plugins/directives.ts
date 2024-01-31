import Vue from 'vue'

Vue.directive('bg', (el: any, binding: any) => {
  // this will be called for both `mounted` and `updated`
  el.style.backgroundColor = binding.value
})