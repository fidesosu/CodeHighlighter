// Create a style tag and set its content to the CSS rules
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}*{padding:0;margin:0;}body pre code{background-color:#0d1117;}';

// Append the style tag to the <head> section of the document
document.getElementsByTagName('head')[0].appendChild(style);

var preTags = document.getElementsByTagName("pre");

for (var i = 0; i < preTags.length; i++) {
  var preTag = preTags[i];

  // Check if there is already a <code> tag after the <pre> tag
  if (preTag.nextElementSibling && preTag.nextElementSibling.tagName.toLowerCase() === "code") {
    continue;
  }

  var codeTag = document.createElement("code");
  codeTag.innerHTML = preTag.innerHTML;

  preTag.innerHTML = "";
  preTag.appendChild(codeTag);
}

hljs.highlightAll();
