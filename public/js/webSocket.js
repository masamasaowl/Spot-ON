// Connect to WebSocket
const socket = io();

// Listen for 'parkingData' event
socket.on('parkingData', (data) => {
  console.log('Received data:', data);

  // Update UI dynamically
  document.getElementById('free-spaces').innerText = data.freeSpaces;
  document.getElementById('occupied-spaces').innerText = data.occupiedSpaces;
});
