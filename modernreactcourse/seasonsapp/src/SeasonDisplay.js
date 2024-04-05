import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  winter: {
    text: 'It\'s cold outside',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h2>{text}</h2>
      <i className={`${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay