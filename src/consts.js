export const handleStopPropagation = (event) => {
  if (event?.stopPropagation) {
    event.stopPropagation();
  }
};
