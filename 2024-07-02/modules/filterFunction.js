module.exports = (data, title) => {
  const result = data.filter((product) => {
    return product.productName.toLowerCase().includes(title);
  });

  if (result.length >= 1) {
    return result;
  } else if (!title) {
    return {
      error: "Product title not provided",
    };
  } else {
    return {
      result: "No product found",
    };
  }
};

/*
API sukurti nauja endpoint:
/api/search/name

Jo pagalba galima surasti produkta pagal pavadinima.

url: http://127.0.0.1/8000/api/search/?name=Stacionarus
*/
