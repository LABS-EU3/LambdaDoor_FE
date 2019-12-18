// Media Queries
export const mobilePortrait =
  '(max-device-width : 480px) and (orientation: portrait)';
export const mobileLandscape =
  '(max-device-height : 480px) and (orientation: landscape)';
export const tabletPortrait =
  '(max-device-width : 1024px) and (orientation: portrait)';
export const tabletLandscape =
  '(max-device-height : 800px) and (orientation: landscape)';

// FUNCTIONS
// Flexbox
export const FlexFunc = (direction, justifyC, alignI) => {
  return `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyC};
  align-items: ${alignI};
  `;
};
