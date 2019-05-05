function listMidiDevices(inputs, selectElementId) {
  selectController = document.getElementById(selectElementId)
  for (let i = 0; i < inputs.length; i++) {
    selectController.innerHTML += 
      '<option value="' + i.toString() + '">' + inputs[i].name + "</option>"
  }
}

WebMidi.enable(function (err) {
  if (err) {
    alert("WebMidi could not be enabled.", err);
  } else {
    listMidiDevices(WebMidi.inputs, 'midiDevices')
  }
});

function couple() {
  let selected = document.getElementById('midiDevices').selectedIndex
  WebMidi.inputs[selected].addListener('noteon', "all", kBoard.noteOn);
  WebMidi.inputs[selected].addListener('noteoff', "all", kBoard.noteOff);
  alert('Added listeners')
}

/*
WebMidi.enable(function (err) {
  WebMidi.inputs[1].addListener('noteon', "all", kBoard.noteOn);
  WebMidi.inputs[1].addListener('noteoff', "all", kBoard.noteOff);
  console.log('Added listeners')
})
*/