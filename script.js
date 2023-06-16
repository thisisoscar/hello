let number = 0;
let numberIncreaseSpeed = 1;
let increaseCost = 10;
let increaseCostIncrease = 2;
let increaseEffect = 1;
let increaseincreaseCost = 1000;
let increaseincreaseCostIncrease = 3;
let increaseincreaseEffect = 1;

function changeParagraph()
{
    document.getElementById('random paragraph').innerHTML += 'ya'
}

function showChanges()
{
    document.getElementById('number shower').innerHTML= number;
    document.getElementById('number increase').innerHTML = 'increase<br>cost=0<br>effect='+numberIncreaseSpeed;
    document.getElementById('increase increase').innerHTML = "increase 'increase'<br>cost="+increaseCost+'<br>effect='+increaseEffect;
    document.getElementById('increase increase increase').innerHTML = "increase 'increase increase'<br>cost="+increaseincreaseCost+'<br>effect='+increaseincreaseEffect;
}

function numberIncrease()
{
    number += numberIncreaseSpeed;
    showChanges();
}

function buyIncrease()
{
    if (number >= increaseCost)
    {
        number -= increaseCost;
        increaseCost += increaseCostIncrease;
        numberIncreaseSpeed += increaseEffect;
    }
    showChanges();
}

function buyIncreaseIncrease()
{
    if (number >= increaseincreaseCost)
    {
        number -= increaseincreaseCost;
        increaseincreaseCost += increaseincreaseCostIncrease;
        increaseEffect += increaseincreaseEffect;
    }
    showChanges();
}

let websites = {
    "google.com": 106500000000,
    "youtube.com": 94500000000,
    'microsoft.com': 1400000000,
    'linkedin.com': 1400000000,
    'apple.com': 665000000,
    'wikipedia.org': 7600000000,
    'cloudflare.com': 105300000,
    'whatsapp.com': 160000000
}

let idToWebsite = {
    'website1': '',
    'website2': ''
}

let score = 0;

function game()
{
    let indexA = Math.floor(Math.random() * Object.keys(websites).length);
    let indexB = Math.floor(Math.random() * Object.keys(websites).length);
    let siteA = Object.keys(websites)[indexA];
    let siteB = Object.keys(websites)[indexB];
    document.getElementById('website1').innerHTML = siteA;
    document.getElementById('website2').innerHTML = siteB;
    idToWebsite['website1'] = siteA;
    idToWebsite['website2'] = siteB;
    document.getElementById('visitors shower').innerHTML = '? | ?'
}

function pickSite(picked, unpicked)
{
    pickedSite = idToWebsite[picked];
    unpickedSite = idToWebsite[unpicked];

    pickedSiteVisitors = websites[pickedSite];
    unpickedSiteVisitors = websites[unpickedSite];

    if (pickedSiteVisitors >= unpickedSiteVisitors)
    {
        showVisitors(websites[idToWebsite['website1']], websites[idToWebsite['website2']]);
        score++;
        document.getElementById('score').innerHTML = 'score: ' + score;
    }
    else
    {
        score = 0;
        document.getElementById('score').innerHTML = 'score: ' + score;
        game();
    }
}

function showVisitors(visitors1, visitors2)
{
    document.getElementById('visitors shower').innerHTML = visitors1 + ' | ' + visitors2;
}

function nextRound()
{
    let randomChoice = Math.floor(Math.random() * 2) + 1;

    console.log(randomChoice)

    if (randomChoice == 1)
    {
        idToWebsite['website1'] = Object.keys(websites)[Math.floor(Math.random() * Object.keys(websites).length)];
        document.getElementById('website1').innerHTML = idToWebsite['website1'];
        let visitors2 = websites[idToWebsite['website2']];
        document.getElementById('visitors shower').innerHTML =  '? | ' + visitors2;
    }
    else
    {
        idToWebsite['website2'] = Object.keys(websites)[Math.floor(Math.random() * Object.keys(websites).length)];
        document.getElementById('website2').innerHTML = idToWebsite['website2'];
        let visitors1 = websites[idToWebsite['website1']];
        document.getElementById('visitors shower').innerHTML =  visitors1 + ' | ?';
    }
}

function printTextarea() {
    var textarea = document.getElementById('myTextarea');
    var printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Printed Page</title></head><body>');
    printWindow.document.write('<pre>' + textarea.value + '</pre>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}