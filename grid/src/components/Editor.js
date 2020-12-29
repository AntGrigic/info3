import React,  {useState} from 'react';
import '../styles/Editor.scss';
import { ChromePicker } from 'react-color';
import Grid from './Grid';

function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("start drawing");
    const [selectedColor, setColor] = useState("#f44336");

    function initializeDrawingPanel() {
        if ((panelWidth === panelHeight) && (panelWidth >= 16 && panelWidth <= 64) && (panelHeight >= 16 && panelHeight <= 64)) {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "start drawing" 
            ? setButtonText("reset") 
            : setButtonText("start drawing");
        }
    }

    function changeColor(color) {
        setColor(color.hex);
    }

  return (
    <div id="editor">
        <h1>Grid editor</h1>
        {hideDrawingPanel && <h2>Enter panel height and width</h2>}
        {hideDrawingPanel && (
            <div id="options">
                <div className="option">
                    <input 
                        type="number" 
                        className="panelInput"
                        min="16"
                        max="64" 
                        defaultValue={panelWidth} 
                        onChange={(e) => {setPanelWidth(e.target.value)}} 
                        />
                    <span>Height</span>
                </div>
                <div className="option">
                    <input 
                        type="number" 
                        className="panelInput"
                        min="16"
                        max="64" 
                        defaultValue={panelHeight} 
                        onChange={(e) => {setPanelHeight(e.target.value)}} 
                        />
                    <span>Width</span>
                </div>
            </div>)}
        <button onClick={initializeDrawingPanel} className="button">{buttonText}</button>

        {hideOptions && <ChromePicker color={selectedColor} onChangeComplete={changeColor} /> }

        {hideOptions && (
        <Grid 
            width={panelWidth}
            height={panelHeight}
            selectedColor={selectedColor}
        /> )}
    </div>
  );
}

export default Editor;