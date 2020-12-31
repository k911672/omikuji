'use strict';

//↓↓おみくじで確率を操作する場合
{
    const btn =document.getElementById('btn');

    btn.addEventListener('click', () => {
        const n = Math.random();
        
        if (n < 0.05) {
            btn.textContent  = '大吉';
        } else if (n < 0.2) {
            btn.textContent = '中吉';
        } else {
            btn.textContent = '凶';
        }
    });

}



 //↓↓omikuji-8まで配列からものをランダムに取り出す。
// {
//     
//     btn.addEventListener('click', () => {
//         //配列からものをランダムに取り出す時に使う。
//         const results = ['大吉','中吉','凶','末吉' ]
//         // const n =Math.floor(Math.random()*3)
//         // const n =Math.floor(Math.random()*results.length)
//         btn.textContent = results[Math.floor(Math.random()*results.length)]

//         // btn.textContent = 'hit!';
//         // btn.textContent = 'n';

//         // switch (n) {
//         //     case 0:
//         //         btn.textContent = "大吉"
//         //         break;
//         //     case 1:
//         //         btn.textContent = "中吉"
//         //         break;
//         //     case 2:
//         //         btn.textContent = "凶"
//         //         break;
//         // }
//     })
// }
