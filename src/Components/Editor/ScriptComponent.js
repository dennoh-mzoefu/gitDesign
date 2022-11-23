const ScriptComponent = (callback) => {
  const existingScript = document.getElementById("editor__container");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "/main.js";
    script.id = "googleMaps";
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default ScriptComponent;
