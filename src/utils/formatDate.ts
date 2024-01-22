export const formatDateTime = (timeString: string) => {
  const date = new Date(timeString);

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);

  if (today.toDateString() === date.toDateString())
    return `Сегодня в ${hours}:${minutes}`;
  if (date.toDateString() === yesterday.toDateString())
    return `Вчера в ${hours}:${minutes}`;

  const day = `0${date.getDay()}`.slice(-2);
  const month = `0${date.getMonth()}`.slice(-2);
  const year = `${date.getFullYear()}`.slice(-2);

  return `${day}.${month}.${year} в ${hours}:${minutes}`;
};
