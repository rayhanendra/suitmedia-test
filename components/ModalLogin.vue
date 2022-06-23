<template>
  <div>
    <base-modal v-if="showModal" @close="showModal = false">
      <div slot="header"><h3>Login</h3></div>
      <div slot="body" class="flex-column-container">
        <base-input
          v-model="form.email"
          label="Email"
          :name="label"
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
        <button class="primary" @click="submitForm()">Login</button>
      </div>
    </base-modal>
  </div>
</template>

<script>
import BaseModal from "./Base/BaseModal.vue";
import BaseInput from "./Base/BaseInput.vue";
export default {
  name: "ModalLogin",
  components: { BaseModal, BaseInput },
  data() {
    return {
      showModal: false,
      form: {
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
      const { email, password } = this.form;

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

<style lang="less" scoped>
.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
</style>
