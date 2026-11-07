import {test} from 'node:test';
import assert from 'node:assert/strict';
import {shuffle,openRandomPiece,puzzlePath} from '../src/game.mjs';
test('each reveal adds exactly one unique piece and stops at nine',()=>{
 for(let run=0;run<100;run++){
  let opened=[];
  for(let i=1;i<=9;i++){opened=openRandomPiece(opened);assert.equal(opened.length,i);assert.equal(new Set(opened).size,i)}
  assert.deepEqual([...opened].sort(),[0,1,2,3,4,5,6,7,8]);
  assert.deepEqual(openRandomPiece(opened),opened);
 }
});
test('a game bag includes all seven wonders exactly once',()=>{for(let i=0;i<100;i++) assert.deepEqual(shuffle([0,1,2,3,4,5,6]).sort(),[0,1,2,3,4,5,6])});
test('puzzle paths are closed and outer border has no protruding knobs',()=>{
 const paths=Array.from({length:9},(_,i)=>puzzlePath(Math.floor(i/3),i%3));
 assert.equal(new Set(paths).size,9);for(const p of paths)assert.ok(p.endsWith(' Z'));
 assert.ok(paths[0].startsWith('M0,0 L300,0'));
 assert.ok(paths[8].includes('L900,600 L600,600'));
});
