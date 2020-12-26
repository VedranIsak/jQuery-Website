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
    const pixelSection = $("#pixel-section");
    const iphoneSection = $("#iphone-section");
    const galaxySection = $("#galaxy-section");
    const footer = $("footer");
    const footerContainer = $("#bottom-footer");

    // footerContainer.hide();

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

    // startSlide();

    var footerTimer;
    footer.hover(function(e) {
            footerTimer = setTimeout(() => {
                setTimeout(() => { $("#bottom-footer h3").slideDown(500); }, 500)
            }, 500);
        },
        function(e) {
            $("#bottom-footer h3").slideUp(500);
            clearTimeout(footerTimer);
        });

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

    pixelAnchor.on("click", function(e) {});

    iphoneAnchor.on("click", function(e) {});

    galaxyAnchor.on("click", function(e) {});

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