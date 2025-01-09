<template>
  <TheAppBar :color="colorStore.color" />
  <v-main>

  </v-main>
</template>
<script>
import { defineComponent } from 'vue';
import TheAppBar from '../components/TheAppBar.vue'
import { useColorStore } from '../stores/useColorStore.js'

export default defineComponent({
  name: 'TheCartView',
  components: {
    TheAppBar
  },
  setup() {
    const colorStore = useColorStore()
    return {
      colorStore
    }
  },
  data() {

  },
  methods: {

  }
})

</script>