var beefBiriyaniPrice = 90;
var beefTeheriPrice = 70;
var chickenPolao = 100;
var lacchi = 30;
var myBudget = 140;
var beefPiece = 'boro';

if(beefBiriyaniPrice < myBudget){
    if(beefPiece != 'boro'){
        console.log('taratari biriyani daw');
    }
    else{
        console.log('boro piece daw,kiptamo kn koro?');
    }
}
else if(beefTeheriPrice < myBudget){
    console.log('Teheri khabo');
}
else if(chickenPolao < myBudget){
    console.log('polao khabo');
}
else if(lacchi < myBudget){
    console.log('lacchi den');
}
else{
    console.log('batash khaite aisi mama');
}