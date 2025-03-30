export const handleLikeVote = (id) => {
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        voteForLike: [],
        voteForDislike: [],
      };

  if (votes.voteForLike.includes(id)) {
    return false;
  }

  votes.voteForLike.push(id);
  votes.voteForDislike = votes.voteForDislike.filter((item) => item !== id);

  localStorage.setItem("votes", JSON.stringify(votes));
  return true;
};

export const handleDislikeVote = (id) => {
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        voteForLike: [],
        voteForDislike: [],
      };

  if (votes.voteForDislike.includes(id)) {
    return false;
  }

  votes.voteForDislike.push(id);
  votes.voteForLike = votes.voteForLike.filter((item) => item !== id);

  localStorage.setItem("votes", JSON.stringify(votes));
  return true;
};

export const handleCheckIsAlreadyLike = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes"));
  if (!votes) return false;
  return votes.voteForLike.includes(id);
};

export const handleCheckIsAlreadyDisLike = (id) => {
  const votes = JSON.parse(localStorage.getItem("votes"));
  if (!votes) return false;
  return votes.voteForDislike.includes(id);
};

