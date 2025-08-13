import React, { Suspense } from 'react';
import Store from '../Components/Store';
import { CardSkelten } from '../Components/sklten/CardSkelten';

export default function StorePage() {
  return (
    <Suspense fallback={
      <div className="px-2 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <CardSkelten key={idx} />
        ))}
      </div>
    }>
      <Store />
    </Suspense>
  );
}
