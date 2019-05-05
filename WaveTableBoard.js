class WaveTableBoard {
  constructor(audioCtx) {
    this.tables = {}
    this.context = audioCtx
  }

  addTable(key, waveTable) {
    let buffer = audioCtx.createBuffer(1, waveTable.length, this.context.sampleRate)
    buffer.copyToChannel(waveTable, 0)
    let bufferSource = this.context.createBufferSource()
    bufferSource.buffer = buffer
    bufferSource.connect(this.context.destination)
    bufferSource.loop = true
    this.tables[key] = bufferSource
    this.tables[key].start()
  }

  removeTable(key) {
    if(key in this.tables) {
      delete this.tables[key]
    }
  }

  startTable(key) {
    if(key in this.tables) {
      this.tables[key].connect(this.context.destination)
    } 
  }

  stopTable(key) {
    if(key in this.tables) {
      this.tables[key].disconnect(this.context.destination)
    } 
  }

  getTable(key) {
    if(key in this.tables) {
      this.tables[key].getChannelData(0)
    }
  }

  setTable(key, newTable) {
    if(key in this.tables) {
      this.tables[key].copyToChannel(newTable)
    }
  }
}