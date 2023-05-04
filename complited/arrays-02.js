// function findShort(s){
//     return s.split(' ').sort((a, b) => a.length - b.length)[0].length;
// }

function findShort(s) {
  const lengths = s.split(' ').map(item => item.length);

  return Math.min(...lengths);
   
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));