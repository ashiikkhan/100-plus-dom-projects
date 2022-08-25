/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */
//steps

//step-1 create onload handler
window.onload = () => {
  main();
};
function main() {
  //references
  const root = document.getElementById('root');
  const changeBtn = document.getElementById('change-btn');
  const output = document.getElementById('output');
  const copyBtn = document.getElementById('copy-btn');

  //change btn click event
  changeBtn.addEventListener('click', function () {
    const bgColor = generateHexcolor();
    root.style.backgroundColor = bgColor;

    // display hex color in output
    output.value = bgColor;
    copyBtn.innerText = 'Copy';
  });

  // copy button click event
  copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(output.value);
    copyBtn.innerText = 'Color copied to clipboard';
  });
}
//step-2 random color generate function
function generateHexcolor() {
  //#000000 #ffffff
  //255, 255, 255 => #ffffff
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
//step-3 collect all necessary references

//step-4 handle the change button click event

//step-5 handle the copy button click event

/**important notes:
 * rgb to hex convert:
 * variable which contains a number from 0 to 255;
 * variable.toString(16)
 */
