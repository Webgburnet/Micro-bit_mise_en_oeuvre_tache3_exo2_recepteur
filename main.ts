radio.onReceivedString(function (receivedString) {
    serial.writeString(receivedString)
    basic.showString(receivedString)
})
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
basic.forever(function () {
	
})
