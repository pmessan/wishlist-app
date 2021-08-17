import Image from 'next/image';
import { useState } from 'react';
import ItemButton from './ItemButton';

export default function Card({
  wishlistItem: {
    id, name, imgUrl, imgAlt, description, buyLink,
  },
}) {
  const [itemState, setItemState] = useState('w');

  function reserveItem() {
    setItemState('r');
    // console.log(itemState);
  }

  function boughtItem() {
    setItemState('b');
    // console.log(itemState);
  }

  function wishListItem() {
    setItemState('w');
    // console.log(itemState);
  }

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
          <p className="pt-2">{description}</p>
          <p className="pt-1">{itemState}</p>
          <a href={buyLink} className="pt-1 text-purple-600">View Item &gt;</a>
        </div>
        <div className="flex justify-end absolute bottom-2.5 right-2.5 space-x-2.5">
          {itemState === 'w' && <ItemButton id="reserve" buttonText="Reserve" color="#4E962C" onClick={reserveItem} />}
          {itemState === 'r'
          && (
          <>
            <ItemButton id="reserve" buttonText="Bought?" color="#4361ee" onClick={boughtItem} />
            <ItemButton id="reserved" buttonText="Reserved!" color="#ff1694" onClick={wishListItem} />
          </>
          )}
          {itemState === 'b' && <ItemButton id="reserve" buttonText="Bought!" color="#f48c06" onClick={reserveItem} />}
        </div>
        <br />
      </div>
    </div>
  );
}
