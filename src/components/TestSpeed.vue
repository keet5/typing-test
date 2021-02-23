<template>
  <div class="speed">speed: {{ speed }} cpm</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Speed',
  data: () => ({
    time: Date.now(),
    timer: null,
  }),
  methods: {
    ...mapMutations(['setSpeed']),
    updateSpeed() {
      this.setSpeed(
        Math.round((this.progress * 60000) / (Date.now() - this.time))
      )
    },
  },
  computed: {
    ...mapState(['speed', 'progress']),
  },
  mounted() {
    this.setSpeed(0)
    this.timer = setInterval(this.updateSpeed, 1000)
  },
  beforeUnmount() {
    clearInterval(this.timer)
  },
}
</script>
