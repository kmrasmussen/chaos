class KeyBoard {
  constructor(audioCtx, waveTableBoard, waveTableGenerator, musicData) {
    this.context = audioCtx
    this.data = musicData
    this.board = waveTableBoard
    this.generator = waveTableGenerator
  }

  noteOn = (e) => {
    console.log(e);
    console.log(e.note.name)
    console.log(this)
    let freq = this.data.pitchToFreq(e.note.name, e.note.octave);
    let table = this.generator.SineTableGenerator(freq, this.context.sampleRate);
    let pitch = e.note.name + e.note.octave.toString()
    this.board.addTable(pitch, table)
    this.board.startTable(pitch)
  }

  noteOff = (e) => {
    console.log(e);
    console.log(e.note.name)
    let pitch = e.note.name + e.note.octave.toString()
    this.board.stopTable(pitch)
  }
}