<template>
  <TheAppBar :color="colorStore.color" />
  <v-main>
    <v-row style="height: 15vh">

    </v-row>
    <v-row>
      <v-col cols="3" class="text-center">
        <ImagePreview />
      </v-col>
      <v-col cols="9" class="text-center">
        <ItemDetail @changeColor="setColor" />
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
import { defineComponent } from 'vue';
import TheAppBar from '../components/TheAppBar.vue'
import ImagePreview from '../components/ImagePreview.vue'
import ItemDetail from '../components/ItemDetail.vue'
import { useColorStore } from '../stores/useColorStore.js'

export default defineComponent({
  name: 'TheHomeView',
  components: {
    TheAppBar,
    ImagePreview,
    ItemDetail
  },
  setup() {
    const colorStore = useColorStore()
    return {
      colorStore
    }
  },
  data() {
    return {
      colorValue: 'red'
    }
  },
  methods: {
    setColor(c) {
      this.colorValue = c
    }
  }
})

</script>