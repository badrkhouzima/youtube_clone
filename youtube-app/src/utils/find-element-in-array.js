const findElementInArray = (object, element) => {
  const getIds = object.map((ele) => ele.id.videoId);
  if (getIds.includes(element)) {
    return true;
  }
};
export default findElementInArray;
