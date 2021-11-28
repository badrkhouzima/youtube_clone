const retrieveSearchedTerms = () => {
  const data = localStorage.getItem("searched-Terms"); 

  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default retrieveSearchedTerms; 
