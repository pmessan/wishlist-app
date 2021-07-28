export default function Header({ title }) {
  return (
    <div id="modal" className="flex flex-row items-center justify-center">
      <h1 className="font-extrabold text-center lg:text-4xl text-2xl mb-6 text-gray-100">{title}</h1>
    </div>
  );
}
