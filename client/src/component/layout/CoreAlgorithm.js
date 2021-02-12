function getStartDate(state) {
  /*
    compute the startDate
    */
  let userData = state["userData"];
  let startDate = null;
  /*
    iterate date from today to back
    find the start of the most recent Period date
    which is the startDate
    */
   function comp(a, b) {
    var dateA = new Date(a.release), dateB = new Date(b.release);
    return dateA - dateB;}
  for (const date of Object.keys(userData).sort(comp)) {
    console.log(date); console.log(startDate);
    if (userData[date]["Blood"] === 0) {
      // not in period
      if (startDate !== null) {
        console.log('startDate'+startDate);
        return startDate;
      }
      // if it is none, continue to find the most recend period date
    } else {
      // in period, update startDate
      startDate = date;
    }
  }
  return startDate;
}

export default getStartDate;
