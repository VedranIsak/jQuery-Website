$(document).ready(function(event) {
    const homeImageContainer = $("#home-image-container");
    const imageContainers = $(".header-img-container");
    const showButton = $("#show-btn");
    const textContainer = $(".text-container");
    const arrowRight = $(".arrow-right");
    const arrowLeft = $(".arrow-left");
    const startAnchor = $("#start-anchor");
    const pixelAnchor = $("#pixel-anchor");
    const iphoneAnchor = $("#iphone-anchor");
    const galaxyAnchor = $("#galaxy-anchor");
    const cartAnchor = $("#cart-anchor");
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
        let id = e.target.id;
        console.log(id);

        if(id === "img1") {
            $("#img4").find(".desc-container").slideToggle(750);
        }
        else if(id === "img4") {
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

    startAnchor.click(function(e) {
        e.preventDefault();
        document.getElementById("home-content-container").scrollIntoView({ behavior: "smooth" });
    })

    pixelAnchor.click(function(e) {
        e.preventDefault();
        document.getElementById("pixel-cover").scrollIntoView({ behavior: "smooth" });
    });

    iphoneAnchor.click(function(e) {
        e.preventDefault();
        document.getElementById("iphone-cover").scrollIntoView({ behavior: "smooth" });
    });

    galaxyAnchor.click(function(e) {
        e.preventDefault();
        document.getElementById("galaxy-cover").scrollIntoView({ behavior: "smooth" });
    });

    cartAnchor.click(function(e) {
        e.preventDefault();
        document.getElementById("cart-section").scrollIntoView({ behavior: "smooth" });
    });
});