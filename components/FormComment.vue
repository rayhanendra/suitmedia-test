<template>
  <div class="flex-column-container">
    <base-input
      v-model="form.name"
      placeholder="Nama"
      :name="'nama'"
      :valid="form.name && !formError.name"
      :errorText="formError.name"
    />
    <base-input
      v-model="form.email"
      placeholder="Email"
      :name="'email'"
      :type="'email'"
      :valid="form.email && !formError.email"
      :errorText="formError.email"
    />
    <base-input-text-area
      v-model="form.comment"
      placeholder="Komentar anda"
      :name="'comment'"
      :valid="form.comment && !formError.comment"
      :errorText="formError.comment"
    />
    <div>
      <button class="secondary" @click="resetForm()">Reset</button>
      <button class="primary" @click="submitForm()">Submit</button>
    </div>
  </div>
</template>

<script>
import BaseInput from "./Base/BaseInput.vue";
import BaseInputTextArea from "./Base/BaseInputTextArea.vue";
export default {
  name: "FormComment",
  components: { BaseInput, BaseInputTextArea },
  data() {
    return {
      showModal: false,
      form: {
        name: null,
        email: null,
        comment: null,
      },
      formError: {},
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    resetForm() {
      this.form = { name: null, email: null, comment: null };
      this.formError = {};
    },
    submitForm() {
      if (!this.validateForm()) return;
    },
    validateForm() {
      let result = true;
      this.formError = {};
      const { name, email, comment } = this.form;

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
      if (!comment) {
        this.formError.comment = "Komentar wajib diisi";
        result = false;
      }

      return result;
    },
  },
};
</script>
