var kitties = [
    "Kitty 1",
    "Kitty 2",
    "Kitty 3",
    "Kitty 4",
    "Kitty 5"
]

$.each(kitties,function(index,kitty){
    $('<li class = "button" onclick="displayCat()">'+kitty+'</li>').appendTo('#cat-list-ul')
})

function displayCat(){
    
}
