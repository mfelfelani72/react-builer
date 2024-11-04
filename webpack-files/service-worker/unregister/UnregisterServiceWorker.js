const HTMLWebpackPlugin = require("html-webpack-plugin");

class UnregisterServiceWorker {
  apply(compiler) {
    compiler.hooks.compilation.tap("UnregisterServiceWorker", (compilation) => {
      HTMLWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        "UnregisterServiceWorker",
        (data, cb) => {
          // const swScriptTag = `<script defer="defer" src="/ScriptRegister.js"></script>`;
          const swScriptTag = `<script defer="defer">
            window.addEventListener("load", () => {
              navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (let registration of registrations) {
                  registration.unregister();
                }
              });
            });
          </script>`;
          data.html = data.html.replace(`</body>`, `${swScriptTag}</body>`);
          cb(null, data);
        }
      );
    });
  }
}

module.exports = UnregisterServiceWorker;
