export const formatDate = (inputDate) => {
  const dateObject = new Date(inputDate);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = dateObject.getDate();
  const month = monthNames[dateObject.getMonth()];
  const year = dateObject.getFullYear();

  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
};
