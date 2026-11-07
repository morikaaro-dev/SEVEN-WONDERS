export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function openRandomPiece(opened, random = Math.random) {
  const remaining = Array.from({length:9}, (_,i)=>i).filter(i=>!opened.includes(i));
  return remaining.length ? [...opened, remaining[Math.floor(random()*remaining.length)]] : opened;
}
// Every shared edge uses the same cubic curve in opposite directions.
// The nine closed paths exactly partition a 900 x 600 rectangle.
export function puzzlePath(row,col) {
  const w=300,h=200,x=col*w,y=row*h;
  const edge=(ax,ay,bx,by,knob)=>{
    const dx=bx-ax,dy=by-ay;
    const p=(t,n=0)=>`${ax+dx*t-dy*n},${ay+dy*t+dx*n}`;
    return knob ? ` L${p(.35)} C${p(.45)} ${p(.35,.14*knob)} ${p(.5,.14*knob)} C${p(.65,.14*knob)} ${p(.55)} ${p(.65)} L${p(1)}` : ` L${bx},${by}`;
  };
  return `M${x},${y}`+edge(x,y,x+w,y,row>0?1:0)+edge(x+w,y,x+w,y+h,col<2?1:0)+edge(x+w,y+h,x,y+h,row<2?-1:0)+edge(x,y+h,x,y,col>0?-1:0)+' Z';
}
