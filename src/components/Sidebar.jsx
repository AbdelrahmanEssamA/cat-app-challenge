import React from 'react';

const Sidebar = () => {
  const test = 'abdo';
  return (
    <div className="w-11/12 xl:w-3/4 mx-auto">
      <div className="xl:grid grid-cols-10 mt-36 xl:mt-20 relative gap-12 overflow-hidden">
        <h1>{test}</h1>
      </div>
    </div>
  );
};

export default Sidebar;
