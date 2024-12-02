export const johnsNumber = (firstDay, month, year) => {
  return (
    (2 * (month - 1) +
      (firstDay + (5500 + year + Math.floor((5500 + year) / 4)))) %
    7
  );
};

export const fetchFullMonth = (day, month, year) => {
  const days = [];
  for (let d = 1; d <= 42; d++) {
    let day = d - johnsNumber(0, month, year);
    days.push({
      ...handleDayAndMonth(day, month, year),
      week: Math.ceil(d / 7),
    });
  }
  return days;
};

const weekDay = (weekCode) => {
  switch (weekCode) {
    case 0:
      return "Monday";
      break;
    case 1:
      return "Tuesday";
      break;
    case 2:
      return "Wednesday";
      break;
    case 3:
      return "Thursday";
      break;
    case 4:
      return "Friday";
      break;
    case 5:
      return "Saturday";
      break;
    case 6:
      return "Sunday";
      break;
    default:
      return -1;
      break;
  }
};

export const handleDayAndMonth = (day, month, year) => {
  if (month === 1) {
    if (year % 4 === 0) {
      return day <= 0
        ? { day: day + 6, month: 13, year: year + 1 }
        : day > 30
        ? { day: day % 30, month: 2, year }
        : { day, month, year };
    }
    return day <= 0
      ? { day: day + 5, month: 13, year: year - 1 }
      : day > 30
      ? { day: day % 30, month: 2, year }
      : { day, month, year };
  }
  if (month === 13) {
    if (day <= 0) return { day: day + 30, month: 12, year };
    if (year % 4 === 3) {
      if (day <= 6) return { day, month: 13, year };
      day -= 6;
      return day > 30
        ? { day: day % 30, month: 2, year: year + 1 }
        : { day, month: 1, year: year + 1 };
    }
    if (day <= 6) return { day, month: 13, year };
    day -= 6;
    return day > 30
      ? { day: day % 30, month: 2, year: year + 1 }
      : { day, month: 1, year: year + 1 };
  }
  return day <= 0
    ? { day: day + 30, month: month - 1, year }
    : day > 30
    ? { day: day % 30, month: month + 1, year }
    : { day, month, year };
};

export const MonthNames = (month) => {
  switch (month) {
    case 1:
      return "Septemper";
      break;
    case 2:
      return "October";
      break;
    case 3:
      return "November";
      break;
    case 4:
      return "December";
      break;
    case 5:
      return "January";
      break;
    case 6:
      return "February";
      break;
    case 7:
      return "March";
      break;
    case 8:
      return "April";
      break;
    case 9:
      return "May";
      break;
    case 10:
      return "June";
      break;
    case 11:
      return "July";
      break;
    case 12:
      return "August";
      break;
    case 13:
      return "Paquamen";
      break;
  }
};
