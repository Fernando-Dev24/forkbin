export const forkbinTheme = {
  base: "vs-dark",
  inherit: true,
  rules: [
    // Tokens para JSON
    { token: "string.key.json", foreground: "8B7FFF", fontStyle: "bold" }, // Morado más claro

    // String values - más vibrante
    { token: "string.value.json", foreground: "4ADE80" }, // Verde más brillante (#22C55E → #4ADE80)
    { token: "string.quoted.double.json", foreground: "4ADE80" },

    // Numbers - mantener
    { token: "number", foreground: "EF4444" },
    { token: "constant.numeric.json", foreground: "EF4444" },

    // Delimiters - un toque más claro
    { token: "delimiter", foreground: "A0A0A0" }, // Más claro que #EAEAEA
  ],
  colors: {
    // --- EDITOR PRINCIPAL ---
    "editor.background": "#1a1b1e",
    "editor.foreground": "#EAEAEA",

    // --- CURSOR Y SELECCIÓN ---
    "editorCursor.foreground": "#615FFF",
    "editor.selectionBackground": "#615FFF40",
    "editor.inactiveSelectionBackground": "#615FFF20",
    "editor.selectionHighlightBackground": "#615FFF20",

    // --- LÍNEA ACTIVA ---
    "editor.lineHighlightBackground": "#3A3735",
    "editor.lineHighlightBorder": "#00000000",

    // --- NÚMEROS DE LÍNEA ---
    "editorLineNumber.foreground": "#5A5A5A",
    "editorLineNumber.activeForeground": "#EAEAEA",

    // --- GUTTER (Margen izquierdo) ---
    "editorGutter.background": "#1a1b1e",

    // --- SCROLLBAR ---
    "scrollbar.shadow": "#00000000",
    "scrollbarSlider.background": "#615FFF33",
    "scrollbarSlider.hoverBackground": "#615FFF55",
    "scrollbarSlider.activeBackground": "#615FFF77",

    // --- WIDGETS (Autocompletado, Hover, etc) ---
    "editorWidget.background": "#3A3735",
    "editorWidget.border": "#615FFF",
    "editorSuggestWidget.background": "#3A3735",
    "editorSuggestWidget.border": "#615FFF",
    "editorSuggestWidget.foreground": "#EAEAEA",
    "editorSuggestWidget.selectedBackground": "#615FFF40",
    "editorHoverWidget.background": "#3A3735",
    "editorHoverWidget.border": "#615FFF",

    // --- ERRORES Y WARNINGS ---
    "editorError.foreground": "#EF4444",
    "editorWarning.foreground": "#615FFF",
    "editorInfo.foreground": "#22C55E",

    // --- BRACKETS MATCHING ---
    "editorBracketMatch.background": "#615FFF30",
    "editorBracketMatch.border": "#615FFF",

    // --- INDENTACIÓN ---
    "editorIndentGuide.background": "#3A373530",
    "editorIndentGuide.activeBackground": "#615FFF50",

    // --- INPUTS ---
    "input.background": "#3A3735",
    "input.border": "#615FFF",
    "input.foreground": "#EAEAEA",
    "input.placeholderForeground": "#888888",

    // --- MINIMAP ---
    "minimap.background": "#1a1b1e",
    "minimap.selectionHighlight": "#615FFF40",

    // --- BREADCRUMBS ---
    "breadcrumb.background": "#1a1b1e",
    "breadcrumb.foreground": "#EAEAEA",
  },
};
