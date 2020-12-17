$(document).ready(function(event) {
    const homeImageContainer = $("#home-image-container");
    const imageContainers = $(".header-img-container");
    const showButton = $("#show-btn");
    const textContainer = $(".text-container");
    const viewBtns = $(".view-btn");
    const cartBtn = $(".show-cart-btn");
    var currentPage = "";
    const arrowRight = $(".arrow-right");
    const arrowLeft = $(".arrow-left");

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

    viewBtns.on("click", function(e) {
        let headerTxt = $(this).prev("h2").text();
        let spacer = headerTxt.indexOf(' ');
        let newPage = headerTxt.slice(spacer + 1, headerTxt.length);
        let newPageLower = newPage.toLowerCase();

        if (currentPage !== null) {
            $(currentPage).hide(1000);
        }
        currentPage = "#" + newPageLower + "-section";
        $(currentPage).show(1000);
    });

    cartBtn.on("click", function(e) {
        $this = $(this);
        if (!$this.hasClass("isClicked")) {
            $this.fadeToggle(500);
            setTimeout(() => {
                $this.addClass("isClicked");
                $("#billing-header").show(1000);
                $("#order-header").show(1000);
                $("#cart-form").show(1000);
                $("#cart-items-container").show(1000);
                $this.html("Hide your Cart");
                $this.addClass("hide-cart-btn");
                $this.fadeToggle(1000);
            }, 600);
        } else {
            $this.fadeToggle(500);
            setTimeout(() => {
                $this.removeClass("isClicked");
                $("#billing-header").hide(1000);
                $("#order-header").hide(1000);
                $("#cart-form").hide(1000);
                $("#cart-items-container").hide(1000);
                $this.html("View your Cart");
                $this.removeClass("hide-cart-btn");
                $this.fadeToggle(1000);
            }, 600)
        }
    });

});