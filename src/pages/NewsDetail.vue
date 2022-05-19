<template>
  <div></div>
</template>

<script>
export default {
  computed: {
    index() {
      return parseInt(this.$route.params.id);
    },
  },
};
</script>

<style></style>
