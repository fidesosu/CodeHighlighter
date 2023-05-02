document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("theme-select");

  // Get the selected theme from localStorage
  const selectedTheme = localStorage.getItem("selectedTheme");

  // Set the select element's value to the selected theme
  if (selectedTheme !== null) {
    themeSelect.value = selectedTheme;
    alert("Saved theme!");
  } else {
    // If no theme is selected, set the default value to "dark"
    themeSelect.value = "dark";
  }
});

function save_theme(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the selected option
  const themeSelect = document.getElementById("theme-select");
  const selectedOption = themeSelect.options[themeSelect.selectedIndex].value;

  // Save the selected option to localStorage
  localStorage.setItem("selectedTheme", selectedOption);

  // Optionally, you can add a success message here
}

// Define the different CSS styles
var dark_mode = 'pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}*{padding:0;margin:0;}body pre code{background-color:#0d1117;}';
var light_mode = '.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}';
var custom_mode = 'some custom css';

// Apply the default styling based on the user's preference
var style = document.createElement('style');
style.type = 'text/css';

style.innerHTML = localStorage.getItem("selectedTheme") === "dark" ? dark_mode : light_mode;

document.getElementsByTagName('head')[0].appendChild(style);

// Code to convert <pre> tags to <code> tags and highlight syntax
var preTags = document.getElementsByTagName("pre");
for (var i = 0; i < preTags.length; i++) {
  var preTag = preTags[i];
  if (preTag.nextElementSibling && preTag.nextElementSibling.tagName.toLowerCase() === "code") {
    break;
  }
  var codeTag = document.createElement("code");
  codeTag.innerHTML = preTag.innerHTML;
  preTag.innerHTML = "";
  preTag.appendChild(codeTag);
}
hljs.highlightAll();
