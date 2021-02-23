<template>
  <div class="header" v-if="!finished">
    <Progress />
  </div>

  <div class="main">
    <Result v-if="finished" />

    <template v-else>
      <div class="typing-panel">
        <div class="typing-panel__indicator">
          <Speed class="fcc" />
          <Accuracy class="fcc" />
        </div>
        <TextField class="typing-panel__text-field" />
      </div>
    </template>
  </div>

  <div class="footer">
    <div class="manager">
      <router-link to="/"
        ><button>{{ finished ? 'try again' : 'restart' }}</button></router-link
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TextField from '@/components/TestTextField.vue'
import Speed from '@/components/TestSpeed.vue'
import Accuracy from '@/components/TestAccuracy.vue'
import Result from '@/components/TestResult.vue'
import Progress from '@/components/TestProgress.vue'

export default {
  name: 'Test',
  components: {
    TextField,
    Speed,
    Accuracy,
    Result,
    Progress,
  },
  computed: {
    ...mapGetters(['loading', 'finished', 'accuracy']),
    ...mapState(['speed']),
  },
  created() {
    if (this.loading) this.$router.push('/')
  },
}
</script>

<style scoped>
.typing-panel {
  display: grid;
  grid-template-rows: 80px auto;
  grid-template-columns: 1fr;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: var(--gray-light);
  overflow: hidden;
  width: 100%;
  min-height: 100%;
}

.typing-panel__indicator {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  font-weight: 600;
  background-color: var(--gray-middle);
  text-transform: uppercase;
  background-color: var(--blue-dark);
  color: white;
}

.typing-panel__text-field {
  --border: 2px solid var(--gray-middle);
  grid-column: span 2;
  border-radius: 0 0 10px 10px;
  border-bottom: var(--border);
  border-right: var(--border);
  border-left: var(--border);
}

.manager {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
