<template>
  <div class="card"></div>
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
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  border-radius: 20px;
  background-color: red;
  transform: scale(1.2);
}
</style>
