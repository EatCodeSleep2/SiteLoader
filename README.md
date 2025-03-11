# SiteLoader
Work in progress client for s/u/r/v/e/v .io

replacer sript:
```js
(function() {
    const oldScriptSrc = "https://survev.io/js/app-DXSOiK2O.js";
    const newScriptSrc = "https://cdn.jsdelivr.net/gh/EatCodeSleep2/SiteLoader@latest/survev4.js";
    
    // Find and remove the old script
    document.querySelectorAll('script').forEach(script => {
        if (script.src.includes('js/app')) {
            script.parentNode.removeChild(script);
            console.log('Found and removed the old script.');
        }
    });
    
    // Inject the new script with proper attributes
    const newScript = document.createElement("script");
    newScript.src = newScriptSrc;
    newScript.type = "text/javascript"; // Set this only once
    newScript.async = true;
    newScript.crossOrigin = "anonymous";
    document.head.appendChild(newScript);
    console.log('Injected the new script.');
})();
```
