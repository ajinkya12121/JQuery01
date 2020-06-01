var ourHeadline=document.getElementById('oue-headline');
var ourButton=document.getElementById('our-button');
var ourList=document.getElementById('our-list');
var newIteamCounter=1;


var listItems=document.getElementById('our-list').getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
    // listItems[i].innerHTML='Ajinkya'; 
    listItems[i].addEventListener('click',function activateItem() {
        // alert("click detected");
        ourHeadline.innerHTML=this.innerHTML;
        //this -> represent curent selected element 
    });
}

// function activateItem() {
//     // alert("click detected");
//     ourHeadline.innerHTML=this.innerHTML;
//     //this -> represent curent selected element 
// }

ourButton.addEventListener('click',function createNewItem(){
    // ourList.innerHTML+="Hello:>";
    ourList.innerHTML+=  '<li>Hello :-> '+newIteamCounter +'</li>' ;
    newIteamCounter++;
});

// function createNewItem(){
//     // ourList.innerHTML+="Hello:>";
//     ourList.innerHTML+=  '<li>Hello :-> '+newIteamCounter +'</li>' ;
//     newIteamCounter++;
// }






