import { json_user } from "./config";

export default {
  listComment() {
    return json_user.get("comments");
  },
  addComment(data) {
    return json_user.post("comment", data);
  },
  upVote(id, data) {
    return json_user.post(`comments?id=${id}`, data);
  },
  downVote(id, data) {
    return json_user.post(`comments?id=${id}`, data);
  },
};
