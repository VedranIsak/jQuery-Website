 $(document).ready(function(event) {
     const showButton = $(".show-cart-btn");
     const navbar = $("navbar");
     const footer = $("footer");
     var ul = $("#cart-items");
     var totalPrice = 0;
     var totalItems = 0;
     loadCartItems();

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
                   <li class="cart-item" data-obj-id=${cartItems[i].id}>
                       <h2>${cartItems[i].name} - ${cartItems[i].storage}GB</h2>
                       <div class="content-container">
                           <div style="background-image: ${cartItems[i].imgUrl}"></div>
                           <table>
                               <tr>
                                   <th>CPU</th>
                                   <th>RAM</th>
                               </tr>
                               <tr>
                                   <td>${cartItems[i].cpu}</td>
                                   <td>${cartItems[i].ram}</td>
                               </tr>
                               <tr>
                                   <th>Display</th>
                                   <th>OS</th>
                               </tr>
                               <tr>
                                   <td>${cartItems[i].display}</td>
                                   <td>${cartItems[i].os}</td>
                               </tr>
                               <tr>
                                   <th>Camera</th>
                                   <th>Video</th>
                               </tr>
                               <tr>
                                   <td>${cartItems[i].backCamera}</td>
                                   <td>${cartItems[i].video}</td>
                               </tr>
                           </table>
                       </div>
                       <div class="bottom-container">
                           <h2>${cartItems[i].price}$</h2>
                           <input type="checkbox">
                       </div>
                   </li>`);
             }
             totalItems = cartItems.length;
             $("#total-price").html(totalPrice + '$');
             $("#total-items").html(totalItems);
         }
     }

     showButton.on("click", function(e) {
         $this = $(this);
         if (!$this.hasClass("isClicked")) {
             loadCartItems();
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


     $("input[type=checkbox]").change(function(e) {
         $this = $(this);
         if ($this.prop("checked")) {
             $this.parent().closest(".cart-item").addClass("remove");
         } else {
             $this.parent().closest(".cart-item").removeClass("remove");
         }
     })

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