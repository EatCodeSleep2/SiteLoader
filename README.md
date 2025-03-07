# SiteLoader
SiteLoader

replacer sript:
```js
(function() {
    const oldScriptSrc = "https://survev.io/js/app-DXSOiK2O.js";
    const newScriptSrc = "https://cdn.jsdelivr.net/gh/EatCodeSleep2/SiteLoader@latest/alert.js";
    
    // Find and remove the old script
    document.querySelectorAll('script').forEach(script => {
        if (script.src === oldScriptSrc) {
            //script.parentNode.removeChild(script);
console.log('found one');
        }
    });
    
    // Inject the new script with proper attributes
    const newScript = document.createElement("script");
    newScript.src = newScriptSrc;
    newScript.type = 'module';
    newScript.type = "text/javascript";
    newScript.async = true;
    newScript.crossOrigin = "anonymous";
    document.head.appendChild(newScript);
})();
```
