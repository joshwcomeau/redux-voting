export default store => next => action => {
  console.log("In middleware", action);
  return next(action);
}
