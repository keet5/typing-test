<template>
  <div class="accuracy">accuracy: {{ accuracy }} %</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Accuracy',
  computed: {
    ...mapGetters(['accuracy']),
  },
}
</script>


