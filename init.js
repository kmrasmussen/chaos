// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let wtBoard = new WaveTableBoard(audioCtx)
let wtGenerator = new WaveTableGenerator(audioCtx)
let musicData = new MusicData()
let kBoard = new KeyBoard(audioCtx, wtBoard, wtGenerator, musicData)