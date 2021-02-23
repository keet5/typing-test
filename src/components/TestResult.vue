<template>
  <div class="result">
    <div class="result__container">
      <div class="result__icon fcc">
        <img class="icon__img" src="@/assets/icons/speedometer2.svg" />
      </div>
      <div class="result__title">speed</div>
      <div class="result__value">
        <span class="value">{{ speed }}</span> wpm
      </div>
    </div>
    <div class="result__container">
      <div class="result__icon fcc">
        <img class="icon__img" src="../assets/icons/bullseye.svg" />
      </div>
      <div class="result__title">accuracy</div>
      <div class="result__value">
        <span class="value">{{ accuracy }}</span> %
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Result',
  computed: {
    ...mapState(['speed']),
    ...mapGetters(['accuracy']),
  },
}
</script>

<style scoped>
.result {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: var(--gray-dark);
  background-color: var(--gray-light);
  border-radius: 15px;
  border: 2px solid var(--gray-middle);
  height: 100%;
  width: 100%;
  padding: 20px;
}
.result__container {
  display: grid;
  grid-template: auto auto / auto auto;
  grid-column-gap: 10px;
  padding: 20px;
  margin: 20px;
}

.result__icon {
  --size: 70px;
  grid-row: span 2;
  border-radius: 50%;
  background-color: white;
  width: var(--size);
  height: var(--size);
}

.icon__img {
  height: 70%;
}

.result__title {
  text-transform: uppercase;
}

.result__title {
  width: 100%;
}

.value {
  font-size: 1.5em;
  font-weight: 500;
}
</style>



