const { app, BrowserWindow } = require('electron')
const path = require('path')

app.whenReady().then(() => {
    createWindow()
})
const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        icon: "icon.png"
    })
    window.setMenu(null)
    window.loadURL('https://www.phind.com/search?home=true')
}