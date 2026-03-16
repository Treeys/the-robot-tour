let sonar = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(40, 20)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(20, 40)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(40, 40)
    }
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    while (sonar > 2 && sonar < 15) {
        cuteBot.motors(0, 0)
        music.play(music.tonePlayable(247, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    }
})
