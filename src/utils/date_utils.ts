export function getDifferrentMillisBetweenTimestamps(
  timestamp1: string,
  timestamp2: string
): number {
  const date1 = new Date(timestamp1);
  const date2 = new Date(timestamp2);
  return Math.abs(date2.getTime() - date1.getTime());
}

export function getDifferenceTimeString(millis: number): string {
  const seconds = Math.floor(millis / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);
  if (seconds < 60) {
    return "Few seconds ago";
  } else if (minutes < 60) {
    if (minutes === 1) {
      return "1 minute ago";
    } else {
      return `${minutes} minutes ago`;
    }
  } else if (hours < 24) {
    if (hours === 1) {
      return "1 hour ago";
    } else {
      return `${hours} hours ago`;
    }
  } else if (days < 7) {
    if (days === 1) {
      return "1 day ago";
    } else {
      return `${days} days ago`;
    }
  } else if (weeks < 4) {
    if (weeks === 1) {
      return "1 week ago";
    } else {
      return `${weeks} weeks ago`;
    }
  } else if (months < 12) {
    if (months === 1) {
      return "1 month ago";
    } else {
      return `${months} months ago`;
    }
  } else if (years >= 1) {
    if (years === 1) {
      return "1 year ago";
    } else {
      return `${years} years ago`;
    }
  }
  return "";
}
