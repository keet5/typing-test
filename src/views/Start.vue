<template>
  <div class="main">
    <div v-if="loading">Loading...</div>
    <div class="start" v-else>
      <span class="start-text">Are you ready?</span>
      <router-link to="test"><button>Start</button></router-link>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Start',
  methods: {
    ...mapActions(['downloadText']),
    ...mapMutations(['setText']),
  },
  computed: {
    ...mapGetters(['loading']),
  },
  created() {
    this.setText('')
    this.downloadText()
  },
}
</script>

<style scoped>
.start {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.start-text {
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 25px;
  color: var(--gray);
}
</style>
