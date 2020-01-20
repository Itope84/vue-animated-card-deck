<template>
  <div class="card" :style="{ 'background-color': color }"></div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      validator: val => ['red', 'green', 'yellow', 'purple'].indexOf(val) !== -1,
      required: true,
    },
  },
  data() {
    // currentStage: 0;
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  border-radius: 20px;
  position: absolute;
  opacity: 1;

  $n: 10;
  $interval: 10%;

  &.step-0 {
    top: 25px;
    animation: move0 1 ease-in-out 1s;
    z-index: 1;
  }

  @keyframes move0 {
    /**
    * The first move. At theis point, the item starts at the zeroth
    position and moves into the first
     */
    @for $i from 0 to $n {
      $current-frame: ($i * $interval);
      #{$current-frame} {
        transform: scale(#{1 + (0.01 * $i)});
        z-index: #{1 + (0.1 * $i)};
        top: #{2.5 * $i}px;
      }
    }
  }

  @keyframes move1 {
    /**
     */
    @for $i from 0 to $n {
      $current-frame: ($i * $interval);
      #{$current-frame} {
        transform: scale(#{1.1 + (0.01 * $i)});
        z-index: #{2 + (0.1 * $i)};
        top: #{2.5 * $i}px;
      }
    }
  }
}
</style>
