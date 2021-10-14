const { userAgent } = navigator;
const isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
  userAgent
);
const isMobile = /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
  userAgent
);

const helpers = {
  //TODO: JsDoc is Missing
  isMobile: () => Boolean(isMobile && !isTablet),
  isTablet: () => isTablet,
};

export default helpers;
