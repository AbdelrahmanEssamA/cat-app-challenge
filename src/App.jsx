import React from 'react';

import Sidebar from './components/Sidebar';
import CatCard from './components/CatCard';

function App() {
  return (
    <div className="w-11/12 md:w-10/12 xl:w-3/4 mx-auto h-screen">
      <div className="xl:grid grid-cols-3 lg:py-5  gap-8 md:h-full md:m-0 ">
        <Sidebar />
        <CatCard />
      </div>
    </div>
  );
}

export default App;
