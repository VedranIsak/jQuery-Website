 $(document).ready(function(event) {
     const cartContainer = $("#cart-container");
     const showBtn = $("#show-cart-btn");
     const hideBtn = $("#hide-cart-btn");
     const refreshBtn = $("#refresh-cart-btn");
     const environmentBtn = $("#environment-button");
     const envContainer = $("#confirm-envir-container");
     var ul = $("#cart-items");
     var totalPrice = 0;
     var totalItems = 0;
     cartContainer.hide();
     envContainer.hide();
     loadCartItems();
     var orderedItems = $(".item-container");
     var removeBtns = $(".remove-btn");
     removeBtns.hide();

     function hash() {
         let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
         let hashValue = '';
         for (let i = 0; i < alphabet.length; i++) {
             hashValue += alphabet[Math.floor(Math.random() * alphabet.length)];
         }
         return hashValue;
     }

     function loadCartItems() {
         if (localStorage.getItem("cartItems") !== null) {
             let cartItems = JSON.parse(localStorage.getItem("cartItems"));
             totalPrice = 0;
             totalItems = 0;
             ul.empty();
             for (let i = 0; i < cartItems.length; i++) {
                 if (!cartItems[i].hasOwnProperty('id')) {
                     cartItems[i].id = hash();
                     localStorage.setItem("cartItems", JSON.stringify(cartItems));
                 }
                 totalPrice += cartItems[i].price;
                 ul.append(
                     `
                     <li class="item-container">
                     <h3 class="name-header">${cartItems[i].name}</h3>
                     <div class="img-container"></div>
                     <h3 class="price-container">${cartItems[i].price}$</h3>
                     <button class="remove-btn" data-id="${cartItems[i].id}">Remove</button>
                     </li>
                   `);
             }
             totalItems = cartItems.length;
             $("#total-price").html(totalPrice + '$');
             $("#total-items").html(totalItems);
         }
     }

     showBtn.on("click", function(e, eventType) {
         $(this).slideToggle(750);
         cartContainer.slideToggle(1500);
     });

     hideBtn.on("click", function(e) {
         cartContainer.slideToggle(750);
         showBtn.slideToggle(1500);
     })

     refreshBtn.on("click", function(e) {
         cartContainer.fadeToggle(150).fadeToggle(150);
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
     })

     var oldTimer;
     orderedItems.hover(function(e) {
         oldTimer = setTimeout(() => {
             $this = $(this);
             $this.children(".price-container").slideToggle(750);
             setTimeout(() => { $this.children(".remove-btn").slideToggle(750); }, 1000);
         }, 750);
     }, function(e) {
         $this = $(this);
         $this.children(".remove-btn").slideToggle(750);
         setTimeout(() => { $this.children(".price-container").slideToggle(750); }, 1000);
         clearTimeout(oldTimer);
     });


     removeBtns.on("click", function(e) {
         $this = $(this);
         $this.closest(".item-container").remove();
         let cartItems = [];

         console.log("removing");

         if (cartItems !== null) {
             let cartItems = JSON.parse(localStorage.getItem("cartItems"));
             for (let i = 0; i < cartItems.length; i++) {
                 if (cartItems[i].id === $this.attr("data-id")) {
                     cartItems.slice(i);
                     console.log(i);
                 }
             }
         }

         localStorage.setItem("cartItems", JSON.stringify(cartItems));
     });

     $("#delete-btn").on("click", function(e) {
         let cartItems = [];
         let itemsToRemove = [];
         if (localStorage.getItem("cartItems") !== null) {
             cartItems = JSON.parse(localStorage.getItem("cartItems"));
             itemsToRemove = $(".remove");
             for (let i = 0; i < cartItems.length; i++) {
                 for (let y = 0; y < itemsToRemove.length; y++) {
                     if (cartItems[i].id == itemsToRemove[y].getAttribute('data-obj-id')) {
                         cartItems.splice(i, 1);
                     }
                 }
             }
         }
         localStorage.setItem("cartItems", JSON.stringify(cartItems));
         $(".remove").remove();
         loadCartItems();
     });
 });