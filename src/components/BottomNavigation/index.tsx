/** @format */
import './bottomNavigation.css';
const PhoneIcon = () => (
  <svg
    version='1.1'
    id='Icons'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    className='icon-default'>
    <path
      className='st0'
      d='M17.6,18.8c-0.4,0.4-0.8,1-1.1,1.5c-1.8-1.4-3.4-3.1-4.8-4.8c0.6-0.3,1.1-0.7,1.5-1.1c2-2,1.3-4.6-0.7-6.6
	S8,5,5.9,7.1s-2.3,5.7-0.7,8c2.9,4.4,7.3,8.8,11.7,11.7c2.4,1.6,6,1.3,8-0.7s1.3-4.6-0.7-6.6S19.6,16.7,17.6,18.8z'
    />
  </svg>
);

const ContactIcon = () => (
  <svg
    className='icon-default'
    width='30px'
    height='30px'
    viewBox='0 0 32 32'
    id='icon'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      id='_inner-path_'
      data-name='&lt;inner-path&gt;'
      className='cls-1'
      d='M8.0071,24.93A4.9958,4.9958,0,0,1,13,20h6a4.9959,4.9959,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0ZM20.5,12.5A4.5,4.5,0,1,1,16,8,4.5,4.5,0,0,1,20.5,12.5Z'
    />
    <path d='M26.7489,24.93A13.9893,13.9893,0,1,0,2,16a13.899,13.899,0,0,0,3.2511,8.93l-.02.0166c.07.0845.15.1567.2222.2392.09.1036.1864.2.28.3008.28.3033.5674.5952.87.87.0915.0831.1864.1612.28.2417.32.2759.6484.5372.99.7813.0441.0312.0832.0693.1276.1006v-.0127a13.9011,13.9011,0,0,0,16,0V27.48c.0444-.0313.0835-.0694.1276-.1006.3412-.2441.67-.5054.99-.7813.0936-.08.1885-.1586.28-.2417.3025-.2749.59-.5668.87-.87.0933-.1006.1894-.1972.28-.3008.0719-.0825.1522-.1547.2222-.2392ZM16,8a4.5,4.5,0,1,1-4.5,4.5A4.5,4.5,0,0,1,16,8ZM8.0071,24.93A4.9957,4.9957,0,0,1,13,20h6a4.9958,4.9958,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0Z' />
    <rect
      id='_Transparent_Rectangle_'
      data-name='&lt;Transparent Rectangle&gt;'
      className='cls-1'
      width='32'
      height='32'
    />
  </svg>
);
const SettingIcon = () => (
  <svg
    className='icon-default'
    version='1.1'
    id='Layer_1'
    viewBox='0 0 455 455'>
    <path
      d='M455,257v-70h-63.174c-4.423-20.802-12.706-40.174-24.066-57.334l42.32-42.32l-49.498-49.498l-42.756,42.756
	C299.911,69.199,279.682,61.104,258,57.183V0h-70v59.319c-21.306,5.221-41.009,14.515-58.24,27.014L88.346,44.92L38.849,94.417
	l43.979,43.979C72.59,156.135,65.513,175.926,62.359,197H0v70h66.623c5.396,19.392,14.195,37.364,25.711,53.24L45.92,366.654
	l49.497,49.498l48.979-48.979c16.329,9.424,34.397,16.171,53.604,19.645V455h70v-70.319c18.91-4.634,36.557-12.476,52.334-22.92
	l47.32,47.32l49.498-49.498l-47.756-47.756c10.524-16.531,18.223-35.033,22.431-54.827H455z M228,309.5
	c-48.248,0-87.5-39.252-87.5-87.5s39.252-87.5,87.5-87.5s87.5,39.252,87.5,87.5S276.248,309.5,228,309.5z'
    />
  </svg>
);
const BottomNavigation = ({
  activeTab = 0,
  onChangeTab = (tab: number) => {},
}) => {
  return (
    <div className='bottom-navigation'>
      <button
        className={activeTab === 0 ? 'active' : ''}
        onClick={() => onChangeTab(0)}>
        <PhoneIcon />
      </button>
      <button
        className={activeTab === 1 ? 'active' : ''}
        onClick={() => onChangeTab(1)}>
        <ContactIcon />
      </button>
      <button
        className={activeTab === 2 ? 'active' : ''}
        onClick={() => onChangeTab(2)}>
        <SettingIcon />
      </button>
      <button
        className={`${activeTab === 3 ? 'active' : ''}`}
        onClick={() => onChangeTab(3)}>
        <span className='point'>
          <span />
        </span>
      </button>
    </div>
  );
};

export default BottomNavigation;
