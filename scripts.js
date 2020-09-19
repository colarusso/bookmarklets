if (document.getElementById("boilerplate")) {
  document.getElementById("boilerplate").remove();
}

function collect(choice) {

 to = "" 
  
 if (choice >= 0 && choice<=10) {
  if (!document.querySelector('[aria-label="Reading Pane"]').innerHTML.match(/To:.*>\s?(.*)<\/li>/)){
   to = prompt("To?");
  } else {
   to = document.querySelector('[aria-label="Reading Pane"]').innerHTML.match(/To:.*>\s?(.*)<\/li>/)[1].split(" ")[0]
  }
 } else if (choice == 10000) {
   window.open("https://github.com/colarusso/boilerplate/edit/master/scripts.js");
 }

 if (choice==3) {
   introduced = prompt("Name of introduced?");
 } else {
   introduced = "";
 }

 text_to_insert_arry = [

// 0
to + `,\n\nThank you for your patience. `

// 1
,to + `,\n\nThank you for reaching out. If you'd like to have a call. You can find my availability and book a time here: https://calendly.com/dcolarusso/office-hours\n\nI look forward to speaking soon. `

// 2
,to + `,\n\nThank you for reaching out. If you'd like to have a call. You can find my availability and book a time here: https://calendly.com/dcolarusso/call\n\nI look forward to speaking soon. ` 
  
// 3
,to + `,\n\nThank you for reaching out. If you'd like to have a call. You can find my availability and book a time here:  https://calendly.com/dcolarusso/https://calendly.com/dcolarusso/call7546\n\nI look forward to speaking soon. `

// 4
,to + `,\n\nThank you for the introduction. I'm moving you to BCC to avoid cluttering your inbox. \n\n` + introduced + `,\n\nIf you would like to jump on a call. You can find my availability and book a time here: https://calendly.com/dcolarusso/call\n\nI look forward to speaking soon. `
 
// 5
,to + `,\n\nThank you for thinking of me. I look forward to giving this a look. `

// 6
,to + `,\n\nThank you for thinking of me. I hadn't seen this. `
  
// 7
,to + `,\n\nThank you. I'm head down on something right now, but I'll get back to you soon. `

// 8
,to + `,\n\nThat's a tough one. I'm not sure I have much to offer there. `

// 9
,to + `,\n\nThank you for reaching out. However, I'm not exactly sure what you're looking for. Could you be more specific about an ask, something more than just "looking to talk?" How exactly do you think I could help? `
  
// 10
,to + `,\n\nThank you for your interest in Learned Hands (https://learnedhands.law.stanford.edu/). The program allows you to track your hours within the app and requires no direct supervision. We hope that you find your work on the project fulfilling and that you'll share it with your colleagues.\n\nYou can see how we're putting your work to use here: https://spot.suffolklitlab.org/\n\nIf your pro bono office would like to learn more, please let me know. `
  
// 11
,`You can find my availability and book a time here: https://calendly.com/dcolarusso/call\n\nI look forward to speaking soon. `
  
// 12
,`Thank you for your time. `

// 13
,`Thank you for your time and consideration. ` 
  
// 14
,`Thank you for your time and assistance. `

// 15
,`As always, thank you for your time and assistance. `

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

block_to_insert = document.createElement( 'div' );
block_to_insert.id = "boilerplate";
block_to_insert.innerHTML = `
<select onchange="insertAtCursor(document.activeElement,collect(this.value))">
 <option value="-1">CHOOSE BOILERPLATE</option>
 <option disabled>──────────</option>
 <option disabled>ADDRESS + BODY:</option>
 <option value="0">THX 4 Patience</option>
 <option value="1">Book Office Hours</option>
 <option value="2">Book Call</option>
 <option value="3">Book Press Call</option>
 <option value="4">Thx 4 Intro; Book Call.</option>
 <option value="5">Thx 4 thinking of me</option>
 <option value="6">Thx; Hadn't Seen</option>
 <option value="7">Head Down; Later</option>
 <option value="8">Tough One</option>
 <option value="9">Clarify Ask</option>
 <option value="10">LH Volunteer</option>
 <option disabled>──────────</option>
 <option disabled>STRING:</option>
 <option value="11">Book Call</option>
 <option value="12">Thx 4 UR Time</option>
 <option value="13">Thx 4 UR Time &amp; Consideration</option>
 <option value="14">Thx 4 UR Time &amp; Assistance</option>
 <option value="15">As Always, Thx</option>
 <option disabled>──────────</option>
 <option value="10000">Edit Bookmarklet</option>
</select>
`;
block_to_insert.style.position = "fixed";
block_to_insert.style.top = "60px";
block_to_insert.style.right = "10px";
container_block = document.body;
container_block.appendChild( block_to_insert );
