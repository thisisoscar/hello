let number = 0;
let numberIncreaseSpeed = 1;

function changeParagraph()
{
    document.getElementById('random paragraph').innerHTML += 'ya'
}

function numberIncrease()
{
    number += numberIncreaseSpeed;
    document.getElementById('number shower').innerHTML = number;
}

class IncreaseIncrease
{
    constructor(price, effect, price_increase)
    {
        this.price = price;
        this.effect = effect;
        this.price_increase = price_increase;
    }

    buy()
    {
        if (number >= this.price)
        {
            number -= this.price;
            this.price += this.price_increase;
            numberIncreaseSpeed += this.effect;
        }
        document.getElementById('number increase').innerHTML = 'increase<br>cost=0<br>effect='+numberIncreaseSpeed;
        document.getElementById('increase increase').innerHTML = 'increase increase<br>cost='+this.price+'<br>effect='+this.effect;
        document.getElementById('number shower').innerHTML = number;
    }
}

let anotherIncrease = new IncreaseIncrease(10, 1, 2);
