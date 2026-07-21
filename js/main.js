function sayDirection(myDirection) {
    let directionArray = ["↑", "→", "↓", "←"];
    let resultArray = ["もう1回", "当たり"];

    let computerDirection = 0;

    let result = 0;

    console.log("あなたの方向：" + directionArray[myDirection]);

    let rand = Math.random() * 100;
    console.log("乱数" + rand);
    let rand_int = Math.floor(rand);
    console.log("整数の乱数" + rand_int);

    computerDirection = rand_int % 4;
    console.log("computerDirection:" + computerDirection);
    console.log("コンピュータの方向：" + directionArray[computerDirection]);

    if (myDirection === 0) {
        if (computerDirection === 0) {
            result = 1;
        } else if (computerDirection === 1) {
            result = 0;
        } else if (computerDirection === 2) {
            result = 0;
        } else if (computerDirection === 3) {
            result = 0;
        }
    } else if (myDirection === 1) {
        if (computerDirection === 0) {
            result = 0;
        } else if (computerDirection === 1) {
            result = 1;
        } else if (computerDirection === 2) {
            result = 0;
        } else if (computerDirection === 3) {
            result = 0;
        }
    } else if (myDirection === 2) {
        if (computerDirection === 0) {
            result = 0;
        } else if (computerDirection === 1) {
            result = 0;
        } else if (computerDirection === 2) {
            result = 1;
        } else if (computerDirection === 3) {
            result = 0;
        }
    } else if (myDirection === 3) {
        if (computerDirection === 0) {
            result = 0;
        } else if (computerDirection === 1) {
            result = 0;
        } else if (computerDirection === 2) {
            result = 0;
        } else if (computerDirection === 3) {
            result = 1;
        }
    }

    console.log("結果：" + resultArray[result]);

    const sayDirection_result = document.querySelector("#result");
    sayDirection_result.textContent = resultArray[result];
}