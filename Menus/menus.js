            var mcItem1 = {
                name: "Big Mac",
                price: 3.99,
                calories: 530
            };

            var mcItem2 = {
                name: "Filet-O-Fish",
                price: 3.79,
                calories: 390
            };
            var mcItem3 = {
                name: "Double Cheeseburger",
                price: 1.59,
                calories: 430
            };
            var mcItem4 = {
                name: "Double Quarter Pounder with Cheese",
                price: 4.79,
                calories: 740
            };
            var mcItem5 = {
                name: "Chicken McNuggets",
                price: 4.49,
                calories: 190
            };

            var kfItem1 = {
                name: "KF Milk Tea",
                price: 3.00,
                calories: 450
            }


            var kfItem2 = {
                name: "Taro Slush",
                price: 4.00,
                calories: 550
            };

            var MC_MEALS = [mcItem1, mcItem2, mcItem3, mcItem4, mcItem5];

            var KF_DRINKS = [kfItem1, kfItem2]

            var OP_LESS = "less";
            var OP_GREATER = "greater";


            function init() {

                //sortArray(MC_MEALS);
                //sortArray(KF_DRINKS);



                //lowestCost.onclick = handleUserClick(cheapestItem, "KF Tea", KF_DRINKS);
                //lowestCost.onclick = handleUserClick(cheapestItem, "McDonald's", MC_MEALS);

                //       var menus = document.getElementById('menus');
                //  var menuType = menus.options[menus.selectedIndex].value;

                //  if (menuType === "McDonald's") {
                var lowestCost = document.getElementById('cheapestItem');

                /*
                            lowestCost.onclick = function() {
                                cheapestItem(MC_MEALS);                    
                            } 
                            */

                lowestCost.onclick = function() {
                    handleUserClick(cheapestItem);
                }



                var highestCost = document.getElementById('highestCost');

                highestCost.onclick = function() {
                    handleUserClick(expensiveItem);
                }


                var lowToHigh = document.getElementById('lowToHigh');

                lowToHigh.onclick = function() {
                    handleUserClick(orderByPrice, OP_LESS);
                }

                var highToLow = document.getElementById('highToLow');

                highToLow.onclick = function() {
                    handleUserClick(orderByPrice, OP_GREATER);
                }



                var form = document.getElementById('menu');
                form.options[0].selected = 'selected';
                //menuTypeSelect()



            }

            window.addEventListener('load', init);

            function handleUserClick(func, op) {
                var menus = document.getElementById('menu');
                var menuSelected = menu.options[menu.selectedIndex].value;
                var menuType = KF_DRINKS;
                /*
                            if (menuType === "McDonald's") {
                                cheapestItem(MC_MEALS);
                            } */

                switch (menuSelected) {
                    case "McDonald's":
                        menuType = MC_MEALS;
                        break;
                    case "KF Tea":
                        menuType = KF_DRINKS;
                        break;
                }

                func(menuType, op); // is it ok to include additional parameter if some functions don't need it?

            }




            /*
                    function menuTypeSelect() {
                        var menus = document.getElementById('menus');
                        var menuType = menus.options[menus.selectedIndex].value;

                        if (menuType === "McDonald's") {
                        var lowestCost = document.getElementById('cheapestItem');

                        lowestCost.onclick = function() {
                            cheapestItem(MC_MEALS);
                        }

                        var highestCost = document.getElementById('highestCost');

                        highestCost.onclick = function() {
                            expensiveItem(MC_MEALS);
                        }


                        var lowToHigh = document.getElementById('lowToHigh');

                        lowToHigh.onclick = function() {
                            orderByPrice(MC_MEALS, OP_LESS);
                        }

                        var highToLow = document.getElementById('highToLow');

                        highToLow.onclick = function() {
                            orderByPrice(MC_MEALS, OP_GREATER);
                        }
                        }

                    }
            */

            // return name of cheapest item on menu
            function cheapestItem(menu) {
                var msg1 = document.getElementById('msg1'); // is this necessary? Code works fine without it...

                var cheapestItem = altOperation(menu, OP_LESS);
                msg1.innerHTML = "The cheapest item is " + cheapestItem + ".";


            }

            // return name of most expensive item on menu
            function expensiveItem(menu) {
                var msg2 = document.getElementById('msg2');

                var expensiveItem = altOperation(menu, OP_GREATER);
                msg2.innerHTML = "The most expensive item is " + expensiveItem + ".";
            }



            /* +++ ALTERNATIVE APPROACH: Sort the array first, then return item based on comparator operator +++ */


            // Sort the array and return the sorted array
            function sortArray(menu) {
                menu.sort(function(a, b) {
                    return a.price - b.price;
                })
            }

            // return list of menu items & prices contained in array
            function listItems(menu) {
                var items = [];
                for (i = 0; i < menu.length; i++) {
                    items.push(i + 1 + ". " + menu[i].name + " : $" + menu[i].price);
                    //items.push(" ");
                }
                return items.join('<br />');

                //result = Array.prototype.join.call(arr, "<br />" );   
            }

            // Return item based on comparator operator
            function altOperation(menu, op) {

                sortArray(menu);
                return op === OP_LESS ? menu[0].name : menu[menu.length - 1].name;
            }

            //return list of menu items by price according to comparator operator
            function orderByPrice(menu, op) {
                var ascend = listItems(menu.slice(0));
                var descend = listItems(menu.slice(0).reverse());

                var msg3 = document.getElementById('msg3');
                var msg4 = document.getElementById('msg4');

                op === OP_LESS ? msg3.innerHTML = ascend : msg4.innerHTML = descend;
            }

            // Clear message area
            function clearMessage() {
                var msgs = document.getElementsByClassName('msg'); // list of messages

                for (i = 0; i < msgs.length; i++) {
                    msgs[i].innerHTML = "";
                }

            }
            /*
                        if (op === "less") {
                             ascend;
                             msg3.innerHTML = listItems(meals);
                            } else {
                             //descend;
                             msg4.innerHTML = descend;
                            }

            */




            // Format array for legibility
            /*    function formatArray(arr) {
            /*var result = arr.slice(0);
 
            for(var i=0; i < result.length; i++) {
                result[i].name = i + ". " + result[i].name;
                //result.push(arr[i].price);
            } 

            result = Array.prototype.join.call(arr, "<br />" );    
            //arr.replace(",", "<br />");
            //console.log(typeof result)

            return result;

            }
*/




            //return result based on given comparator operator
            /* function operation(menu, op) {
            var price = menu[0].price;
            var item = menu[0].name;

            for (var i = 0; i < menu.length; i++) {
                //var indexPrice = menu[i].price;


                if ((op == "less" && (menu[i].price < price)) ||
                    (op == "greater" && (menu[i].price > price))) {
                    price = menu[i].price;
                    item = menu[i].name;
                }
            }
            console.log(item);
            return item;
        }
*/

            //console.log(meals[0].price);

            // return name of cheapest item on menu
            /*function cheapestItem(menu) {
                var msg = document.getElementById('msg');

                var cheapest = menu[0].price;
                var item;

                for (var i = 0; i < menu.length; i++) {
                    if (menu[i].price < cheapest) {
                        cheapest = menu[i].price;
                        item = menu[i].name;
                    } 
                }
                console.log(item); 
                msg.innerHTML = "The cheapest item is " + item;
            }
            */


            // return name of cheapest or most expensive item on menu
            /*function test(menu, operator) {
                var msg = document.getElementById('msg');
                var result = menu[0].price;
                var item;

                if (operator == "cheap") {
                    for (var i = 0; i < menu.length; i++) {
                        if (menu[i].price < result) {
                            result = menu[i].price;
                            item = menu[i].name;
                        }
                            msg.innerHTML = "The cheapest item is " + item;
                    }
                } else if (operator == "expensive") {
                    for (var i = 0; i < menu.length; i++) {
                        if (menu[i].price > result) {
                            result = menu[i].price;
                            item = menu[i].name;
                        }
                        msg.innerHTML = "The most expensive item is " + item;       
                }
                }
                console.log(item); 
                //msg.innerHTML = "The cheapest item is " + item;
            }

            */
