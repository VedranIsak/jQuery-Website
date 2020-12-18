$(document).ready(function(event) {
    const addPixel5Btn = $("#pixel5-cart-btn");
    const addPixel4aBtn = $("#pixel4a-cart-btn");
    const addPixel4xlBtn = $("#pixel4xl-cart-btn");
    const addPixel4Btn = $("#pixel4-cart-btn");

    const pixel5ImgContainer = $("#pixel5-img");
    const pixel5Pri = $("#pixel5-primary-img");
    const pixel5Sec = $("#pixel5-secondary-img");

    const pixel4aImgContainer = $("#pixel4a-img");
    const pixel4aPri = $("#pixel4a-primary-img");
    const pixel4aSec = $("#pixel4a-secondary-img");

    const pixel4xlImgContainer = $("#pixel4xl-img");
    const pixel4xlPri = $("#pixel4xl-primary-img");
    const pixel4xlSec = $("#pixel4xl-secondary-img");

    const pixel4ImgContainer = $("#pixel4-img");
    const pixel4Pri = $("#pixel4-primary-img");
    const pixel4Sec = $("#pixel4-secondary-img");

    const arrowLeft = $("#pixel-arrow-left");
    const arrowRight = $("#pixel-arrow-right");
    const main = $("#pixel-main");
    const section = $("#pixel-section");
    const procentMargin = 100;
    var indexer = 0;

    const hideBtn = $("#hide-pixel-btn");

    $("#pixel-header-img").show(1000);

    arrowLeft.on("click", function(e) {
        if (indexer == 0) {
            main.css('margin-left', '-300%');
            indexer = 3;
        }
        main.animate({
            'margin-left': '+=' + procentMargin + '%'
        }, 1250, function() {
            indexer--
        })
    });

    arrowRight.on("click", function(e) {
        main.animate({
            'margin-left': '-=' + procentMargin + '%'
        }, 1250, function() {
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

    pixel5Pri.on("click", function(e) {
        if (pixel5ImgContainer.hasClass("pixel5-primary")) {
            return;
        }
        pixel5ImgContainer.fadeToggle(500);
        setTimeout(() => {
            pixel5ImgContainer.toggleClass("pixel5-secondary").toggleClass('pixel5-primary');
        }, 500);
        pixel5ImgContainer.fadeToggle(500);
    });

    pixel5Sec.on("click", function(e) {
        if (pixel5ImgContainer.hasClass("pixel5-secondary")) {
            return;
        }
        pixel5ImgContainer.fadeToggle(500);
        setTimeout(() => {
            pixel5ImgContainer.toggleClass("pixel5-secondary").toggleClass('pixel5-primary');
        }, 500);
        pixel5ImgContainer.fadeToggle(500);
    });

    pixel4aPri.on("click", function(e) {
        if (pixel4aImgContainer.hasClass("pixel4a-primary")) {
            return;
        }
        pixel4aImgContainer.fadeToggle(500);
        setTimeout(() => {
            pixel4aImgContainer.toggleClass("pixel4a-secondary").toggleClass('pixel4a-primary');
        }, 500);
        pixel4aImgContainer.fadeToggle(500);
    });

    pixel4aSec.on("click", function(e) {
        if (pixel4aImgContainer.hasClass("pixel4a-secondary")) {
            return;
        }
        pixel4aImgContainer.fadeToggle(500);
        setTimeout(() => {
            pixel4aImgContainer.toggleClass("pixel4a-secondary").toggleClass('pixel4a-primary');
        }, 500);
        pixel4aImgContainer.fadeToggle(500);
    });


    pixel4xlPri.on("click", function(e) {
        if (pixel4xlImgContainer.hasClass("pixel4xl-primary")) {
            return;
        }
        pixel4xlImgContainer.fadeToggle(500);
        setTimeout(() => {
            pixel4xlImgContainer.toggleClass("pixel4xl-secondary").toggleClass('pixel4xl-primary');
        }, 500);
        pixel4xlImgContainer.fadeToggle(500);
    });

    pixel4xlSec.on("click", function(e) {
        if (pixel4xlImgContainer.hasClass("pixel4xl-secondary")) {
            return;
        }
        pixel4xlImgContainer.fadeToggle(500);
        setTimeout(() => {
            pixel4xlImgContainer.toggleClass("pixel4xl-secondary").toggleClass('pixel4xl-primary');
        }, 500);
        pixel4xlImgContainer.fadeToggle(500);
    });

    pixel4Pri.on("click", function(e) {
        if (pixel4ImgContainer.hasClass("pixel4-primary")) {
            return;
        }
        pixel4ImgContainer.fadeToggle(500);
        setTimeout(() => {
            pixel4ImgContainer.toggleClass("pixel4-secondary").toggleClass('pixel4-primary');
        }, 500);
        pixel4ImgContainer.fadeToggle(500);
    });

    pixel4Sec.on("click", function(e) {
        if (pixel4ImgContainer.hasClass("pixel4-secondary")) {
            return;
        }
        pixel4ImgContainer.fadeToggle(500);
        setTimeout(() => {
            pixel4ImgContainer.toggleClass("pixel4-secondary").toggleClass('pixel4-primary');
        }, 500);
        pixel4ImgContainer.fadeToggle(500);
    });

    addPixel5Btn.on("click", function(e) {
        let itemToSend = {
            name: "Google Pixel 5",
            cpu: "Snapdragon 765g",
            gpu: "Adreno 620",
            display: "6.0 inches, OLED",
            os: "Android 11 (Vanilla)",
            camera: "12.2MP & 16MP",
            video: "4K@60fps, 1080p@240fps",
            price: 699,
            img: "../images/pixelImages/pixel5ver1.png"
        }

        if (localStorage.getItem("cartItems") === null) {
            localStorage.setItem("cartItems", "[]");
        }
        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        newCartItems.push(itemToSend);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        alert("Added Pixel 5 to Cart!");
    });

    addPixel4aBtn.on("click", function(e) {
        let itemToSend = {
            name: "Google Pixel 4a 5g",
            cpu: "Snapdragon 765g",
            gpu: "Adreno 620",
            display: "6.2 inches, OLED",
            os: "Android 11 (Vanilla)",
            camera: "12.2MP & 16MP",
            video: "4K@60fps, 1080p@240fps",
            price: 499,
            img: "../images/pixelImages/pixel4aver1.jpg"
        }

        if (localStorage.getItem("cartItems") === null) {
            localStorage.setItem("cartItems", "[]");
        }
        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        newCartItems.push(itemToSend);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        alert("Added Pixel 4a to Cart!");
    });

    addPixel4xlBtn.on("click", function(e) {
        let itemToSend = {
            name: "Google Pixel 4XL",
            cpu: "Snapdragon 855",
            gpu: "Adreno 640",
            display: "6.3 inches, OLED",
            os: "Android 10 (Vanilla)",
            camera: "12.2MP & 16MP",
            video: "4K@30fps, 1080p@120fps",
            price: 599,
            img: "../images/pixelImages/pixel4xlver1.jpg"
        }

        if (localStorage.getItem("cartItems") === null) {
            localStorage.setItem("cartItems", "[]");
        }
        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        newCartItems.push(itemToSend);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        alert("Added Pixel 4XL to Cart!");
    });

    addPixel4Btn.on("click", function(e) {
        let itemToSend = {
            name: "Google Pixel 4",
            cpu: "Snapdragon 855",
            gpu: "Adreno 640",
            display: "5.7 inches, OLED",
            os: "Android 10 (Vanilla)",
            camera: "12.2MP & 16MP",
            video: "4K@30fps, 1080p@120fps",
            price: 499,
            img: "../images/pixelImages/pixel4ver1.jpg"
        }

        if (localStorage.getItem("cartItems") === null) {
            localStorage.setItem("cartItems", "[]");
        }
        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        newCartItems.push(itemToSend);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        alert("Added Pixel 4 to Cart!");
    });
});