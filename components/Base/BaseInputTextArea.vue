<template>
  <div
    class="input-container"
    :class="[valid ? 'valid-input' : '', errorText ? 'invalid-input' : '']"
  >
    <textarea
      class="field-input"
      :name="name"
      cols="40"
      rows="5"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
    <div v-if="errorText">
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInputTextArea",
  props: {
    name: String,
    valid: Boolean,

    label: {
      type: String,
      default: null,
      required: false,
    },
    placeholder: {
      type: String,
      default: "",
      required: false,
    },
    errorText: {
      type: String,
      default: "",
      required: false,
    },
    value: {
      type: [String, Number],
      default: "",
      required: false,
    },
  },
};
</script>

<style lang="less" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  &.valid-input {
    .field-input {
      border-color: #33b95a;
    }
  }

  &.invalid-input {
    .field-input {
      border-color: #ff5f2d;
    }
    p {
      font-size: 14px;
      color: #ff5f2d;
    }
  }
}
</style>
