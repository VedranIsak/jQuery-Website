 $(document).ready(function(event) {
     const cartContainer = $("#cart-container");
     const showBtn = $("#show-cart-btn");
     const hideBtn = $("#hide-cart-btn");
     const refreshBtn = $("#refresh-cart-btn");
     const environmentBtn = $("#environment-button");
     const purchaseBtn = $("#purchase-btn");
     const envContainer = $("#confirm-envir-container");
     const purContainer = $("#confirm-purchase-container");
     const purText = $("#confirm-purchase-text");
     var ul = $("#cart-items");
     var totalPrice = 0;
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
        for(let i = 0; i < cartItems.length; i++) {
           let counter = 1;
            for(let y = i + 1; y < cartItems.length; y++) {
               if(!cartItems[y].isDuplicate 
                   && cartItems[i].name === cartItems[y].name 
                   && cartItems[i].storage === cartItems[y].storage 
                   && cartItems[i].imgNumber === cartItems[y].imgNumber) {
                       counter++;
                       itemsMap.set(cartItems[i], counter);
                       cartItems[y].isDuplicate = true;
               }
            }
            let singleton = true;
            itemsMap.forEach((value, key) => {
                if(key.name === cartItems[i].name) {
                    singleton = false;
                }
            });
            if(singleton) {
                itemsMap.set(cartItems[i], 1);
            }
        }
        return itemsMap;
     }

     function loadCartItems() {
         ul.empty();
         totalPrice = 0;

         if (localStorage.getItem("cartItems") !== null) {
             let cartItems = JSON.parse(localStorage.getItem("cartItems"));

             for(let i = 0; i < cartItems.length; i++) {
                if (!cartItems[i].hasOwnProperty('id')) {
                    cartItems[i].id = hash();
                }
                cartItems[i].isDuplicate = false;
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

            itemsMap = getMap();

             itemsMap.forEach((value, key) => {
                 ul.append(
                `
                <li class="item-container ${key.name}">
                <h4 class="name-header">${key.salesName} - ${key.storage}GB</h4>
                <div class="count-header-container"><h4 class="count-header">${value}</h4></div>
                <div class="img-container ${key.name}-${key.imgNumber}"></div>
                <h3 class="price-container">${key.price}$</h3>
                <button class="remove-btn" data-id="${key.id}">Remove</button>
                </li>
                `);
                if(value === 1) {
                    totalPrice += key.price;
                }
                else {
                    totalPrice += (key.price * value);
                }
             });
             $("#price-header").html(totalPrice + '$');
             $(".remove-btn").hide();
         }
     }

     showBtn.on("click", function(e, eventType) {
         loadCartItems();
         $(this).toggle(500);
         cartContainer.slideToggle(1000);
     });

     hideBtn.on("click", function(e) {
         cartContainer.slideToggle(750);
         showBtn.toggle(1000);
     })

     refreshBtn.on("click", function(e) {
         loadCartItems();
     });

     var envTimer;
     environmentBtn.hover(function(e) {
         envTimer = setTimeout(() => {
             $this = $(this);
             $this.addClass("isActive");
             $this.css("font-size", "1.15rem");
             $this.css("background", "rgba(0, 65, 70, 0.6)");
             $this.hide().text("Secure eco-friendly packaging and shipping for a small fee of 5$").fadeIn(750);
         }, 750)
     }, function(e) {
         $this = $(this);
         $this.removeClass("isActive");
         $this.css("background", "rgb(256, 256, 256)");
         $this.css("font-size", "1.5rem");
         $this.hide().text("Make your order eco-friendly?").fadeIn(750);
         clearTimeout(envTimer);
     });

     var counter = 0;
     environmentBtn.on("click", function(e) {
         $this = $(this);
         if ($this.hasClass("isActive") && counter === 0) {
             envContainer.fadeToggle(750);
             counter++;
             setTimeout(() => {
                 envContainer.fadeToggle(750);
             }, 2500);
         }
     });

    $(document).on("click", ".item-container", function(e) {
        $this = $(this);
        $this.children(".price-container").fadeToggle(750);
        $this.children(".remove-btn").slideToggle(750);
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

        if(removeIndex !== undefined) {
            cartItems.splice(removeIndex, 1);
        }

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        refreshBtn.trigger("click");
    });

    purchaseBtn.on("click", function(e) {
        purText.text("Thanks for your purchase! Your fee is " + totalPrice + "$");
        purContainer.fadeToggle(750);
        setTimeout(() => {
            purContainer.fadeToggle(750);
        }, 2500);
    });
 });