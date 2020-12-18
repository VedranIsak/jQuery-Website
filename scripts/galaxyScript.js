$(document).ready(function(event) {
    const addGalaxyS20Btn = $("#galaxys20-cart-btn");
    const addGalaxyNote20Btn = $("#galaxynote20-cart-btn");

    const galaxyS20ImgContainer = $("#galaxys20-img");
    const galaxyS20Pri = $("#galaxys20-primary-img");
    const galaxyS20Sec = $("#galaxys20-secondary-img");

    const galaxyNote20ImgContainer = $("#galaxynote20-img");
    const galaxyNote20Pri = $("#galaxynote20-primary-img");
    const galaxyNote20Sec = $("#galaxynote20-secondary-img");

    const arrowLeft = $("#galaxy-arrow-left");
    const arrowRight = $("#galaxy-arrow-right");
    const main = $("#galaxy-main");
    const section = $("#galaxy-section");
    const procentMargin = 100;
    var indexer = 0;

    const hideBtn = $("#hide-galaxy-btn");

    $("#galaxy-header-img").show(1000);

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

    galaxyS20Pri.on("click", function(e) {
        if (galaxyS20ImgContainer.hasClass('galaxys20-primary')) {
            return;
        }
        galaxyS20ImgContainer.fadeToggle(500);
        setTimeout(() => {
            galaxyS20ImgContainer.toggleClass("galaxys20-secondary").toggleClass('galaxys20-primary');
        }, 500);
        galaxyS20ImgContainer.fadeToggle(500);
    });

    galaxyS20Sec.on("click", function(e) {
        if (galaxyS20ImgContainer.hasClass('galaxys20-secondary')) {
            return;
        }
        galaxyS20ImgContainer.fadeToggle(500);
        setTimeout(() => {
            galaxyS20ImgContainer.toggleClass("galaxys20-secondary").toggleClass('galaxys20-primary');
        }, 500);
        galaxyS20ImgContainer.fadeToggle(500);
    });

    galaxyNote20Pri.on("click", function(e) {
        if (galaxyNote20ImgContainer.hasClass('galaxynote20-primary')) {
            return;
        }
        galaxyNote20ImgContainer.fadeToggle(500);
        setTimeout(() => {
            galaxyNote20ImgContainer.toggleClass("galaxynote20-secondary").toggleClass('galaxynote20-primary');
        }, 500);
        galaxyNote20ImgContainer.fadeToggle(500);
    });

    galaxyNote20Sec.on("click", function(e) {
        if (galaxyNote20ImgContainer.hasClass('galaxynote20-secondary')) {
            return;
        }
        galaxyNote20ImgContainer.fadeToggle(500);
        setTimeout(() => {
            galaxyNote20ImgContainer.toggleClass("galaxynote20-secondary").toggleClass('galaxynote20-primary');
        }, 500);
        galaxyNote20ImgContainer.fadeToggle(500);
    });

    addGalaxyS20Btn.on("click", function(e) {
        let itemToSend = {
            name: "Samsung Galaxy S20",
            cpu: "Exynos 990",
            gpu: "Mali-G77 MP11",
            display: "6.2 inches, SUPER AMOLED",
            os: "Android 10 (One UI 2.5)",
            camera: "2x 12MP & 64MP",
            video: "4K@60fps, 1080p@240fps",
            price: 799,
            img: "../images/galaxyImages/galaxys20ver1.jpg"
        }

        if (localStorage.getItem("cartItems") === null) {
            localStorage.setItem("cartItems", "[]");
        }
        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        newCartItems.push(itemToSend);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        alert("Added Samsung Galaxy S20 to Cart!");
    });

    addGalaxyNote20Btn.on("click", function(e) {
        let itemToSend = {
            name: "Samsung Galaxy Note 20 5G",
            cpu: "Exynos 990",
            gpu: "Mali-G77 MP11",
            display: "6.7 inches, Super AMOLED",
            os: "Android 11 (One UI 2.5)",
            camera: "2x 12MP & 64MP",
            video: "8K@24fps, 4K@60fps, 1080p@240fps",
            price: 899,
            img: "../images/galaxyImages/galaxynote20ver1.png"
        }

        if (localStorage.getItem("cartItems") === null) {
            localStorage.setItem("cartItems", "[]");
        }
        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        newCartItems.push(itemToSend);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        alert("Added Samsung Galaxy Note 20 5G to Cart!");
    });
});