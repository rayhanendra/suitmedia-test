<template>
  <div>
    <the-navbar />
    <div class="container padding-y">
      <div class="grid-container">
        <div class="flex-column-container divider-vertical">
          <div class="forum-section">
            <div class="forum-section-title">
              Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi
              webcam
            </div>
            <p class="forum-section-text">
              Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada
              yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah
              ada kemungkinan laptop saya di-hack karena kasus terjadi tiap
              terkoneksi di internet.
            </p>
          </div>
          <h3 class="separator">Komentar</h3>
          <base-comment />
          <h3 class="separator">Tambahkan Komentar</h3>
          <div class="addcomment-section">
            <form-comment />
          </div>
        </div>
        <div class="discussion-section">
          <h3 class="title">Diskusi 5 Teratas</h3>
          <div
            v-for="discussion in discussions"
            :key="discussion.id"
            class="discussions"
          >
            <div class="discussions-item">
              <div class="number">{{ discussion.id }}</div>
              <p>{{ discussion.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal-login ref="modalLogin" />
    <modal-register ref="modalRegister" />
  </div>
</template>

<script>
import BaseComment from "../components/ListComment.vue";
import BaseInput from "../components/Base/BaseInput.vue";
import BaseModal from "../components/Base/BaseModal.vue";
import TheNavbar from "../components/Base/TheNavbar.vue";
import FormComment from "../components/FormComment.vue";
import ModalLogin from "../components/ModalLogin.vue";
import ModalRegister from "../components/ModalRegister.vue";
export default {
  components: {
    TheNavbar,
    BaseInput,
    BaseModal,
    ModalLogin,
    ModalRegister,
    FormComment,
    BaseComment,
  },
  name: "IndexPage",
  data() {
    return {
      discussions: [
        { id: 1, title: "Bersihkan laptop dari butiran debu" },
        { id: 2, title: "Cara akses website menggunakan koneksi openVPN" },
        { id: 3, title: "Bersihkan laptop dari butiran debu" },
        { id: 4, title: "Bersihkan laptop dari butiran debu" },
        {
          id: 5,
          title: "Tutorial: langkah-langkah mencegah website untuk track user",
        },
      ],
    };
  },
  methods: {
    openModalLogin() {
      this.$refs.modalLogin.openModal();
    },
    openModalRegister() {
      this.$refs.modalRegister.openModal();
    },
  },
};
</script>
