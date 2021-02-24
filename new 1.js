    var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
	function onDelete() {
        clicks = 0;
		document.getElementById("clicks").innerHTML = clicks;
    };
