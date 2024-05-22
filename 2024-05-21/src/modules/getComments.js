import createCommentCard from "./createCommentCard";

const getComments = (filmData) => {
  const storedCommentLog = localStorage.getItem("commentLog");
  if (storedCommentLog) {
    const commentLog = JSON.parse(storedCommentLog);
    for (let comment of commentLog) {
      if (comment.title === filmData.Title) {
        createCommentCard(comment.name, comment.text);
      }
    }
  }
};

export default getComments;
