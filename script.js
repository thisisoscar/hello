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
