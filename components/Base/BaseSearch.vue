<template>
  <div class="search-input">
    <input class="search-input-field" type="text" placeholder="Search" />
    <font-awesome-icon
      class="search-input-icon"
      :icon="['fas', 'magnifying-glass']"
    />
  </div>
</template>

<script>
export default {
  name: "BaseSearch",
};
</script>
