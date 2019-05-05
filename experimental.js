function mutation() {
  let buffer = audioCtx.createBuffer(1, audioCtx.sampleRate, audioCtx.sampleRate)
  let channel1 = buffer.getChannelData(0)
  for(let t = 0; t < buffer.length; t++) {
    channel1[t] = Math.sin((Math.PI / (buffer.sampleRate / 440))*t)
  }
  let bufferSource = audioCtx.createBufferSource()
  bufferSource.buffer = buffer
  bufferSource.connect(audioCtx.destination)
  bufferSource.loop = true
  bufferSource.start()
  
  // White noise mutation
  /*
  setInterval(function() {
    loci = Math.round(Math.random() * buffer.length)
    channel1[loci] = Math.random() * 2 - 1;
  }, 1000)
  */
  setInterval(function() {
    loci = Math.round(Math.random() * buffer.length)
    channel1[loci] += 0.1;
  }, 1000)
}
