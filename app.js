let audioCtx;
let beatAudio;
let mediaRecorder;
let chunks = [];

async function initAudio() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  await audioCtx.resume();
}
