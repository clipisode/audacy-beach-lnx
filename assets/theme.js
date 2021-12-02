// const urlParams = new URLSearchParams(window.location.search);
// const thisTag = urlParams.get('tag');

window.onload = function() {
    if (document.getElementById("introScreen")) {
        let p = document.createElement("p");
        p.className = "text-center text-white text-xs mb-3";
        p.innerText = "Send us a video.</p><p>Tell us why you love our leggings!";
        document.getElementById("introBottom").prepend(p);
    }
};
