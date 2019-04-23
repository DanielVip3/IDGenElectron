const {app, BrowserWindow} = require('electron');

let win;

app.on('ready', () => {
    win = new BrowserWindow({width: 1920, height: 1080});

    win.loadFile(`${__dirname}/IDGenerator.html`);

    win.setMinimumSize(992, 680);

    // win.webContents.openDevTools();

    win.on('closed', () => {
      win = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    };
});

app.on('activate', () => {
    if (win === null) {
      createWindow();
    };
});

var ipc = require('electron').ipcMain;
