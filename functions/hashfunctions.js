// reference : https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript

/* 
http://jsfiddle.net/acjg5tL0/12/
<html>
  <input type="text" id="somevalue" value="type something" onkeyup="showResult()">
  <p id="output"></p>
</html>  
<script>
  function showResult() {
    var input = document.getElementById('somevalue').value;
	  document.getElementById('output').innerText  = 'value: ' + jcCyber53(input,99);
  }
</script>
*/

const jcHash = function(s) {  
  let hash = 0;
  if (s.length === 0) return hash;
  for (i = 0; i < s.length; i++) {
    hash  = ((hash << 5) - hash) + s.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return hash & 266338304;
};

const jcCyber53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed; v=0;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    v = 4294967296 * (2097151 & h2) + (h1>>>0);
    return v.toString().slice(-6) //return last 6 characters
};
