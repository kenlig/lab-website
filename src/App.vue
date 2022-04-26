<template>
  <router-view />
</template>

<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
html::-webkit-scrollbar {
  display: none;
}
html {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
