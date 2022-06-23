<template>
  <div>
    <div class="comment-section">
      <div class="comment-section-content">
        <div class="avatar"></div>
        <div class="comment-section-flex">
          <div class="comment-section-content-main">
            <h4>Neal Topham</h4>
            <h5>08 February 2017 07:30</h5>
            <p>
              Mungkin ada fenomena paranormal yang tidak bisa dijelaskan. Lebih
              baik nyala mati sendiri daripada tidak nyala sama sekali
            </p>
            <div class="point-container">
              <h5>3 point</h5>
              <div class="icon-container up">
                <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']" />
              </div>
              <div class="icon-container down">
                <font-awesome-icon class="icon" :icon="['fas', 'arrow-down']" />
              </div>
            </div>
          </div>

          <div class="comment-section-content">
            <div class="avatar"></div>
            <div class="comment-section-content-main">
              <h4>Neal Topham</h4>
              <h5>08 February 2017 07:30</h5>
              <p>
                Mungkin ada fenomena paranormal yang tidak bisa dijelaskan.
                Lebih baik nyala mati sendiri daripada tidak nyala sama sekali
              </p>
              <div class="point-container">
                <h5>3 point</h5>
                <div class="icon-container up">
                  <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']" />
                </div>
                <div class="icon-container down">
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'arrow-down']"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="comment-section-content">
        <div class="avatar"></div>
        <div class="comment-section-content-main">
          <h4>Neal Topham</h4>
          <h5>08 February 2017 07:30</h5>
          <p>
            Mungkin ada fenomena paranormal yang tidak bisa dijelaskan. Lebih
            baik nyala mati sendiri daripada tidak nyala sama sekali
          </p>
          <div class="point-container">
            <div class="">3 point</div>
            <div class="icon-container up">
              <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']" />
            </div>
            <div class="icon-container down">
              <font-awesome-icon class="icon" :icon="['fas', 'arrow-down']" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListComment",
};
</script>
