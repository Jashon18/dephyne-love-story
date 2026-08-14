const enterButton = document.getElementById("enterButton");

const musicButton = document.getElementById("musicButton");

const ourSong = document.getElementById("ourSong");


enterButton.addEventListener("click", function () {

    window.location.href = "story.html";

});


musicButton.addEventListener("click", function () {

    if (ourSong.paused) {

        ourSong.play()
            .then(function () {

                musicButton.textContent = "⏸️ Pause Our Song";

            })
            .catch(function (error) {

                console.error("Audio could not play:", error);

                musicButton.textContent =
                    "⚠️ Song could not play";

            });

    } else {

        ourSong.pause();

        musicButton.textContent =
            "🎵 Play Our Song ❤️";

    }

});


ourSong.addEventListener("ended", function () {

    musicButton.textContent =
        "🎵 Play Our Song ❤️";

});