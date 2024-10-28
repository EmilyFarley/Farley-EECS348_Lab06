document.getElementById("applyButton").addEventListener("click", updateStyles);

function getRGBValue(id) {
    const value = document.getElementById(id).value;
    return value ? Math.max(0, Math.min(255, value)) : 0;  
}

function updateStyles() {
    const textColor = `rgb(${getRGBValue("textR")}, ${getRGBValue("textG")}, ${getRGBValue("textB")})`;
    const borderColor = `rgb(${getRGBValue("borderR")}, ${getRGBValue("borderG")}, ${getRGBValue("borderB")})`;

    let borderWidth = document.getElementById("borderWidth").value;
    borderWidth = borderWidth ? `${borderWidth}px` : '2px';


    const textBox = document.getElementById("text-box");
    textBox.style.color = textColor;
    textBox.style.borderColor = borderColor;
    textBox.style.borderWidth = borderWidth;


    console.log("Text Color:", textColor);
    console.log("Border Color:", borderColor);
    console.log("Border Width:", borderWidth);
}
