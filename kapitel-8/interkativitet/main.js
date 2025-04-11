



function test(){
    let names = ["sigma", "test", "bruh"];
    let colors = ["blue", "red", "orange", "green"];
    let sigma = document.createElement('h1');
    sigma.style.color = colors[Math.floor(Math.random() * colors.length)];
    sigma.className = "item";

    let div = document.getElementById("list");

    // sigma.textContent = names[Math.floor(Math.random() * names.length)];
    sigma.textContent = "Men alla som känner gör en och annan grejIbland så är det jobbigt att vara lugn och finNär alla runt omkring mig, dom uppför sig som svinJag går den smala vägen i sanningens arméFast alla andra lever som jävla rövareEn del dom rånar banker, en del bedriver horEn del slår folk på käften, och några knullar korMen själv har jag inte gjort nånting jag bara runkarOch än så länge kan man inte åka fast för detNej, själv har jag inte gjort nånting jag bara runkarSå än så länge får jag va ifredMin farsa åkte fast när han knullade en koMin morsade åkte dit när hon horade i HjoMin onkel fick ett år när han i en lagård smögMin syrra är en hora och brorsan min är bögMin farfar lurade farmor på en millionMin morfar åkte in när han smugglade i skonMin farbror slogs ihjäl när han slogs med en polisMin moster hon fick foten för att hon släppt en fisi" 
    div.appendChild(sigma);
}

function DarkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
function WhiteMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
