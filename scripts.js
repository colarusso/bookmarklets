function collect(choice) {

 if (choice<=5) {
  if (!document.querySelector('[aria-label="Reading Pane"]').innerHTML.match(/To:.*>\s?(.*)<\/li>/)){
   to = prompt("To?");
  } else {
   to = document.querySelector('[aria-label="Reading Pane"]').innerHTML.match(/To:.*>\s?(.*)<\/li>/)[1].split(" ")[0]
  }
 } else {
  to = ""
 }

 if (choice==3) {
   introduced = prompt("Name of introduced?");
 } else {
   introduced = "";
 }

 text_to_insert_arry = [

to + `,\n\nThank you for your patience. `

,to + `,\n\nThank you for reaching out. If you'd like to have a call. You can find my availability and book a time here: https://calendly.com/dcolarusso/office-hours\n\nI look forward to speaking soon. `

,to + `,\n\nThank you for reaching out. If you'd like to have a call. You can find my availability and book a time here:  https://calendly.com/dcolarusso/https://calendly.com/dcolarusso/call7546\n\nI look forward to speaking soon. `

,to + `,\n\nThank you for the introduction. I'm moving you to BCC to avoid cluttering your inbox. \n\n` + introduced + `,\n\nIf you would like to jump on a call. You can find my availability and book a time here: https://calendly.com/dcolarusso/call\n\nI look forward to speaking soon. `

,to + `,\n\nThank you for thinking of me. I look forward to giving this a look. `

,to + `,\n\nThank you. I'm head down on some work today, but I'll get back to you soon. `

,`Thank you for your time and consideration. `

,`Thank you for your time and assistance. `

,`As always, thank you for your time and assistance. `

,``
];

 return text_to_insert_arry[choice];
}

//text_to_insert = text_to_insert_arry[choice];

function insertAtCursor (input, textToInsert) {
  // See https://www.everythingfrontend.com/posts/insert-text-into-textarea-at-cursor-position.html
  const isSuccess = document.execCommand("insertText", false, textToInsert);

  // Firefox (non-standard method)
  if (!isSuccess && typeof input.setRangeText === "function") {
    const start = input.selectionStart;
    input.setRangeText(textToInsert);
    // update cursor to be at the end of insertion
    input.selectionStart = input.selectionEnd = start + textToInsert.length;

    // Notify any possible listeners of the change
    const e = document.createEvent("UIEvent");
    e.initEvent("input", true, false);
    input.dispatchEvent(e);
  }
} 
