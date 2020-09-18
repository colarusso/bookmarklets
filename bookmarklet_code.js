var q = document.createElement('script');
q.src = 'https://colarusso.github.io/boilerplate/scripts.js';
document.body.appendChild(q);

block_to_insert = document.createElement( 'div' );
block_to_insert.id = "button";
block_to_insert.innerHTML = `
<select onchange="insertAtCursor(document.activeElement,collect(this.value))">
 <option value="">CHOOSE ONE</option>
 <option value="0">patience</option>
 <option value="1">office hours</option>
 <option value="2">press</option>
 <option value="3">introduction</option>
 <option value="4">thinking of me</option>
 <option value="5">head down</option>
 <option value="6">consideration</option>
 <option value="7">assistance</option>
 <option value="8">always</option>
</select>
`;
block_to_insert.style.position = "fixed";
block_to_insert.style.top = "10px";
block_to_insert.style.left = "560px";
container_block = document.body;
container_block.appendChild( block_to_insert );
