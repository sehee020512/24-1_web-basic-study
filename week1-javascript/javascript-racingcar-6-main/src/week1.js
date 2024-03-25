import { MissionUtils } from "@woowacourse/mission-utils";

const inputCars = MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
const carName = inputCars.split(",");

const cars = [];
for (let i = 0; i < carName.length; i++) {
    cars.push({
        name : carName[i],
        distance : 0
    });
}

const inputNum = MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
const num = MissionUtils.Console.readLineAsync(inputNum);
let ranNum;

MissionUtils.Console.print("실행결과");

for (let n = 0; n < num ; n++){
    for (let car of cars){
        ranNum = MissionUtils.Random.pickNumberInRange(0, 9);
        if (ranNum >= 4){
            car.distance++;
        }
        MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.distance)}`);
    }
}

let winners = [];
let maxDis = 0;

for (let car of cars){
    if (car.distance > maxDis) maxDis = car.distance;
}

for (let car of cars){
    if (car.distance == maxDis) winners.push(car.name);
}

MissionUtils.Console.print("최종우승자 : " + winners.join(','));