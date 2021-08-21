import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

const fetcher = (url) => fetch(url)
  .then((r) => r.json())
  .then((data) => ({ user: data?.admin || null }));

export function useAdmin({ redirectTo, redirectIfFound } = {}) {
  const { data, error } = useSWR('/api/admin', fetcher);
  console.log('error:');
  console.log(error);
  console.log('data:');
  console.log(data);
  const admin = data?.user;
  const finished = Boolean(data);
  const hasAdmin = Boolean(admin);

  useEffect(() => {
    if (!redirectTo || !finished) return;
    if (
      // If redirectTo is set, redirect if the admin was not found.
      (redirectTo && !redirectIfFound && !hasAdmin)
      // If redirectIfFound is also set, redirect if the admin was found
      || (redirectIfFound && hasAdmin)
    ) {
      Router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, finished, hasAdmin]);

  return error ? null : admin;
}
