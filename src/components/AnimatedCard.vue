<template>
  <div class="card" :class="`step-${stage}`" :style="{ 'background-color': color }"></div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      validator: val => ['red', 'green', 'yellow', 'purple'].indexOf(val) !== -1,
      required: true,
    },
    initialStage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      stage: this.initialStage,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.stage < 3) {
        this.stage += 1;
      } else {
        this.stage = 0;
      }
    }, 4000);
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

  @for $k from 0 to 4 {
    &.step-#{$k} {
      top: #{25px * ($k)};
      @if ($k > 0) {
        animation: move#{$k} 0.5s ease-in-out;
      }
      z-index: #{1 + $k};
      transform: scale(#{1 + (0.1 * $k)});
      @if ($k > 2) {
        opacity: 0;
      }
    }
  }
}

$n: 10;
$interval: 10%;
@for $k from 0 to 3 {
  @keyframes move#{$k} {
    /**
    * The first move. At theis point, the item starts at the zeroth
    position and moves into the first
     */
    @for $i from 0 to $n {
      $current-frame: ($i * $interval);
      #{$current-frame} {
        transform: scale(#{1 + (0.01 * $i * $k)});
        z-index: #{1 + $k + (0.1 * $i)};
        top: #{(25 * ($k - 1)) + (2.5 * $i)}px;
        @if ($k > 2) {
          opacity: 1 - ($i * 0.1);
        }
      }
    }
  }
}
</style>
