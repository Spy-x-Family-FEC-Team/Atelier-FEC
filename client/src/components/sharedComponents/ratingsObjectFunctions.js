// a function for finding the mean score given an object of numerical keys representing scores


  // var sumOfScores = Object.keys(props.data).reduce((accumulate, current) => (accumulate + props.data[current]*parseInt(current) ), 0); //add all the scores together
  // var numberOfRatings = Object.keys(props.data).reduce((accumulate, current) => (accumulate + props.data[current]), 0); //count the number of scores
  // var meanRating = Math.round(sumOfScores/numberOfRatings*10)/10 // get the mean
  // meanRating = meanRating ? meanRating : 5;
  // console.log(meanRating)

const getNumberOfRatings = (ratingsObject) => (
  // sum up the number of ratings at each value
  Object.keys(ratingsObject).reduce((acc, curr) => (acc + parseInt(ratingsObject[curr])), 0)
)

const getMeanRating = (ratingsObject) => {
  // sum up the number of ratings of each value times that value
  var sumOfRatings = Object.keys(ratingsObject).reduce((acc, curr) => (acc + parseInt(ratingsObject[curr])*parseInt(curr)), 0);
  var numberOfRatings = getNumberOfRatings(ratingsObject);
  // get the mean rounded to one digit
  var meanRating = Math.round(sumOfRatings/numberOfRatings*10)/10
  // return 0 if division by 0 happened, otherwise return the mean.
  return meanRating ? meanRating : 0;
}

export {getNumberOfRatings, getMeanRating}