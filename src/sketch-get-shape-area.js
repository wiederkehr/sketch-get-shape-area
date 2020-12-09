import sketch from "sketch";
// documentation: https://developer.sketchapp.com/reference/api/

export default function () {
  const doc = sketch.getSelectedDocument();
  const selectedLayers = doc.selectedLayers;
  const selectedCount = selectedCount;

  if (selectedCount === 0) {
    sketch.UI.message("No layers are selected.");
  } else {
    sketch.UI.message(`${selectedCount} layers selected.`);
  }
}