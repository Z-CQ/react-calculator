const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 435,
    webPreferences: {
      contextIsolation: true,
    },
    resizable: false,
    titleBarStyle: 'hidden'
  });

  const filePath = path.join(__dirname, '../dist/index.html');
  win.loadFile(filePath);
}

app.whenReady().then(createWindow);
