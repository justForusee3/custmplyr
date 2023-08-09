window.onload = function() {
    var video = document.getElementById('video');
    var playPauseButton = document.getElementById('playPause');
    var progressBar = document.getElementById('progress-bar');

    var videoUrl = "https://dash.akamaized.net/dash264/TestCasesMCA/dolby/3/1/ChID_voices_20_128_ddp.mpd";
    video.src = videoUrl;

    var player = new AAMPMediaPlayer();
    player.load(videoUrl);

    playPauseButton.addEventListener('click', function() {
        console.log("Button clicked");
        togglePlayPause();
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            console.log("Enter key pressed");
            togglePlayPause();
        }
    });

    video.addEventListener('timeupdate', function() {
        var progress = (video.currentTime / video.duration) * 100;
        progressBar.style.width = progress + '%';
    });

    video.addEventListener('ended', function() {
        playPauseButton.textContent = 'Play';
        progressBar.style.width = '0';
    });

    function togglePlayPause() {
        if (video.paused || video.ended) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    }
};
