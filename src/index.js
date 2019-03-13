// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let money = {};
    let h=0; //50
    let q=0; //25
    let d=0; //10
    let n=0; //5
    let difference =0;
    if (currency<=0) {
        return {};
    }
    if (currency>=10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency>=50) {
        h=Math.floor(currency/50);
        money.H=h;
        difference=h*50;
        currency-=difference;
    }
    if (currency>=25) {
        q=Math.floor(currency/25);
        money.Q=q;
        difference=q*25;
        currency-=difference;
    }
    if (currency>=10) {
        d=Math.floor(currency/10);
        money.D=d;
        difference=d*10;
        currency-=difference;
    }
    if (currency>=5) {
        n=Math.floor(currency/5);
        money.N=n;
        difference=n*5;
        currency-=difference;
    }
    if (currency!==0) {money.P=currency;}

    return money;
}
