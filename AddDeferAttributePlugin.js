const HTMLWebpackPlugin = require("html-webpack-plugin");

class AddDeferAttributePlugin {
    apply(compiler) {
      compiler.hooks.compilation.tap('AddDeferAttributePlugin', (compilation) => {
        HTMLWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
          'AddDeferAttributePlugin',
          (data, cb) => {
            data.html = data.html.replace(
              /<link href="([^"]+\.css)" rel="stylesheet">/g,
              // '<link defer="defer" href="$1" rel="stylesheet">'
              '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=stylesheet">'
            );
            cb(null, data);
          }
        );
      });
    }
  }
  
  module.exports = AddDeferAttributePlugin;