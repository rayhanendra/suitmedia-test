import comment from "./comment";

const repositories = {
  comment: comment,
};

export const RepositoryAPI = {
  get: (name) => repositories[name],
};
