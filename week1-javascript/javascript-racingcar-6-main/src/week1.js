const inputCars = prompt("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
inputCars = inputCars.split(",");

// 객체 배열
const cars = [];
for (let i = 0; i < inputCars.length; i++) {
    cars.push({
        name : carNames[i],
        distance : 0
    });
}

const inputNum = prompt("시도할 횟수는 몇 회인가요?");
const num = parseInt(inputNum);
let ranNum;

for (let n = 0; n < num ; n++){
    for (let car of cars){
        ranNum = Math.floor(Math.random() * 10);
        if (ranNum >= 4){
            car.distance++;
        }
        console.log(`${car.name} : ${"-".repeat(car.distance)}`);
    }
}
