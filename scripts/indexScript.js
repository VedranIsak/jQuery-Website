$(document).ready(function(event) {
    const homeImageContainer = $("#home-image-container");
    const imageContainers = $(".header-img-container");
    const showButton = $("#show-btn");
    const textContainer = $(".text-container");
    const viewBtns = $(".view-btn");
    var currentPage = "";
    const arrowRight = $(".arrow-right");
    const arrowLeft = $(".arrow-left");
    const pixelAnchor = $("#pixel-anchor");
    const iphoneAnchor = $("#iphone-anchor");
    const galaxyAnchor = $("#galaxy-anchor");
    const footer = $("footer");
    const footerContainer = $("#bottom-footer");

    var indexer = 0;
    const procentMargin = '100';

    function startSlide() {
        setInterval(() => {
            homeImageContainer.animate({
                'margin-left': '-=' + procentMargin + '%'
            }, 4000, function() {
                indexer++;
                if (indexer == 3) {
                    indexer = 0;
                    homeImageContainer.css('margin-left', 0);
                }
            });
        }, 20000);
    }

    footer.on("mouseenter", function(e) {
        $("#bottom-footer h3").slideToggle(1000);
    });

    footer.on("mouseleave", function(e) {
        $("#bottom-footer h3").slideToggle(1000);
    })

    // startSlide();
    $(imageContainers).find(".desc-container").hide();

    imageContainers.on("click", function(e) {
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

    showButton.on("click", function(e) {
        $this = $(this);
        if (!$this.hasClass("isClicked")) {
            $this.addClass("isClicked");
            textContainer.show(1000);
            $this.html("Hide");
        } else {
            $this.removeClass("isClicked");
            textContainer.hide(1000);
            $this.html("What this website is about");
        }
    });

    pixelAnchor.on("click", function(e) {
        if (currentPage !== null) {
            $(currentPage).hide(1000).removeClass("scroll-child");
        }
        currentPage = "#pixel-section";
        $(currentPage).show(1000).addClass("scroll-child");
    });

    iphoneAnchor.on("click", function(e) {
        if (currentPage !== null) {
            $(currentPage).hide(1000).removeClass("scroll-child");
        }
        currentPage = "#iphone-section";
        $(currentPage).show(1000).addClass("scroll-child");
    });

    galaxyAnchor.on("click", function(e) {
        if (currentPage !== null) {
            $(currentPage).hide(1000).removeClass("scroll-child");
        }
        currentPage = "#galaxy-section";
        $(currentPage).show(1000).addClass("scroll-child");
    });

    viewBtns.on("click", function(e) {
        let headerTxt = $(this).prev("h2").text();
        let spacer = headerTxt.indexOf(' ');
        let newPage = headerTxt.slice(spacer + 1, headerTxt.length);
        let newPageLower = newPage.toLowerCase();

        if (currentPage !== null) {
            $(currentPage).hide(1000).removeClass("scroll-child");
        }
        currentPage = "#" + newPageLower + "-section";
        $(currentPage).show(1000).addClass("scroll-child");
    });
});