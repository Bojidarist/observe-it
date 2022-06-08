exports.entityOutput = (id) => {
  return { cached: false, latestCacheUpdate: new Date(), data: { id } };
};
