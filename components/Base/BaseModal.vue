<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-close-container">
            <div class="button-position">
              <button @click="$emit('close')">
                <font-awesome-icon class="icon" :icon="['fas', 'xmark']" />
              </button>
            </div>
          </div>

          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"> </slot>
            </div>

            <div class="modal-body">
              <slot name="body"> </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="$emit('close')">
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
};
</script>

<style lang="less" scoped>
.modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &-wrapper {
    display: table-cell;
    vertical-align: middle;
    padding: 20px;
  }

  &-container {
    min-width: 100px;
    max-width: 500px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  &-header h3 {
    margin-top: 0;
  }

  &-body {
    margin: 20px 0;
  }

  &-default-button {
    float: right;
  }

  &-close-container {
    max-width: 580px;
    position: relative;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .button-position {
      position: absolute;
      top: -20px;
      right: -5px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        padding: 14px;
        border-radius: 0px;
        color: white;
        background-color: #ff5f2d;
      }
    }
  }

  // Animation

  &-enter {
    opacity: 0;
  }

  &-leave-active {
    opacity: 0;
  }

  &-enter &-container,
  &-leave-active &-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>
