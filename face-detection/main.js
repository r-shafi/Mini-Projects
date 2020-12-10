const video = document.querySelector('.camera');

const videoCanvas = document.querySelector('.video');
const videoCtx = videoCanvas.getContext('2d');

const faceDetector = new FaceDetector();

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  video.srcObject = stream;
  await video.play();

  videoCanvas.width = video.videoWidth;
  videoCanvas.height = video.videoHeight;
}

async function faceDetection() {
  const faces = await faceDetector.detect(video);

  faces.forEach(drawFace);

  requestAnimationFrame(faceDetection);
}

function drawFace(face) {
  const {
    width, height, left, top,
  } = face.boundingBox;

  videoCtx.clearRect(0, 0, videoCanvas.width, videoCanvas.height);

  videoCtx.strokeStyle = '#ff0000';
  videoCtx.lineWidth = 2;
  videoCtx.strokeRect(width, height, left, top);
}

populateVideo().then(faceDetection);
