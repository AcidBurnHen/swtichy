const size = {
  mobileS: '320px',
  mobileM: '390px',
  mobileL: '460px',
  tabletS: '560px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  atMobileS: `(min-width: ${size.mobileS})`,
  atMobileM: `(min-width: ${size.mobileM})`,
  atMobileL: `(min-width: ${size.mobileL})`,
  atTabletS: `(min-width: ${size.tabletS})`,
  atTablet: `(min-width: ${size.tablet})`,
  atLaptop: `(min-width: ${size.laptop})`,
  atLaptopL: `(min-width: ${size.laptopL})`,
  atDesktop: `(min-width: ${size.desktop})`,
  atDesktopL: `(min-width: ${size.desktop})`,
};
