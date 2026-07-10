let petalsStarted = false;

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const experience = document.getElementById("experience");
    const openBtn = document.getElementById("openBtn");
    let hasOpenedExperience = false;

    let i = 0;

    const text = `
Hi darling kooo!!!

I've been thinking of doing this for a long time now, and I want you to read this with patience
'Cuz I feel like it's a bit long considering mga gadgad ko de para semo ble.

Notice how on the right side of the screen may timer sha?
That's the amount of time elapsed since I first went and talked to you on chat lolol

And, as I'm writing this, looking at the code that I wrote
And the actual timer, made me think that, maybe in this lifetime,
Living wouldn't be as dreadful as I thought it would be.

Why? Because every day ever since I realized our feelings were mutual
And that I actually have a chance to be one with a Goddess like you
It's like I'm now living a life worth living;
Thrill, excitement, and a reason to look forward tomorrow.

I like to look back and remember how I used to annoy you every day back then
By tugging your hair or just blatantly be on your face daily

And yet, the same goes 'till today, just done more now with 
Feelings of love towards you and not to just annoy you anymore.

Ever since I realized what I felt towards you,
	// Your face Your Voice Your Words.
Your everything got imprinted in my heart;
And as the time went on;
I realize this feeling is more than just infatuation,
I came to the realization that I genuinely cared about you,
Whether you ate or not;
How you'd just doze off in class;
How you bring snacks, candies, and biscuits almost every day;
How I want to just give you everything in this world.

Although anybody can just say anything but negative about your beauty,
I found myself doing the same too;
Admiring the way your smile shows your teeth, the one almost identical to mine
But yours is on top and mine on the bottom.
The way you carry yourself so elegantly at times, one might mistake you for royalty.

And to be honest? I still feel pretty nervous whenever I'm with you; 
It's not that I'm shy or anything of you, but because I get stunned
Over your beauty and how you look.
It takes so much courage and strength for me 
Every second with you becomes a memory I never want to forget.

Anybody could've just sent a message.
But I wanted to make something that I guess would last a lifetime.
Something you could come back to years from now and still remember this moment.

And now, I want to ask you something important...
wewew
ewe
WeakMapw
ewee
WeakMapwe
waitew
Ewe
`;

    /* 
       MUSIC ELEMENTS
    */
    const music = document.getElementById("music");
    const playBtn = document.getElementById("playBtn");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const progress = document.getElementById("progress");
    const currentTimeEl = document.getElementById("currentTime");
    const durationEl = document.getElementById("duration");
	const songTitleEl = document.getElementById("songTitle");
	const artistNameEl = document.getElementById("artistName");

    const playlist = [
        {
            src: "./music.mp3",
            title: "(Only) About Love",
            artist: "Grentperez",
			cover: "Photos/album.jpg"
        },
        {
            src: "./music1.mp3",
            title: "Dream Girl",
            artist: "crisaunt",
			cover: "Photos/album1.jpg"
        },
        {
            src: "./music2.mp3",
            title: "Acolyte",
            artist: "Slaughter Beach, Dog",
            cover: "Photos/album2.jpg"
        }
    ];

    const flowerImages = [
        "Photos/flowerf1.png",
        "Photos/flowerf2.png",
        "Photos/flowerf3.png",
        "Photos/flowerf4.png",
        "Photos/flowerf5.png",
        "Photos/flowerf6.png",
        "Photos/flowerf7.png",
        "Photos/flowerf8.png"
    ];

    flowerImages.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

	const albumCoverEl = document.getElementById("albumCover");

    let currentSongIndex = 0;
    let isPlaying = false;

    function loadSong(index) {
    const song = playlist[index];

    music.src = song.src;

    if (songTitleEl) songTitleEl.textContent = song.title;
    if (artistNameEl) artistNameEl.textContent = song.artist;

    if (albumCoverEl) albumCoverEl.src = song.cover;

    music.load();

    music.onloadedmetadata = () => {
        progress.max = music.duration;
        durationEl.textContent = formatTime(music.duration);
    };
}
const backBtn = document.getElementById("backBtn");

    function resetToIntro() {
        experience.classList.add("hidden");
        intro.style.display = "flex";
        intro.classList.remove("hidden");

        intro.style.opacity = "1";
        experience.style.opacity = "0";
        hasOpenedExperience = false;
        openBtn.disabled = false;

        stopMusic();
    }

    function formatTime(t) {
        const m = Math.floor(t / 60) || 0;
        const s = Math.floor(t % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    }

    /*
       OPEN EXPERIENCE
    */
    function openExperience(event) {
        if (event) event.preventDefault();

        if (hasOpenedExperience) return;
        hasOpenedExperience = true;

        openBtn.disabled = true;

        intro.style.opacity = "0";

        const openDelay = window.innerWidth <= 768 ? 350 : 1200;

        setTimeout(() => {
            intro.style.display = "none";
            experience.classList.remove("hidden");

            experience.style.opacity = "0";

            setTimeout(() => {
                experience.style.opacity = "1";
            }, 50);

            startExperience();

        }, openDelay);
    }

    openBtn.addEventListener("click", openExperience);
    openBtn.addEventListener("pointerup", openExperience);
    openBtn.addEventListener("touchend", openExperience, { passive: false });

    /*
       BACK BUTTON
    */
    if (backBtn) backBtn.addEventListener("click", resetToIntro);

    /*
       TIMER
    */
    function startRelationshipTimer() {

        const startDate = new Date("2025-12-04T18:00:00");

        function updateTimer() {

            const now = new Date();
            const diff = now - startDate;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            const timer = document.getElementById("relationshipTimer");

            if (timer) {
                timer.innerHTML = `
<div class="time-row"><span class="num">${days}</span><span class="label">DAYS</span></div>
<div class="time-row"><span class="num">${hours}</span><span class="label">HRS</span></div>
<div class="time-row"><span class="num">${minutes}</span><span class="label">MIN</span></div>
<div class="time-row"><span class="num">${seconds}</span><span class="label">SEC</span></div>
`;
            }
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    /*
       TYPEWRITER
    */
function typeText() {
    const el = document.getElementById("typedText");
    if (!el) return;

    const lines = text.split("\n");
    let lineIndex = 0;
    let charIndex = 0;

    el.innerHTML = "";

    function type() {
        if (lineIndex < lines.length) {

            const currentLine = lines[lineIndex];

            if (charIndex < currentLine.length) {
                el.innerHTML += currentLine[charIndex];
                charIndex++;
                setTimeout(type, 25);
            } else {
                el.innerHTML += "<br>";
                lineIndex++;
                charIndex = 0;
                setTimeout(type, 200); // pause between lines
            }
        }
    }

    type();
}

    /* =========================
       MUSIC CORE
    ========================= */

    

    function fadeInMusic() {
        music.volume = 0;
        music.play().catch(() => {});

        let vol = 0;
        const fade = setInterval(() => {
            if (vol < 1) {
                vol += 0.05;
                music.volume = vol;
            } else {
                clearInterval(fade);
            }
        }, 80);

        isPlaying = true;
        if (playBtn) playBtn.textContent = "❚❚";
    }

    /* =========================
       PETALS
    ========================= */
    function createPetals() {

        setInterval(() => {

            const petal = document.createElement("img");
            petal.classList.add("petal");

            petal.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
            petal.style.left = Math.random() * 100 + "vw";
            const mobile = window.innerWidth <= 768;

            petal.style.width =
                (mobile ? 10 : 15) +
                Math.random() * (mobile ? 10 : 15) +
                "px";
            petal.style.animationDuration = 8 + Math.random() * 8 + "s";
            petal.style.opacity = mobile
                ? 0.25 + Math.random() * 0.25
                : 0.4 + Math.random() * 0.6;

            document.body.appendChild(petal);

            setTimeout(() => petal.remove(), 16000);

        }, window.innerWidth <= 768 ? 1800 : 1000);
    }

    /* =========================
       FLOWER HEART
    ========================= */
    function createFlowerHeart() {

        const container = document.getElementById("flowerHeart");
        if (!container) return;

        const isMobile = window.innerWidth <= 768;
		const centerX = isMobile ? 160 : 350;
		const centerY = isMobile ? 150 : 320;

		const scale = isMobile ? 8.5 : 16;
        const step = isMobile ? 0.11 : 0.05;
		

        const points = [];

        for (let t = 0; t < Math.PI * 2; t += step) {
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = 13 * Math.cos(t)
                - 5 * Math.cos(2 * t)
                - 2 * Math.cos(3 * t)
                - Math.cos(4 * t);

            points.push({
                x: centerX + x * scale,
				y: centerY - y * scale
            });
        }

        let index = 0;

        const growHeart = setInterval(() => {

            if (index >= points.length) {
                clearInterval(growHeart);
                document.querySelector(".heart-center").style.opacity = "1";
                return;
            }

            const flower = document.createElement("img");
            flower.classList.add("flower");

            flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];

            flower.style.left = points[index].x + "px";
            flower.style.top = points[index].y + "px";

            flower.classList.add("grow");

            container.appendChild(flower);

            index++;

        }, isMobile ? 55 : 40);
    }

    /* =========================
       START EXPERIENCE
    ========================= */

    document.querySelector(".main-layout")
        .classList.add("show");
        
    function startExperience() {
		loadSong(currentSongIndex);
		fadeInMusic();

		startRelationshipTimer();

		if (!document.querySelector("#flowerHeart .flower")) {
			createFlowerHeart();
		}

		if (!petalsStarted) {
			createPetals();
				petalsStarted = true;
		}

		const typed = document.getElementById("typedText");
		if (typed && typed.innerHTML === "") {
        typeText();
		}
	}

    /* =========================
       STOP MUSIC
    ========================= */
    function stopMusic() {
        music.pause();
        music.currentTime = 0;
    }

    /* =========================
       CONTROLS
    ========================= */

    if (playBtn) playBtn.addEventListener("click", async () => {
        if (music.paused) {
            await music.play();
            isPlaying = true;
            playBtn.textContent = "❚❚";
        } else {
            music.pause();
            isPlaying = false;
            playBtn.textContent = "▶";
        }
    });
	if (music) music.addEventListener("ended", () => {

    currentSongIndex =
        (currentSongIndex + 1) % playlist.length;

    loadSong(currentSongIndex);

    music.play();

    playBtn.textContent = "❚❚";
});

    if (nextBtn) nextBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        music.play();
        playBtn.textContent = "❚❚";
    });

    if (prevBtn) prevBtn.addEventListener("click", () => {
        currentSongIndex =
            (currentSongIndex - 1 + playlist.length) % playlist.length;

        loadSong(currentSongIndex);
        music.play();
        playBtn.textContent = "❚❚";
    });

    if (music) music.addEventListener("timeupdate", () => {
        progress.value = music.currentTime;
        currentTimeEl.textContent = formatTime(music.currentTime);
    });

    if (progress) progress.addEventListener("input", () => {
        music.currentTime = progress.value;
    });
	console.log("CURRENT SONG:", playlist[currentSongIndex]);

});
