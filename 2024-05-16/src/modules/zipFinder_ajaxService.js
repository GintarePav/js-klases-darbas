const ajaxService = (term) => {
  // https://api.postit.lt/?term=Laisves%20al.%2032,%20Kaunas&key=UNFYHJYNHGwWmFmG5Go1
  const url = "https://api.postit.lt/?term=";
  const key = "UNFYHJYNHGwWmFmG5Go1";
  return fetch(`${url}${term}&key=${key}`).then((response) => response.json());
};

export default ajaxService;
