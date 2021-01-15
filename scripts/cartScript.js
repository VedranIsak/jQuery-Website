$(document).ready(function(event) {
    const cartContainer = $("#cart-container");
    const showContainer = $("#cart-info-container");
    const showHeader = $("#cart-show-header");
    const hideBtn = $("#hide-cart-btn");
    const refreshBtn = $("#refresh-cart-btn");
    const environmentBtn = $("#environment-button");
    const purchaseBtn = $("#purchase-btn");
    const envContainer = $("#confirm-envir-container");
    const purContainer = $("#confirm-purchase-container");
    const purText = $("#confirm-purchase-text");
    var ul = $("#cart-items");
    var totalPrice = 0;
    var envPrice = 0;
    var itemsCount = 0;
    var showEnv = true;
    cartContainer.hide();
    envContainer.hide();
    purContainer.hide();
    var removeBtns = $(".remove-btn");
    removeBtns.hide();
    loadCartItems();

    function hash() {
        let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let hashValue = '';
        for (let i = 0; i < alphabet.length; i++) {
            hashValue += alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        return hashValue;
    }

    function getMap() {
        let cartItems =
            JSON.parse(localStorage.getItem("cartItems"));
        let itemsMap = new Map();
        for (let i = 0; i < cartItems.length; i++) {
            let counter = 1;
            for (let y = i + 1; y < cartItems.length; y++) {
                if (!cartItems[y].isDuplicate &&
                    cartItems[i].name === cartItems[y].name &&
                    cartItems[i].storage === cartItems[y].storage &&
                    cartItems[i].imgNumber === cartItems[y].imgNumber) {
                    counter++;
                    itemsMap.set(cartItems[i], counter);
                    cartItems[y].isDuplicate = true;
                }
            }
            let singleton = true;
            itemsMap.forEach((value, key) => {
                if (key.name === cartItems[i].name) {
                    singleton = false;
                }
            });
            if (singleton) {
                itemsMap.set(cartItems[i], 1);
            }
        }
        return itemsMap;
    }

    function getMap() {
        let cartItems =
            JSON.parse(localStorage.getItem("cartItems"));
        let itemsMap = new Map();
        for (let i = 0; i < cartItems.length; i++) {
            let counter = 1;
            for (let y = i + 1; y < cartItems.length; y++) {
                if (!cartItems[y].isDuplicate &&
                    cartItems[i].name === cartItems[y].name &&
                    cartItems[i].storage === cartItems[y].storage &&
                    cartItems[i].imgNumber === cartItems[y].imgNumber) {
                    counter++;
                    itemsMap.set(cartItems[i], counter);
                    cartItems[y].isDuplicate = true;
                }
            }
            let singleton = true;
            itemsMap.forEach((value, key) => {
                if (key.name === cartItems[i].name &&
                    key.storage === cartItems[i].storage &&
                    key.imgNumber === cartItems[i].imgNumber) {
                    singleton = false;
                }
            });
            if (singleton) {
                itemsMap.set(cartItems[i], 1);
            }
        }
        return itemsMap;
    }

    function loadCartItems() {
        ul.empty();
        totalPrice = envPrice;

        if (localStorage.getItem("cartItems") !== null) {
            let cartItems = JSON.parse(localStorage.getItem("cartItems"));

            for (let i = 0; i < cartItems.length; i++) {
                if (!cartItems[i].hasOwnProperty('id')) {
                    cartItems[i].id = hash();
                }
                cartItems[i].isDuplicate = false;
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

            itemsMap = getMap();

            itemsMap.forEach((value, key) => {
                if (key.imgCount === 3) {
                    ul.append(
                        `
                   <li class="item-container ${key.name}">
                   <div id="${key.name}-cart-img-one" data-phone-id="${key.id}" class="cart-switch-img img-one"></div>
                   <div id="${key.name}-cart-img-two" data-phone-id="${key.id}" class="cart-switch-img img-two"></div>
                   <div id="${key.name}-cart-img-three" data-phone-id="${key.id}" class="cart-switch-img img-three"></div>
                   <h4 id=${key.id} class="name-header" data-storage=${key.storage} data-start-storage=${key.storage} data-price=${key.price}>${key.salesName} - ${key.storage}GB</h4>
                   <div class="count-header-container"><h4 class="count-header">${value}</h4></div>
                   <div id="${key.id}-img" class="img-container ${key.name}-${key.imgNumber} ${key.name}" data-phone-id="${key.id}"></div>
                   <h3 class="price-container">${key.price}$</h3>
                   <button class="remove-btn" data-id="${key.id}">Remove</button>
                   </li>
                   `);
                } else {
                    ul.append(
                        `
                   <li class="item-container ${key.name}">
                   <div id="${key.name}-cart-img-one" data-phone-id="${key.id}" class="cart-switch-img img-one"></div>
                   <div id="${key.name}-cart-img-two" data-phone-id="${key.id}" class="cart-switch-img img-two"></div>
                   <h4 id=${key.id} class="name-header" data-storage=${key.storage} data-start-storage=${key.storage} data-price=${key.price}>${key.salesName} - ${key.storage}GB</h4>
                   <div class="count-header-container"><h4 class="count-header">${value}</h4></div>
                   <div id="${key.id}-img" class="img-container ${key.name}-${key.imgNumber} ${key.name}"></div>
                   <h3 class="price-container">${key.price}$</h3>
                   <button class="remove-btn" data-id="${key.id}">Remove</button>
                   </li>
                   `);
                }
                if (value === 1) {
                    totalPrice += key.price;
                } else {
                    totalPrice += (key.price * value);
                }
            });
            $("#price-header").html(totalPrice + '$');
            $(".remove-btn").hide();
            itemsCount = cartItems.length;
        }
    }

    showHeader.on("click", function(e, eventType) {
        loadCartItems();
        showContainer.toggle(500);
        cartContainer.slideToggle(1000);
    });

    hideBtn.on("click", function(e) {
        cartContainer.slideToggle(750);
        showContainer.toggle(1000);
    })

    refreshBtn.on("click", function(e) {
        loadCartItems();
    });

    var envTimer;
    environmentBtn.hover(function(e) {
        if (!showEnv) {
            return;
        }
        envTimer = setTimeout(() => {
            $this = $(this);
            $this.addClass("isActive");
            $this.css("font-size", "1.15rem");
            $this.css("background", "rgba(0, 65, 70, 0.6)");
            $this.hide().text("Secure eco-friendly packaging and shipping for a small fee of 5$").fadeIn(750);
        }, 750)
    }, function(e) {
        if (!showEnv) {
            return;
        }
        $this = $(this);
        $this.removeClass("isActive");
        $this.css("background", "rgb(0, 0, 0)");
        $this.css("font-size", "1.5rem");
        $this.hide().text("Make your order eco-friendly?").fadeIn(750);
        clearTimeout(envTimer);
    });

    var counter = 0;
    environmentBtn.on("click", function(e) {
        $this = $(this);
        if ($this.hasClass("isActive") && counter === 0) {
            envContainer.fadeToggle(500).delay(2000).fadeToggle(500);
            $("#price-header").toggleClass("active");
            setTimeout(() => {
                $("#price-header").toggleClass("active");
            }, 150);
            counter++;
            envPrice = 5;
            loadCartItems();
            environmentBtn.text("Thanks for making your order eco-friendly!");
            showEnv = false;
        }
    });

    $(document).on("click", ".item-container .img-container", function(e) {
        $this = $(this);
        $this.toggleClass("isClicked");

        if ($this.hasClass("isClicked")) {
            $this.siblings("h3.price-container").slideToggle(750);
            setTimeout(() => {
                $this.siblings("button.remove-btn").slideToggle(750);
            }, 500);
        } else {
            $this.siblings("button.remove-btn").slideToggle(750);
            setTimeout(() => {
                $this.siblings("h3.price-container").slideToggle(750);
            }, 500);
        }
    });


    $(document).on("click", ".cart-switch-img", function(e) {
        $this = $(this);
        let id = $this.attr("data-phone-id");
        let phoneName = e.target.id;
        let breaker = phoneName.indexOf('-');
        let fullPhoneName = phoneName.slice(0, breaker);

        $("#" + id + "-img").removeClass(fullPhoneName + "-one").removeClass(fullPhoneName + "-two").removeClass(fullPhoneName + "-three");
        if ($this.hasClass("img-one")) {
            $("#" + id + "-img").addClass(fullPhoneName + "-one");
        } else if ($this.hasClass("img-two")) {
            $("#" + id + "-img").addClass(fullPhoneName + "-two");
        } else if ($this.hasClass("img-three")) {
            $("#" + id + "-img").addClass(fullPhoneName + "-three");
        }
    });

    $(document).on("click", ".cart-switch-img", function(e) {
        $this = $(this);
        let id = $this.attr("data-phone-id");
        let imgNumber;
        let phoneName = e.target.id;
        let breaker = phoneName.indexOf('-');
        let fullPhoneName = phoneName.slice(0, breaker);

        $("#" + id + "-img").removeClass(fullPhoneName + "-one").removeClass(fullPhoneName + "-two").removeClass(fullPhoneName + "-three");
        if ($this.hasClass("img-one")) {
            $("#" + id + "-img").addClass(fullPhoneName + "-one");
            imgNumber = "one";
        } else if ($this.hasClass("img-two")) {
            $("#" + id + "-img").addClass(fullPhoneName + "-two");
            imgNumber = "two";
        } else if ($this.hasClass("img-three")) {
            $("#" + id + "-img").addClass(fullPhoneName + "-three");
            imgNumber = "three";
        }

        let newCartItems = JSON.parse(localStorage.getItem("cartItems"));
        for (let i = 0; i < newCartItems.length; i++) {
            if (newCartItems[i].id === id) {
                newCartItems[i].imgNumber = imgNumber;
            }
        }

        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        loadCartItems();
    });

    $(document).on("click", ".item-container .name-header", function(e) {
        let targetId = e.target.id;
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));

        let price;
        let currentStorage;
        let defaultStorage;

        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === targetId) {
                price = cartItems[i].price;
                defaultStorage = parseInt(cartItems[i].defaultStorage);
                currentStorage = parseInt(cartItems[i].storage);
                targetPhone = cartItems[i];
            }
        }

        if (currentStorage === (defaultStorage * 4)) {
            currentStorage = defaultStorage;
            price -= 200;
        } else {
            currentStorage *= 2;
            price += 100;
        }

        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === targetId) {
                cartItems[i].price = price;
                cartItems[i].storage = currentStorage;
                targetPhone = cartItems[i];
            }
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        refreshBtn.trigger("click");
    });

    $(document).on("click", ".remove-btn", function(e) {
        $this = $(this);

        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        let removeIndex;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === $this.attr("data-id")) {
                removeIndex = i;
            }
        }

        if (removeIndex !== undefined) {
            cartItems.splice(removeIndex, 1);
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        $("#price-header").toggleClass("active");
        setTimeout(() => {
            $("#price-header").toggleClass("active");
        }, 150)
        refreshBtn.trigger("click");
    });

    purchaseBtn.on("click", function(e) {
        $this = $(this);
        if (itemsCount === 0 || $this.hasClass("active")) { return; }
        $this.addClass("active");
        purText.text("Thanks for your purchase! Your fee is " + totalPrice + "$");
        purContainer.fadeToggle(500).delay(2000).fadeToggle(500);
    });
});