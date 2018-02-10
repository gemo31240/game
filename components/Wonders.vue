<template>
  <div class="wonders">
    <h1>Wonders</h1>
    <div v-for="wonder in WONDERS">
      <wonder :name="wonder.jName" :text="wonder.jText"/>
    </div>
  </div>
</template>

<script>
  import { WONDERS, ECONOMY, SCIENCE, MILITARY,CULTURE,MODERN,MEDIEVAL,ANCIENT } from '~/store/index'
  import Wonder from '~/components/Wonder.vue'
  export default {
    data () {
      return {
        WONDERS
      }
    },
    components: {
      Wonder
    }
  }
</script>
