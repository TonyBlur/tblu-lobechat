// mobile 设备宽度
// https://github.com/ant-design/ant-design/blob/master/components/theme/util/alias.ts#L28
export const screenSM = 576;
// https://github.com/ant-design/ant-design/blob/master/components/theme/util/alias.ts#L29
export const screenMD = 768;

/**
 * check mobile device in browser
 */
export const isMobileScreen = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.innerWidth <= screenMD;
};
