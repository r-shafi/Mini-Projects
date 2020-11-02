alert(
  "I AM SORRY THAT THE CHORDS ARE PLAYING A BIT LATE, NOT MY FAULT, THAT'S THE MP3 FILES FAULT."
);

const chords = document.querySelectorAll('.chord');

const sounds = {
  co: new Audio('GC/1st.mp3'),
  ct: new Audio('GC/2nd.mp3'),
  cth: new Audio('GC/3rd.mp3'),
  cf: new Audio('GC/4th.mp3'),
  cfv: new Audio('GC/5th.mp3'),
  csx: new Audio('GC/6th.mp3'),
  cs: new Audio('GC/C.mp3'),
  ce: new Audio('GC/D.mp3'),
  cn: new Audio('GC/Dm.mp3'),
  cz: new Audio('GC/E.mp3'),
};

let prevChord;

chords.forEach((chord) =>
  chord.addEventListener('click', (e) => {
    prevChord ? sounds[prevChord].pause() : null;
    sounds[e.target.classList[1]].play();
    prevChord = e.target.classList[1];
  })
);

function keyboard(e) {
  prevChord ? sounds[prevChord].pause() : null;

  switch (e.keyCode) {
    case 65:
      sounds.co.play();
      prevChord = 'co';
      break;
    case 83:
      sounds.ct.play();
      prevChord = 'ct';
      break;
    case 68:
      sounds.cth.play();
      prevChord = 'cth';
      break;
    case 70:
      sounds.cf.play();
      prevChord = 'cf';
      break;
    case 71:
      sounds.cfv.play();
      prevChord = 'cfv';
      break;
    case 72:
      sounds.csx.play();
      prevChord = 'csx';
      break;
    case 74:
      sounds.cs.play();
      prevChord = 'cs';
      break;
    case 75:
      sounds.ce.play();
      prevChord = 'ce';
      break;
    case 76:
      sounds.cn.play();
      prevChord = 'cn';
      break;
    case 90:
      sounds.cz.play();
      prevChord = 'cz';
      break;
    default:
      console.log('Not a chord 🤷‍♂️');
      break;
  }
}

window.addEventListener('keyup', keyboard);
