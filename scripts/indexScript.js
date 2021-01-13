$(document).ready(function(event) {
    const homeImageContainer = $("#home-image-container");
    const imageContainers = $(".header-img-container");
    const arrowRight = $(".arrow-right");
    const arrowLeft = $(".arrow-left");
    const anchors = $(".anchor");
    $(imageContainers).find(".desc-container").hide();

    var indexer = 0;
    const procentMargin = '100';

    imageContainers.on("click", function(e) {
        let id = e.target.id;
        console.log(id);

        if (id === "img1") {
            $("#img4").find(".desc-container").slideToggle(750);
        } else if (id === "img4") {
            $("#img4").find(".desc-container").slideToggle(750);
        }

        $(this).find(".desc-container").slideToggle(750);
    });

    arrowLeft.on("click", function(e) {
        if (indexer == 0) {
            homeImageContainer.css('margin-left', '-300%');
            indexer = 3;
        }
        homeImageContainer.animate({
            'margin-left': '+=' + procentMargin + '%'
        }, 2000, function() {
            indexer--
        })
    });

    arrowRight.on("click", function(e) {
        homeImageContainer.animate({
            'margin-left': '-=' + procentMargin + '%'
        }, 2000, function() {
            indexer++;
            if (indexer == 3) {
                indexer = 0;
                homeImageContainer.css('margin-left', 0);
            }
        })
    });

    anchors.click(function(e) {
        e.preventDefault();
        let phoneName = e.target.id;
        let breaker = phoneName.indexOf('-');
        let fullPhoneName = phoneName.slice(0, breaker);

        document.getElementById(fullPhoneName + "-section").scrollIntoView({ behavior: "smooth" });
    });
});