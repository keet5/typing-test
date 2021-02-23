<template>
  <router-view />
</template>

<style>
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr 100px;
}

#app > * > * {
  max-width: 1000px;
}

.header,
.main,
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.header {
  grid-row: 1;
}
.main {
  border-top: 2px solid #e5e5e5;
  border-bottom: 2px solid #e5e5e5;
  grid-row: 2;
}
.footer {
  grid-row: 3;
}
</style>
