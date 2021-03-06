window.addEventListener('gamepadconnected', event => {
    console.log('Gamepad connected:')
    console.log(event.gamepad)
})

window.addEventListener('gamepaddisconnected', event => {
    console.log('Gamepad disconnected:')
    console.log(event.gamepad)
})

const gamepadDisplay = document.getElementById('gamepad-display')

function update() {
    const gamepads = navigator.getGamepads()
    if (gamepads[0]) {
        const gamepadState = {
            id: gamepads[0].id,
            axes: [
                gamepads[0].axes[0].toFixed(2),
                gamepads[0].axes[1].toFixed(2),
                gamepads[0].axes[2].toFixed(2),
                gamepads[0].axes[3].toFixed(2),
                gamepads[0].axes[4].toFixed(2),
            ],
        }
        gamepadDisplay.textContent = JSON.stringify(gamepadState, null, 2)
    }
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)