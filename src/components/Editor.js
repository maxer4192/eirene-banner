import React, { useState } from "react";
import "../styles/editor.scss";
import "react-color";
import DrawingPanel from "./DrawingPanel";
import { CompactPicker } from "react-color";
export default function Editor() {
  const [panelWidth] = useState(100);
  const [panelHeight] = useState(25);
  const [selectedColor, setColor] = useState("#f44336");



  function changeColor(color) {
    setColor(color.hex);
  }

  return (
    <div id="editor">




<h1>Eirene Clan Banner Designer</h1> 
<div id="options">
<CompactPicker color={selectedColor} onChangeComplete={changeColor} />
</div>
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
          
        />

        
      <p class="notifier">In order to reset the canvas completely, you must reload the page. Otherwise, fill in your mistakes with white using the color picker.</p>
    </div>
  );
}
