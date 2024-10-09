const sleep = milliseconds => {
   return new Promise(resolve => setTimeout(resolve, milliseconds));
};

window.onload = function(){
	var overlay = document.getElementById("spinneroverlay");

	sleep(1500).then(() => {
        console.log("Sleep completed successfully");
        overlay.classList.add("tweenspinzoom");

        sleep(500).then(() => {
        	overlay.style.display = "none";
		});
    });
};