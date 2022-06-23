<template>
  <div>
    <base-modal v-if="showModal" @close="showModal = false">
      <div slot="header"><h3>Register</h3></div>
      <div slot="body" class="flex-column-container">
        <base-input
          v-model="form.name"
          label="Nama"
          :valid="form.name && !formError.name"
          :errorText="formError.name"
        />
        <base-input
          v-model="form.email"
          label="Email"
          :type="'email'"
          :valid="form.email && !formError.email"
          :errorText="formError.email"
        />
        <base-input
          v-model="form.password"
          label="Password"
          :type="'password'"
          :valid="form.password && !formError.password"
          :errorText="formError.password"
        />
      </div>
      <div slot="footer" class="button-container">
        <button class="primary" @click="submitForm()">Create Account</button>
      </div></base-modal
    >
  </div>
</template>

<script>
import BaseModal from "./Base/BaseModal.vue";
import BaseInput from "./Base/BaseInput.vue";
export default {
  name: "ModalRegister",
  components: { BaseModal, BaseInput },
  data() {
    return {
      showModal: false,
      form: {
        name: null,
        email: null,
        password: null,
      },
      formError: {},
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    submitForm() {
      if (!this.validateForm()) return;
    },
    validateForm() {
      let result = true;
      this.formError = {};
      const { name, email, password } = this.form;

      if (!name) {
        this.formError.name = "Nama wajib diisi";
        result = false;
      }
      const rxEmail = /^\w+([^\w]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!email) {
        this.formError.email = "Email wajib diisi";
        result = false;
      } else if (!rxEmail.test(email)) {
        this.formError.email = "Format email salah";
        result = false;
      }
      if (!password) {
        this.formError.password = "Password wajib diisi";
        result = false;
      }

      return result;
    },
  },
};
</script>
