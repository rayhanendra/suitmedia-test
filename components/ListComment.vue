<template>
  <div class="comment-section">
    <div
      v-for="(comment, index) in comments"
      :key="index"
      class="comment-section-content"
    >
      <div class="avatar">
        <!-- <img class="avatar" :src="require(comment.avatar)" /> -->
      </div>
      <div class="comment-section-flex">
        <div class="comment-section-content-main">
          <h4>{{ comment.author }}</h4>
          <h5>{{ comment.date | moment }}</h5>
          <p>
            {{ comment.message }}
          </p>
          <div class="point-container">
            <h5>{{ comment.point }} point</h5>
            <div class="icon-container up" @click="upVote(comment.id)">
              <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']" />
            </div>
            <div class="icon-container down" @click="downVote(comment.id)">
              <font-awesome-icon class="icon" :icon="['fas', 'arrow-down']" />
            </div>
          </div>
        </div>

        <div v-if="comment.replies">
          <div
            v-for="(reply, index) in comment.replies"
            :key="index"
            class="comment-section-content"
          >
            <div class="avatar">
              <!-- <img class="avatar" :src="require(reply.avatar)" /> -->
            </div>
            <div class="comment-section-content-main">
              <h4>{{ reply.author }}</h4>
              <h5>{{ reply.date | moment }}</h5>
              <p>
                {{ reply.message }}
              </p>
              <div class="point-container">
                <h5>{{ reply.point }} point</h5>
                <div class="icon-container up" @click="upVote(comment.id)">
                  <font-awesome-icon class="icon" :icon="['fas', 'arrow-up']" />
                </div>
                <div class="icon-container down" @click="downVote(comment.id)">
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
    </div>
  </div>
</template>

<script>
import { momentFormat } from "../config/MomentFormat";
import { RepositoryAPI } from "../api/repositoryApi";

const comment = RepositoryAPI.get("comment");

export default {
  name: "ListComment",
  data() {
    return {
      comments: [],
    };
  },
  filters: {
    moment: function (date) {
      return momentFormat(date, "LLL");
    },
  },
  mounted() {
    this.getListComments();
  },
  methods: {
    upVote(id) {},
    downVote(id) {},
    async getListComments() {
      try {
        const { data } = await comment.listComment();
        this.comments = data;
      } catch (error) {
        return error;
      }
    },
  },
};
</script>
