class WaveTableGenerator {

  constructor(audioCtx) {
    this.context = audioCtx
  }

  SineTableGenerator(freq, length) {
    let table = new Float32Array(length);
    for(let t = 0; t < length; t++) {
      table[t] = Math.sin((Math.PI / (this.context.sampleRate / freq)) * t)
    }
    return table
  }
}