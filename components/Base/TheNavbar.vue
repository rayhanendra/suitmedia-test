<template>
  <div>
    <div class="navbar">
      <div class="navbar-container">
        <div class="title">Forum anak IT</div>
        <div class="group">
          <div class="search-container">
            <base-search />
          </div>
          <div class="flex-row-container">
            <base-dropdown title="Categories" :items="categories" />
            <button class="dropbtn" @click="openModal('login')">Login</button>
            <button class="dropbtn" @click="openModal('register')">
              Register
            </button>
          </div>
        </div>
        <div class="menu-button">
          <font-awesome-icon
            @click="openNav"
            class="icon"
            :icon="['fas', 'bars']"
          />
        </div>
      </div>
    </div>

    <div id="mySidenav" ref="mySidenav" class="sidenav">
      <button class="closebtn" @click="closeNav">
        <font-awesome-icon class="icon" :icon="['fas', 'xmark']" />
      </button>
      <div class="search">
        <base-search />
      </div>
      <div class="title">Categories</div>
      <div class="items">
        <a
          v-for="(category, index) in categories"
          :key="index"
          :href="category.link"
          >{{ category.label }}</a
        >
      </div>
      <div class="login-register">
        <a @click="openModal('login')">Login</a>
        <a @click="openModal('register')">Register</a>
      </div>
    </div>
  </div>
</template>

<script>
import BaseDropdown from "./BaseDropdown.vue";
import BaseSearch from "./BaseSearch.vue";
export default {
  name: "TheNavBar",
  components: { BaseSearch, BaseDropdown },
  data() {
    return {
      categories: [
        { link: "#", label: "Linux" },
        { link: "#", label: "Windows" },
        { link: "#", label: "MAC OS" },
        { link: "#", label: "Android" },
        { link: "#", label: "iOS" },
      ],
    };
  },
  methods: {
    openNav() {
      this.$refs["mySidenav"].style.width = "250px";
    },
    closeNav() {
      this.$refs["mySidenav"].style.width = "0";
    },
    openModal(type) {
      if (type === "login") this.$parent.openModalLogin();
      else if (type === "register") this.$parent.openModalRegister();
    },
  },
};
</script>
