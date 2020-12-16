$(document).ready(function(event) {
    const addIphone12ProMaxBtn = $("#iphone12promax-cart-btn")
    const addIphone12Btn = $("#iphone12-cart-btn")

    const iphone12ProMaxImgContainer = $("#iphone12promax-img");
    const iphone12ProMaxPri = $("#iphone12promax-primary-img");
    const iphone12ProMaxSec = $("#iphone12promax-secondary-img");

    const iphone12ImgContainer = $("#iphone12-img");
    const iphone12Pri = $("#iphone12-primary-img");
    const iphone12Sec = $("#iphone12-secondary-img");
    const arrowLeft = $("#iphone-arrow-left");
    const arrowRight = $("#iphone-arrow-right");
    const main = $("#iphone-main");
    const section = $("#iphone-section");
    const procentMargin = 100;
    var indexer = 0;
    const hideBtn = $("#hide-iphone-btn");

    $("#iphone-header-img").show(1000);

    arrowLeft.on("click", function(e) {
        if (indexer == 0) {
            main.css('margin-left', '-300%');
            indexer = 3;
        }
        main.animate({
            'margin-left': '+=' + procentMargin + '%'
        }, 2000, function() {
            indexer--
        })
    });

    arrowRight.on("click", function(e) {
        main.animate({
            'margin-left': '-=' + procentMargin + '%'
        }, 2000, function() {
            indexer++;
            if (indexer == 3) {
                indexer = 0;
                main.css('margin-left', 0);
            }
        })
    });

    hideBtn.on("click", function(e) {
        section.hide(1000);
    })

    iphone12ProMaxPri.on("click", function(e) {
        if (iphone12ProMaxImgContainer.hasClass("iphone12promax-primary")) {
            return;
        }
        iphone12ProMaxImgContainer.fadeToggle(500);
        setTimeout(() => {
            iphone12ProMaxImgContainer.toggleClass("iphone12promax-secondary").toggleClass('iphone12promax-primary');
        }, 500);
        iphone12ProMaxImgContainer.fadeToggle(500);
    });

    iphone12ProMaxSec.on("click", function(e) {
        if (iphone12ProMaxImgContainer.hasClass("iphone12promax-secondary")) {
            return;
        }
        iphone12ProMaxImgContainer.fadeToggle(500);
        setTimeout(() => {
            iphone12ProMaxImgContainer.toggleClass("iphone12promax-secondary").toggleClass('iphone12promax-primary');
        }, 500);
        iphone12ProMaxImgContainer.fadeToggle(500);
    });

    iphone12Pri.on("click", function(e) {
        if (iphone12ImgContainer.hasClass("iphone12-primary")) {
            return;
        }
        iphone12ImgContainer.fadeToggle(500);
        setTimeout(() => {
            iphone12ImgContainer.toggleClass("iphone12-secondary").toggleClass('iphone12-primary');
        }, 500);
        iphone12ImgContainer.fadeToggle(500);
    });

    iphone12Sec.on("click", function(e) {
        if (iphone12ImgContainer.hasClass("iphone12-secondary")) {
            return;
        }
        iphone12ImgContainer.fadeToggle(500);
        setTimeout(() => {
            iphone12ImgContainer.toggleClass("iphone12-secondary").toggleClass('iphone12-primary');
        }, 500);
        iphone12ImgContainer.fadeToggle(500);
    });

    addIphone12ProMaxBtn.on("click", function(e) {
        let itemToSend = {
            name: "Apple iPhone 12 Pro Max",
            cpu: "Apple A14 Bionic",
            gpu: "Apple GPU",
            display: "6.7 inches, OLED",
            os: "iOS 14.1",
            camera: "3x 12MP & LiDAR",
            video: "4K@60fps, 1080p@240fps",
            price: 999,
            img: "../images/iphoneImages/iphone12promaxver1.jpg"
        }

        if (localStorage.getItem("cartItems") === null) {
            localStorage.setItem("cartItems", "[]");
        }
        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        newCartItems.push(itemToSend);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        alert("Added Apple iPhone 12 Pro Max to Cart!");
    });

    addIphone12Btn.on("click", function(e) {
        let itemToSend = {
            name: "Apple iPhone 12",
            cpu: "Apple A14 Bionic",
            gpu: "Apple GPU",
            display: "6.1 inches, OLED",
            os: "iOS 14.1",
            camera: "2x 12MP",
            video: "4K@60fps, 1080p@240fps",
            price: 799,
            img: "../images/iphoneImages/iphone12ver1.png"
        }

        if (localStorage.getItem("cartItems") === null) {
            localStorage.setItem("cartItems", "[]");
        }
        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        newCartItems.push(itemToSend);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        alert("Added Apple iPhone 12 to Cart!");
    });
});