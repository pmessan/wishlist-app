import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { mutate } from 'swr';
import useUser from '../lib/hooks';
import ItemButton from './ItemButton';

export default function Card({
  wishlistItem: {
    _id: itemId, name, imgUrl, imgAlt, description, buyLink, state: initialState, owner,
  },
}) {
  const user = useUser();
  console.log('user:');
  console.log(user);
  const [{ id: userId }] = user;

  const router = useRouter();
  // const contentType = 'multipart/form-data';
  // const [errors, setErrors] = useState({});
  const [, setMessage] = useState('');
  const [itemState, setItemState] = useState(initialState);

  /* The PUT method edits an existing entry in the mongodb database. */
  const patchData = async (newItemState, newUserId) => {
    // const { id } = router.query;
    // console.log('id');
    // console.log(id);

    const formData = new FormData();
    formData.append('id', itemId);
    formData.append('state', newItemState);
    formData.append('owner', newUserId);

    try {
      const res = await fetch(`/api/wishitems/${itemId}`, {
        method: 'PATCH',
        body: formData,
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/wishitems/${itemId}`, data, false); // Update the local data without a revalidation
      router.push('/');
    } catch (error) {
      setMessage('Failed to update item');
    }
  };

  function reserveItem() {
    setItemState('r');
    // patchData(itemState);
  }

  function boughtItem() {
    setItemState('b');
    // patchData(itemState);
  }

  function wishListItem() {
    setItemState('w');
    // patchData(itemState);
  }

  useEffect(() => {
    patchData(itemState, userId);
    setItemState(itemState);
  }, [itemState]);

  return (
    <div className="card lg:h-56 w-80 rounded-lg">
      <div className="card-body relative container">
        <div className="grid grid-cols-3 justify-between">
          <Image src={imgUrl} alt={imgAlt} height="75" width="75" className="rounded col-span-1" />
          <div className="flex flex-col justify-center col-span-2">
            <h1 className="text-center text-xl font-bold">{name}</h1>
          </div>
        </div>
        <div>
          <p className="pt-2">{description}</p>
          <a href={buyLink} className="pt-1 pb-4 lg:pb-0 text-purple-600">View Item &gt;</a>
        </div>
        <div className="inline-flex flex-col items-center lg:absolute sm:flex-row container mx-auto lg:justify-end mt-3 lg:mt-6 bottom-0 lg:bottom-0.5 lg:right-0 lg:space-x-2.5 lg:space-y-0 space-y-1">
          {(owner === 'undefined' || owner === userId) && itemState === 'w' && (<ItemButton id="reserve" buttonText="Reserve" color="#4E962C" onClick={reserveItem} />)}
          {(owner === 'undefined' || owner === userId) && itemState === 'r' && (
          <>
            <ItemButton id="reserve" buttonText="Bought?" color="#4361ee" onClick={boughtItem} />
            <ItemButton id="reserved" buttonText="Reserved!" color="#ff1694" onClick={wishListItem} filled />
          </>
          )}
          {(owner === 'undefined' || owner === userId) && itemState === 'b' && (<ItemButton id="reserve" buttonText="Bought!" color="#f48c06" onClick={reserveItem} filled />
          )}
          {(!(owner === 'undefined') && (owner === !userId)) && <ItemButton id="reserved" buttonText="Reserved" disabled />}
        </div>
        <br />
      </div>
    </div>
  );
}
