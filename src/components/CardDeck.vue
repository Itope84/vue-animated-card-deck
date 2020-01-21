<template>
  <div class="deck">
    <animated-card :initialStage="0" color="red"></animated-card>
    <animated-card :initialStage="1" color="yellow"></animated-card>
    <animated-card :initialStage="2" color="green"></animated-card>
    <animated-card :initialStage="3" color="purple"></animated-card>
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
  width: 350px;
  margin: auto;
}
</style>
