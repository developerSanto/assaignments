//kilometer to meter transform

function kilometerToMeter(kilo){
    let meter = kilo * 1000;
    return meter;
}

const result = kilometerToMeter(5.7);
console.log(result,'meter');

//budgetCalculator 

function budgetCalculator(watch, phone, laptop){
    watch = watch * 50;
    phone = phone * 100;
    laptop = laptop * 500;
    let totalCost = watch + phone + laptop;
    return totalCost;
}

const budget = budgetCalculator(2, 2, 3);
console.log('Your estimate money:', budget ,'tk');

//hotelCost 

function hotelCost(day){
    if(day <= 10){
        let cost = day * 100;
        return cost;
    }
  
    else if(day <= 20){
        let firstTenDay = day * 100;
        let remainingDay = day - 10;
        let secondTenDay = remainingDay * 80;
        let cost = firstTenDay + secondTenDay;
        return cost;
    }
   
    else{
       let firstTenDay = 10 * 100;
        let secondTenDay = 10* 80;
        let remainingDay = day - 20;
        let thirdTenDay = remainingDay * 50;
        let cost = firstTenDay + secondTenDay + thirdTenDay;
        return cost;
    }
       
}

const totalCost = hotelCost(25);
console.log('Your Hotel living cost:', totalCost ,'tk');

//find the largest name form an array

function megaFriend(name){
    let largestName = name[0].length;
    for(let i = 0; i < name.length; i++){
        let element = name[i].length;
        if(element>largestName){
            largestName = element;
        }
        }

         for(let i = 0; i <= name.length; i++){
             if(name[i].length == largestName){
               return name[i];
             }
     }
}

const friendsName = megaFriend([ 'mahdiBastal','hossainMohammadRokibulIslamParves', 'santo','abukhayermohammadhossainalomsamaigoshamibaidajoledaimagonodiman']);
console.log('Largest Name;', friendsName);


