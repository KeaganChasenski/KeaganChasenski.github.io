import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-02-25T06:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 17,
    link: 'https://visitedplaces.com/view/?map=world&projection=geoOrthographic&theme=dark-green&water=1&graticule=0&names=1&duration=2000&placeduration=100&slider=0&autoplay=1&autozoom=none&autostep=1&home=ZA&places=My%20Home~ZA~1_0_0_-25.2_29*Africa~KE_LS_MW_MU_MZ_NA_TZ_ZW~1.5_18_1.6_-18_-1.6*Asia~KH_VN~1.5_83.8_33.3_-83.8_-33.3*Europe~HR_HU_IE_GB~2.4_12.1_53.3_-12.1_-53.3*North%20America~US~1.6_-100.6_44.4_100.6_-44.4*Oceania~AU~1.9_134.3_-25.7_-134.3_25.7',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Kruger National Park, South Africa',
  },
];

export default data;
