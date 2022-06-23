<template>
  <div class="dropdown">
    <button class="dropbtn">{{ title }}</button>
    <div class="dropdown-content">
      <a v-for="item in items" :key="item.index" :href="item.link">{{
        item.label
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseDropdown",
  props: {
    title: String,
    items: Array,
  },
};
</script>

<style lang="less" scoped></style>
