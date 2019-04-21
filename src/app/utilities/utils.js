const validUrl = require("valid-url");

const validateUrl = url => {
  const isValidUrl = validUrl.isUri(url);
  return !!isValidUrl;
};

const copyTextToClipboard = text => {
  const e = document.createElement("input");
  e.style.position = "absolute";
  e.style.left = "-9999px";
  e.value = text;
  document.body.appendChild(e);
  e.select();
  try {
    document.execCommand("copy");
  } catch (error) {}

  document.body.removeChild(e);
};

export { validateUrl, copyTextToClipboard };
