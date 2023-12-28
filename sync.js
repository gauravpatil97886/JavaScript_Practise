// // <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Async in JS</title>
//     <style>
//         /* CSS for the h1 element */
//         #h1 {
//             font-family: Arial, sans-serif;
//             text-align: center;
//             color: #fff;
//             margin-top: 50px; /* Adjust the top margin as needed */
//             text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow effect */
//             animation: pulse 2s infinite; /* Animation properties */
//         }

//         /* Keyframes for the pulse animation */
//         @keyframes pulse {
//             0% {
//                 transform: scale(1);
//             }
//             50% {
//                 transform: scale(1.1);
//             }
//             100% {
//                 transform: scale(1);
//             }
//         }

//         /* CSS for the button element */
//         #stop {
//             display: block;
//             margin: 20px auto;
//             padding: 10px 20px;
//             font-size: 16px;
//             border: 2px solid #fff;
//             background-color: #333;
//             color: #fff;
//             cursor: pointer;
//             transition: all 0.3s ease;
//         }

//         #stop:hover {
//             background-color: #fff;
//             color: #333;
//         }

//         /* CSS for the body */
//         body {
//             font-family: 'Roboto', sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #2c3e50; /* Updated background color */
//             color: #fff;
//             line-height: 1.6;
//         }
//     </style>
// </head>
// <body>
//     <h1 id="h1">2 projects with Async JS | chai aur #javascript</h1>
    
//     <button id="stop">Stop</button>
// </body>
// <script src="async.js"></script>
// </html>


const printGaurav = function() {
    for (let i = 0; i <= 5; i++) {
        console.log("Gaurav Patil......");
        console.log('-------------------');
    }

}
setTimeout(printGaurav, 2000);


const changeText=function()
{
document.querySelector('h1').innerHTML="Gaurav is the best Javascript Developer"
}

 const changeme=setTimeout(changeText,2000);

 document.querySelector(#Stop).addevent


