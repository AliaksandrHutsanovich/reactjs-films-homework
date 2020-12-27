const transformTime = (runtime) => {
  if (runtime) {
    const hours = Math.floor(Number(runtime) / 60);
    const minutes = Number(runtime) - hours * 60;
    return `${hours ? `${hours}h ` : ''}${minutes}m`;
  }
  return '';
};

export default transformTime;
