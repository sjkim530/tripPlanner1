 
const buildmarker =function(typeOfMarker){
  const markerDomEl = document.createElement("div"); 
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (typeOfMarker==='Activity'){
    markerDomEl.style.backgroundImage="url(http://i.imgur.com/WbMOfMl.png)"
  } else if (typeOfMarker==='Hotel'){
      markerDomEl.style.backgroundImage="url(http://i.imgur.com/D9574Cu.png)"
  } else if
  (typeOfMarker==='Restaurant')
  {
     markerDomEl.style.backgroundImage="url(http://i.imgur.com/cqR6pUI.png)"
  }
  return markerDomEl
}

export default buildmarker;