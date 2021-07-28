export default function Input({ title, name, placeholder }) {
  return (
    <label className="block">
      <span className="text-gray-700 font-bold">{title}</span>
      <input
        type="text"
        className="mt-0 block w-full px-0.5 rounded-md border-gray-300 focus:ring-0 focus:outline-none focus:border-purple-500"
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
}
