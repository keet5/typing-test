<template>
  <div class="text-field font-monospace">
    <span class="typed-text">{{ text.slice(0, progress) }}</span
    ><span
      :class="{ 'current-symbol_mistake': mistake }"
      class="current-symbol"
      >{{ text.slice(progress, progress + 1) }}</span
    >{{ text.slice(progress + 1) }}
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TextField',
  components: {},
  data: () => ({
    lastMistake: undefined,
    mistake: false,
  }),
  methods: {
    ...mapMutations(['progressIncrease', 'reset', 'decreaseRightKeys']),
    keyHandler({ key }) {
      if (key == 'Shift') {
      } else if (key == this.text[this.progress]) {
        this.correctKey()
      } else {
        this.wrongKey()
      }
    },
    correctKey() {
      this.progressIncrease()
      this.mistake = false
    },
    wrongKey() {
      if (this.progress != this.lastMistake) {
        this.lastMistake = this.progress
        this.decreaseRightKeys()
        this.mistake = true
      }
    },
  },
  computed: {
    ...mapState(['progress', 'text']),
  },
  created() {
    this.reset()
  },
  mounted() {
    window.addEventListener('keydown', this.keyHandler)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.keyHandler)
  },
}
</script>

<style scoped>
.text-field {
  text-align: start;
  padding: 20px;
}
.typed-text {
  color: var(--green-middle);
}
.current-symbol {
  color: white;
  background-color: var(--green-dark);
}

.current-symbol_mistake {
  background-color: var(--red-middle);
}
</style>
