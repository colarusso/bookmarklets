if (document.getElementById("boilerplate")) {
  document.getElementById("boilerplate").remove();
}

function collect(choice) {

 to = "" 
  
 if (choice >= 0 && choice<=14) {
  if (!document.querySelector('[aria-label="Reading Pane"]').innerHTML.match(/To:.*>\s?(.*)<\/li>/)){
   to = prompt("To?");
  } else {
   to = document.querySelector('[aria-label="Reading Pane"]').innerHTML.match(/To:.*>\s?(.*)<\/li>/)[1].split(" ")[0]
  }
 } else if (choice == 16) {
   window.open("https://doodle.com/create");          
 } else if (choice == 10000) {
   window.open("https://github.com/colarusso/bookmarklets/edit/master/boilerplate/scripts.js");
 } else if (choice == 20000) {
   window.open("https://caiorss.github.io/bookmarklet-maker/");
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
,to + `,\n\nGladly, with one condition. It's my personal policy not to sit on all-male panels. So, I'd love to participate as long as it's not a manel. `

// 6
,to + `,\n\nThanks. I share this. `

// 7
,to + `,\n\nThank you for thinking of me. I look forward to giving this a look. `
   
// 8
,to + `,\n\nThank you for thinking of me. I hadn't seen this. `
  
// 9
,to + `,\n\nThank you. I'm head down on something right now, but I'll get back to you soon. `

// 10
,to + `,\n\nThat's a tough one. I'm not sure I have much to offer there. `

// 11
,to + `,\n\nThank you for reaching out. However, I'm not exactly sure what you're looking for. Could you be more specific about an ask, something more than just "looking to talk?" How exactly do you think I could help? FWIW, this bot might help. https://colarusso.github.io/faq/coldcall.html`

// 12
,to + `,\n\nThank you for your interest in Learned Hands (https://learnedhands.law.stanford.edu/). The program allows you to track your hours within the app and requires no direct supervision. We hope that you find your work on the project fulfilling and that you'll share it with your colleagues.\n\nYou can see how we're putting your work to use here: https://spot.suffolklitlab.org/\n\nIf your pro bono office would like to learn more, please let me know. `

//13
,to + `,\n\nThis server is for volunteers and students associated with the Suffolk LIT Lab--not the general public. If you would like a Docassemble server, we recommend either https://www.documate.org/ or https://www.semblehost.com/ `
   
//14
,to + `,\n\nI recieve a number of cold emails. So, I put together this interactive decision tree to help shave a few emails off any back and forth. Use it to: book a meeting/call, learn about my classes, ask about speaking engagements, and much more. ;)\n\nhttps://colarusso.github.io/faq/coldcall.html`
   
// -------------------------------------   
// -------------------------------------      
 
// 15
,`You can find my availability and book a time here: https://calendly.com/dcolarusso/call\n\nI look forward to speaking soon. `
  
// 16
,`To help schedule a time, I've set up a Doodle. I'll loop back after folks have a chance to mark their availability.\n\n `
   
// 17
,`Thank you for your time. `

// 18
,`Thank you for your time and consideration. ` 
  
// 19
,`Thank you for your time and assistance. `

// 20
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
 <option disabled>STARTER:</option>
 <option value="0">THX 4 Patience</option>
 <option value="1">Book Office Hours</option>
 <option value="2">Book Call</option>
 <option value="3">Book Press Call</option>
 <option value="4">Thx 4 Intro; Book Call.</option>
 <option value="5">Thx; No Manals.</option>
 <option value="6">Thx; I'll share.</option>
 <option value="7">Thx 4 thinking of me</option>
 <option value="8">Thx; Hadn't Seen</option>
 <option value="9">Head Down; Later</option>
 <option value="10">Tough One</option>
 <option value="11">Clarify Ask</option>
 <option value="12">LH Volunteer</option>
 <option value="13">Docassemble Server</otion>
 <option value="14">Cold Call</otion>
 <option disabled>──────────</option>
 <option disabled>STRING:</option>
 <option value="15">Book Call</option>
 <option value="16">Doodle</option>
 <option value="17">Thx 4 UR Time</option>
 <option value="18">Thx 4 UR Time &amp; Consideration</option>
 <option value="19">Thx 4 UR Time &amp; Assistance</option>
 <option value="20">As Always, Thx</option>
 <option disabled>──────────</option>
 <option value="10000">Edit Bookmarklet</option>
 <option value="20000">Bookmarklet Maker</option>
</select>
&nbsp;<a href="javascript:void('');" onClick="document.getElementById('boilerplate').remove();" style="color:white;">X</a>
`;
block_to_insert.style.position = "fixed";
block_to_insert.style.top = "15px";
block_to_insert.style.right = "550px";
container_block = document.body;
container_block.appendChild( block_to_insert );
