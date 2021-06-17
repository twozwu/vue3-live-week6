export default function date(time) {
  const localTime = new Date(time * 1000);
  return localTime.toLocaleDateString();
}
