import Image from 'next/image';
import ItemButton from './ItemButton';

export default function Card({
  wishlistItem: {
    name, imgUrl, imgAlt, description, buyLink,
  },
}) {
  return (
    <div className="card" style={{ width: '22rem', height: '14rem', borderRadius: '0.5rem' }}>
      <div className="card-body relative">
        <div className="grid grid-cols-3 justify-between">
          <Image src={imgUrl} alt={imgAlt} height="75" width="75" className="rounded col-span-1" />
          <div className="flex flex-col justify-center col-span-2">
            <h1 className="text-center text-xl font-bold">{name}</h1>
          </div>
        </div>
        <div>
          <p className="card-text py-6">{description}</p>
          <a href={buyLink} className="card-link text-purple-600">View Item &gt;</a>
        </div>
        <div className="flex justify-end absolute bottom-2.5 right-2.5 space-x-2.5">
          {/* <Button /> */}
          <ItemButton />
        </div>
        <br />
      </div>
    </div>
  );
}
