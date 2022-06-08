window.screenOrientation = "sensor_landscape", loadLib("libs/laya.core.js"), loadLib("libs/laya.ui.js"), loadLib("libs/laya.physics3D.js"), loadLib("libs/laya.d3.js"), loadLib("js/main.js");
document.addEventListener("resume", function() {
    Laya.SoundManager.setMusicVolume(1);
    Laya.SoundManager.setSoundVolume(1);
    Laya.stage.renderingEnabled = true;
    Laya.timer.resume();
    Laya.timer.scale = 1;
});

document.addEventListener("pause", function() {
    Laya.SoundManager.setMusicVolume(0);
    Laya.SoundManager.setSoundVolume(0);
    Laya.stage.renderingEnabled = false;
    Laya.timer.pause();
    Laya.timer.scale = 0;
});