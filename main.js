const electron = require('electron')
const {app, Menu} = require('electron')
var path = require('path')
// Module to control application life.
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

var window_size_width = 250;
var window_size_height = 350;
var win32_menu_height = 0;

if (process.platform === 'win32') {
  win32_menu_height = 47;
}
console.log(win32_menu_height);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  console.log(process.versions.electron);

  mainWindow = new BrowserWindow({
    width: 250,
    height: 350 + win32_menu_height,
    minWidth: 250,
    maxWidth: 500 ,
    minHeight: 100 + win32_menu_height,
    maxHeight: 400 + win32_menu_height,
    title: 'Unit',
    icon: path.join(__dirname, 'assets/icons/png/64x64.png'),
    frame: true,
    titleBarStyle: 'hidden',
    acceptFirstMouse: true,
    maximizable: false,
    resizable: false,
  })

  app.on('window-all-closed', () => {
    app.quit()
  })

/*
  mainWindow.on('unmaximize', function (event) {
  console.log('unmax');
    event.preventDefault();
    window_size_width = mainWindow.getSize().width;
    window_size_height = mainWindow.getSize().height;
    console.log(window_size_width);
    console.log(window_size_height);
    mainWindow.setSize(
      300,
      200
    )
  })

  mainWindow.on('maximize', function (event) {
  console.log('max');
    event.preventDefault();
    mainWindow.setSize(
      600,
      800
    )
  })
  */

  mainWindow.setFullScreenable(false);

  mainWindow.setMaximizable(false);

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)


  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })


const template = [
  {
    label: 'Edit',
    submenu: [
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'selectall'}
    ]
  },
  {
    label: 'View',
    submenu: [
      {label: 'Full', click: function(item, BrowserWindow){
        mainWindow.setMaximumSize(500,400 + win32_menu_height + win32_menu_height);
        mainWindow.setSize(500,400 + win32_menu_height);
        mainWindow.setResizable(false);
        mainWindow.webContents.executeJavaScript("addExpressionsButtons();");
        console.log("Full window was toggled");
      }, type: 'radio'},
      {label: 'Expressions', click: function(item, BrowserWindow){
        mainWindow.setMaximumSize(250,500 + win32_menu_height);
        mainWindow.setSize(250,400 + win32_menu_height);
        mainWindow.setResizable(false);
        mainWindow.webContents.executeJavaScript("addExpressionsButtons();");
        console.log("Expressions window was toggled");
      }, type: 'radio'},
      {label: 'Basic', click: function(item, BrowserWindow){
        mainWindow.setMaximumSize(250,500 + win32_menu_height);
        mainWindow.setSize(250,350 + win32_menu_height);
        mainWindow.setResizable(false);
        mainWindow.webContents.executeJavaScript("removeExpressionsButtons();");
        console.log("Basic window was toggled");
      }, type: 'radio',
         checked: true},
      {label: 'Minimal', click: function(item, BrowserWindow){
        mainWindow.setMaximumSize(500,100 + win32_menu_height);
        mainWindow.setSize(250,100 + win32_menu_height);
        mainWindow.setResizable(true);
        mainWindow.webContents.executeJavaScript("removeExpressionsButtons();");
        console.log("Minimal window was toggled");
      }, type: 'radio'},
      {type: 'separator'},
      {role: 'reload'},
      {role: 'toggledevtools'},
    ]
  },
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'services', submenu: []},
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  // Window menu
  template[3].submenu = [
    {role: 'close'},
    {role: 'minimize'},
    {type: 'separator'},
    {role: 'front'}
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
