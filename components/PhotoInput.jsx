/* eslint-disable jsx-a11y/label-has-associated-control */
export default function PhotoInput({ title, prompt, name }) {
  return (
    <label className="block">
      <span className="text-gray-700 font-bold">{title}</span>
      <br />
      <p className="text-xs leading-snug text-gray-600 mb-2">{prompt}</p>
      <input className="w-full" type="file" id={name} name={name} accept="image/*" />
    </label>
  );
}
