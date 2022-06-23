<template>
  <div
    class="input-container"
    :class="[valid ? 'valid-input' : '', errorText ? 'invalid-input' : '']"
  >
    <label v-if="label">{{ label }}</label>
    <input
      class="field-input"
      :name="label ? label : name"
      :placeholder="placeholder"
      :type="type"
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
  name: "BaseInput",
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
    type: {
      type: String,
      default: "text",
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
