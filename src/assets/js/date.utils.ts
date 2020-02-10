export function getNow() {
  let date = new Date();
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(),
    date.getHours(), date.getMinutes(), date.getSeconds()));
}

export function getToday() {
  let today = getNow();
  today.setHours(0,0, 1);
  return today;
}

export function getWeekPrior() {
  let lastWeekDate = getToday();
  lastWeekDate.setDate(lastWeekDate.getDate() - 7);
  lastWeekDate.setHours(0,0, 1);
  return lastWeekDate;
}

export function getMonthPrior() {
  let lastMonthDate = getToday();
  lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
  lastMonthDate.setHours(0,0, 1);
  return lastMonthDate;
}


