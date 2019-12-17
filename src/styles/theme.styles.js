//Media Queries
export const mobile = '(max-device-width : 480px)';
export const tablet = '(max-device-width : 1024px)';

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
