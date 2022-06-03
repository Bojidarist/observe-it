exports.isProd = () => {
  return process.env.NODE_ENV === 'production';
};

exports.isDev = () => {
  return process.env.NODE_ENV === 'development';
};
