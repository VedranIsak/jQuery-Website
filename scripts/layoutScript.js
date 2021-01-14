$(document).ready(function(event) {
    $(".phone-content-section").hide();

    const phones = [{
            "name": "pixel5",
            "salesName": "Google Pixel 5",
            "cpu": "Snapdragon 765G",
            "gpu": "Adreno 620",
            "ram": "8GB DDR4",
            "backCamera": "12.2MP & 16MP",
            "video": "4K@60fps/1080p@240fps",
            "frontCamera": "8MP",
            "display": "6.0 inches/OLED",
            "resolution": "1080x2340/432ppi",
            "os": "Android 11 (Vanilla)",
            "price": 799,
            "imgNumber": "",
            "storage": 128,
            "defaultStorage": 128,
            "isDuplicate": false,
            "imgCount": 2
        },
        {
            "name": "pixel4a",
            "salesName": "Google Pixel 4a",
            "cpu": "Snapdragon 765G",
            "gpu": "Adreno 620",
            "ram": "6GB DDR4",
            "backCamera": "12.2MP & 16MP",
            "video": "4K@60fps/1080p@240fps",
            "frontCamera": "8MP",
            "display": "6.2 inches/OLED",
            "resolution": "1080x2340/413ppi",
            "os": "Android 11 (Vanilla)",
            "price": 499,
            "imgNumber": "",
            "storage": 64,
            "defaultStorage": 64,
            "isDuplicate": false,
            "imgCount": 2
        },
        {
            "name": "pixel4xl",
            "salesName": "Google Pixel 4XL",
            "cpu": "Snapdragon 855",
            "gpu": "Adreno 640",
            "ram": "6GB DDR4",
            "backCamera": "12.2MP & 16MP",
            "video": "4K@30fps/1080p@120fps",
            "frontCamera": "8MP",
            "display": "6.3 inches/OLED",
            "resolution": "1440x3040/537ppi",
            "os": "Android 10 (Vanilla)",
            "price": 599,
            "imgNumber": "",
            "storage": 128,
            "defaultStorage": 128,
            "isDuplicate": false,
            "imgCount": 2
        },
        {
            "name": "pixel4",
            "salesName": "Google Pixel 4",
            "cpu": "Snapdragon 855",
            "gpu": "Adreno 640",
            "ram": "6GB DDR4",
            "backCamera": "12.2MP & 16MP",
            "video": "4K@430fps/1080p@120fps",
            "frontCamera": "8MP",
            "display": "5.7 inches/OLED",
            "resolution": "1080x2280/444ppi",
            "os": "Android 10 (Vanilla)",
            "price": 499,
            "imgNumber": "",
            "storage": 64,
            "defaultStorage": 64,
            "isDuplicate": false,
            "imgCount": 2
        },
        {
            "name": "galaxys20",
            "salesName": "Samsung Galaxy S20",
            "cpu": "Exynos 990",
            "gpu": "Mali G-77 MP11",
            "ram": "8GB DDR4",
            "backCamera": "2x12MP & 64MP",
            "video": "4K@60fps/1080p@240fps",
            "frontCamera": "10MP",
            "display": "6.2 inches/Super AMOLED",
            "resolution": "1440x3200/563ppi",
            "os": "Android 10 (One UI 2.5)",
            "price": 799,
            "imgNumber": "",
            "storage": 128,
            "defaultStorage": 128,
            "isDuplicate": false,
            "imgCount": 3
        },
        {
            "name": "galaxynote20",
            "salesName": "Samsung Galaxy Note 20",
            "cpu": "Exynos 990",
            "gpu": "Mali G-77 MP11",
            "ram": "8GB DDR4",
            "backCamera": "2x12MP & 64MP",
            "video": "8K@24fps/4K@60fps/1080p@240fps",
            "frontCamera": "10MP",
            "display": "6.7 inches/Super AMOLED",
            "resolution": "1080x2400/393ppi",
            "os": "Android 10 (One UI 2.5)",
            "price": 899,
            "imgNumber": "",
            "storage": 128,
            "defaultStorage": 128,
            "isDuplicate": false,
            "imgCount": 2
        },
        {
            "name": "galaxys10",
            "salesName": "Samsung Galaxy S10",
            "cpu": "Exynos 9820",
            "gpu": "Mali G-76 MP12",
            "ram": "8GB DDR4",
            "backCamera": "2x12MP & 16MP",
            "video": "4K@60fps/1080p@240fps",
            "frontCamera": "10MP",
            "display": "6.1 inches/Dynamic AMOLED",
            "resolution": "1440x3040/550ppi",
            "os": "Android 9 (One UI 2.5)",
            "price": 649,
            "imgNumber": "",
            "storage": 64,
            "defaultStorage": 64,
            "isDuplicate": false,
            "imgCount": 2
        },
        {
            "name": "galaxynote10",
            "salesName": "Samsung Galaxy Note 10",
            "cpu": "Exynos 9825",
            "gpu": "Mali G-76 MP12",
            "ram": "8GB DDR4",
            "backCamera": "2x12MP & 16MP",
            "video": "4K@60fps/1080p@240fps",
            "frontCamera": "10MP",
            "display": "6.3 inches/Dynamic AMOLED",
            "resolution": "1080x2280/401ppi",
            "os": "Android 9 (One UI 2.5)",
            "price": 749,
            "imgNumber": "",
            "storage": 128,
            "defaultStorage": 128,
            "isDuplicate": false,
            "imgCount": 2
        },
        {
            "name": "iphone12promax",
            "salesName": "Apple iPhone 12 Pro Max",
            "cpu": "Apple A14 Bionic",
            "gpu": "Apple GPU",
            "ram": "8GB DDR4",
            "backCamera": "3x12MP & LiDAR",
            "video": "4K@60fps/1080p@240fps",
            "frontCamera": "2x12MP",
            "display": "6.7 inches/OLED",
            "resolution": "1284x2778/458ppi",
            "os": "iOS 14.1",
            "price": 999,
            "imgNumber": "",
            "storage": 128,
            "defaultStorage": 128,
            "isDuplicate": false,
            "imgCount": 3
        },
        {
            "name": "iphone12",
            "salesName": "Apple iPhone 12",
            "cpu": "Apple A14 Bionic",
            "gpu": "Apple GPU",
            "ram": "4GB DDR4",
            "backCamera": "2x12MP",
            "video": "4K@60fps/1080p@240fps",
            "frontCamera": "2x12MP",
            "display": "6.1 inches/OLED",
            "resolution": "1170x2532/460ppi",
            "os": "iOS 14.1",
            "price": 849,
            "imgNumber": "",
            "storage": 64,
            "defaultStorage": 64,
            "isDuplicate": false,
            "imgCount": 3
        },
        {
            "name": "iphone11promax",
            "salesName": "Apple iPhone 11 Pro Max",
            "cpu": "Apple A13 Bionic",
            "gpu": "Apple GPU",
            "ram": "4GB DDR4",
            "backCamera": "3x12MP",
            "video": "4K@60fps/1080p@240fps",
            "frontCamera": "12MP & SL 3D",
            "display": "6.5 inches/OLED",
            "resolution": "1242x2688/458ppi",
            "os": "iOS 13",
            "price": 899,
            "imgNumber": "",
            "storage": 128,
            "defaultStorage": 128,
            "isDuplicate": false,
            "imgCount": 3
        },
        {
            "name": "iphone11",
            "salesName": "Apple iPhone 11",
            "cpu": "Apple A13 Bionic",
            "gpu": "Apple GPU",
            "ram": "4GB DDR4",
            "backCamera": "2x12MP",
            "video": "4K@60fps/1080p@240fps",
            "frontCamera": "12MP & SL 3D",
            "display": "6.1 inches/OLED",
            "resolution": "828x1792/326ppi",
            "os": "iOS 13",
            "price": 799,
            "imgNumber": "",
            "storage": 64,
            "defaultStorage": 64,
            "isDuplicate": false,
            "imgCount": 3
        }
    ];

    const specsBtns = $(".switch-container");
    const viewPhonesBtns = $(".view-phones-btn");
    const hidePhonesBtns = $(".hide-phones-btn");
    const addPhonesBtns = $(".add-phone-btn");
    const switchStorageBtns = $(".name-container");
    const addedToCartContainers = $(".added-to-cart");
    const goToCartBtns = $(".go-to-cart-btn");
    addedToCartContainers.hide();

    specsBtns.on("click", function(e) {
        $this = $(this);
        let phoneName = e.target.id;
        let breaker = phoneName.indexOf('-');
        let fullPhoneName = phoneName.slice(0, breaker);

        let index = 0;
        for (let i = 0; i < phones.length; i++) {
            if (fullPhoneName === phones[i].name) {
                index = i;
            }
        }

        if (!$this.hasClass("active")) {
            $this.addClass("active");
            $("#" + fullPhoneName + "-img").remove();
            $("#" + fullPhoneName + "-container").append(`
            <div id="${fullPhoneName}-stats-container" class="stats-container">
                    <table>
                        <tr>
                            <th>CPU</th>
                            <td><span>${phones[index].cpu}</span></td>
                        </tr>
                        <tr>
                            <th>GPU</th>
                            <td><span>${phones[index].gpu}</span></td>
                        </tr>
                        <tr>
                            <th>RAM</th>
                            <td><span>${phones[index].ram}</span></td>
                        </tr>
                        <tr>
                            <th>Main Camera</th>
                            <td><span>${phones[index].backCamera}</span></td>
                        </tr>
                        <tr>
                            <th>Video</th>
                            <td><span>${phones[index].video}</span></td>
                        </tr>
                        <tr>
                            <th>Selfie Camera</th>
                            <td><span>${phones[index].frontCamera}</span></td>
                        </tr>
                        <tr>
                            <th>Display</th>
                            <td><span>${phones[index].display}</span></td>
                        </tr>
                        <tr>
                            <th>Resolution</th>
                            <td><span>${phones[index].resolution}</span></td>
                        </tr>
                        <tr>
                            <th>OS</th>
                            <td><span>${phones[index].os}</span></td>
                        </tr>
                    </table>
                </div>
            `);
            $this.html("Images");
        } else {
            $this.removeClass("active");

            let imgCount = $("#" + fullPhoneName + "-container").attr("data-img-count");
            let imgNumber = $("#" + fullPhoneName + "-container").attr("data-img");

            $("#" + fullPhoneName + "-stats-container").remove();
            if (imgCount === '3') {
                $("#" + fullPhoneName + "-container").append(`
                <div id=${fullPhoneName}-img class="img-container ${fullPhoneName}-${imgNumber}">
                    <div id="${fullPhoneName}-img-one" class="switch-img img-one"></div>
                    <div id="${fullPhoneName}-img-two" class="switch-img img-two"></div>
                    <div id="${fullPhoneName}-img-three" class="switch-img img-three"></div>
                </div>
                `);
            } else {
                $("#" + fullPhoneName + "-container").append(`
                <div id=${fullPhoneName}-img class="img-container ${fullPhoneName}-${imgNumber}">
                    <div id="${fullPhoneName}-img-one" class="switch-img img-one"></div>
                    <div id="${fullPhoneName}-img-two" class="switch-img img-two"></div>
                </div>
                `);
            }
            $this.html("Specs");
        }
    });

    $(document).on("click", ".switch-img", function(e) {
        let phoneName = e.target.id;
        let breaker = phoneName.indexOf('-');
        let fullPhoneName = phoneName.slice(0, breaker);
        let imgNumber = phoneName.slice(breaker + 1, phoneName.length);
        let $imgContainer = $("#" + fullPhoneName + "-img");
        let $phoneContainer = $("#" + fullPhoneName + "-container");

        $imgContainer.removeClass(fullPhoneName + "-one").removeClass(fullPhoneName + "-two").removeClass(fullPhoneName + "-three");
        if (imgNumber === "img-one") {
            $imgContainer.addClass(fullPhoneName + "-one");
            $phoneContainer.attr("data-img", "one");
        } else if (imgNumber === "img-two") {
            $imgContainer.addClass(fullPhoneName + "-two");
            $phoneContainer.attr("data-img", "two");
        } else if (imgNumber === "img-three") {
            $imgContainer.addClass(fullPhoneName + "-three");
            $phoneContainer.attr("data-img", "three");
        }
    });

    viewPhonesBtns.on("click", function(e) {
        let phoneName = e.target.id;
        let breaker = phoneName.indexOf('-');
        let fullPhoneName = phoneName.slice(0, breaker);
        $("#" + fullPhoneName + "-cover").slideToggle(750);
        $("#" + fullPhoneName + "-phone-section").slideToggle(1500);
    });

    hidePhonesBtns.on("click", function(e) {
        e.preventDefault();
        let phoneName = e.target.id;
        let breaker = phoneName.indexOf('-');
        let fullPhoneName = phoneName.slice(0, breaker);

        $("#" + fullPhoneName + "-phone-section").slideToggle(750);
        $("#" + fullPhoneName + "-cover").slideToggle(1500);
    });

    addPhonesBtns.on("click", function(e) {
        $this = $(this);

        addPhonesBtns.prop('disabled', true);
        window.setTimeout(function() {
            addPhonesBtns.prop('disabled', false);
        }, 2000);

        let phoneName = e.target.id;
        let breaker = phoneName.indexOf('-');
        let fullPhoneName = phoneName.slice(0, breaker);
        let phoneToSend = {};

        for (let i = 0; i < phones.length; i++) {
            if (fullPhoneName === phones[i].name) {
                phoneToSend = phones[i];
                phoneToSend.imgNumber = $("#" + fullPhoneName + "-container").attr("data-img");
            }
        }

        if (localStorage.getItem("cartItems") === null) {
            localStorage.setItem("cartItems", "[]");
        }

        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        newCartItems.push(phoneToSend);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));

        let addedCartContainer = $("." + fullPhoneName + "-add");
        let textHeader = addedCartContainer.children("h4");
        textHeader.text(`Added ${phoneToSend.salesName} To Your Cart`);
        addedCartContainer.fadeToggle(500).delay(1000).fadeToggle(500);
    });

    switchStorageBtns.on("click", function(e) {
        let phoneName = e.target.id;
        let breaker = phoneName.indexOf('-');
        let fullPhoneName = phoneName.slice(0, breaker);

        let currentStorage = e.target.getAttribute("data-storage");
        let currentCounter = e.target.getAttribute("data-counter");
        let price;

        if (currentCounter < 3) {
            currentStorage *= 2;
            currentCounter++;
            for (let i = 0; i < phones.length; i++) {
                if (phones[i].name === fullPhoneName) {
                    phones[i].price += 100;
                    price = phones[i].price;
                }
            }
        } else {
            currentStorage /= 4;
            currentCounter = 1;
            for (let i = 0; i < phones.length; i++) {
                if (phones[i].name === fullPhoneName) {
                    phones[i].price -= 200;
                    price = phones[i].price;
                }
            }
        }

        let target = $("#" + e.target.id);
        let oldText = target.text();
        let textBreaker = oldText.indexOf('-');
        let newText = oldText.slice(0, textBreaker);
        newText += ("- " + currentStorage + "GB" + " - " + price + "$");
        target.html(newText);
        target.attr("data-storage", currentStorage);
        target.attr("data-counter", currentCounter);

        for (let i = 0; i < phones.length; i++) {
            if (fullPhoneName === phones[i].name) {
                phones[i].storage = currentStorage;
            }
        }
    });

    goToCartBtns.on("click", function(e) {
        document.getElementById("cart-section").scrollIntoView({ behavior: "smooth" });
    });
});