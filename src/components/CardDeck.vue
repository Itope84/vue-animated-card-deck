<template>
  <div class="deck">
    <animated-card color="cyan"></animated-card>
    <animated-card color="green"></animated-card>
    <animated-card color="purple"></animated-card>
  </div>
</template>
<script>
import AnimatedCard from './AnimatedCard.vue';

export default {
  components: {
    AnimatedCard,
  },
};
</script>
<style lang="scss" scoped>
.deck {
  position: relative;
  width: 400px;
  margin: auto;
}
</style>
