function loadCSS() {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/main.css';
      link.onload = () => resolve();
    //   link.onerror = () => reject(new Error(Failed to load CSS file: ${href}));
      document.head.appendChild(link);
    });
  }

  export default loadCSS;