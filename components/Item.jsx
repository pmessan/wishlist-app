import Image from 'next/image';

function Item({
  wishlistItem: {
    name, imgUrl, imgAlt, description, buyLink,
  },
}) {
  return (
    <>
      <div className="my-4 rounded-xl mx-6 h-24 bg-gray-300 grid grid-cols-4">
        <div className="relative col-span-1 w-full object-cover object-center" data-bs-toggle="collapse" href={`#${name}`} role="button" aria-expanded="false" aria-controls={`#${name}`}>
          <Image className="rounded-l-xl" src={imgUrl} alt={imgAlt} layout="fill" objectFit="fill" />
        </div>
        <div className="block col-span-3 px-3">
          <h1 className="mt-2 font-bold">{name}</h1>
          <p className="text-xs xl:text-md text-left mb-1" data-bs-toggle="collapse" href={`#${name}`} role="button" aria-expanded="false" aria-controls={`#${name}`}>{description}</p>
          <a href={buyLink} className="sm:text-xs xl:text-md text-left text-purple-600">View item &gt;</a>
        </div>
      </div>

      <div className="collapse" id={name}>
        <div className="px-6 my-2 flex justify-center bg-gray-200">
          <button className="btn btn-primary" type="button" href="#">Reserve</button>
        </div>
      </div>
    </>

  );
}

export default Item;
