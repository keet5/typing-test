<template>
  <div class="progress">
    <div
      @transitionend="transitioned"
      :style="{
        width,
      }"
      class="progress-value"
      :class="{
        'progress-value_mistake': showMistake,
        'progress-value_increase': increase,
      }"
      ref="value"
    ></div>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Progress',
  data: () => ({
    showMistake: false,
    increase: false,
  }),
  methods: {
    transitioned({ propertyName: property }) {
      this.showMistake = false
      this.increase = false
    },
  },
  computed: {
    ...mapState(['text', 'progress', 'mistake']),
    ...mapGetters(['accuracy']),
    width() {
      return Math.ceil((this.progress * 100) / this.text.length) + '%'
    },
  },
  watch: {
    accuracy() {
      this.showMistake = true
    },
    progress() {
      this.increase = true
    },
  },
}
</script>

<style scoped>
.progress,
.progress-value {
  border-radius: 10px;
}
.progress {
  width: 100%;
  height: 20px;
}

.progress-value {
  height: 100%;
  background-color: var(--green-middle);
  transition: 160ms;
}

.progress-value_mistake {
  background-color: var(--red-middle);
}

.progress-value_increase {
  /* background-color: var(--green-light); */
}
</style>
