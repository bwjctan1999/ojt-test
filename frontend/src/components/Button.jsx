export default function Button({ text, bgcolor }) {
  const style = `w-full rounded-lg shadow text-white p-4 font-bold ${bgcolor}`;

  return <button className={style}>{text}</button>;
}
