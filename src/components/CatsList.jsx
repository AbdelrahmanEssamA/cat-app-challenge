import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const CatsList = ({ catsData, filter }) => {
  return (
    <div className="grid grid-cols-1 divide-y mt-4">
      {catsData.map(
        (cat) => cat.name.toLowerCase().includes(filter) && <ListItem cat={cat} key={cat.id} />,
      )}
    </div>
  );
};

export default CatsList;
CatsList.propTypes = {
  catsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      birthDate: PropTypes.string,
      name: PropTypes.string,
      ownerName: PropTypes.string,
      thumbnailURL: PropTypes.string,
      viewsCount: PropTypes.number,
    }),
  ),
  filter: PropTypes.string,
};
