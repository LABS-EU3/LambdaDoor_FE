const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#BB1333',
      '@btn-default-bg': '#40A9FF',
      '@btn-default-color': '#fff',
      '@switch-color': '#40A9FF',
      '@font-family': "'Nunito', sans-serif",
    },
  })
);
