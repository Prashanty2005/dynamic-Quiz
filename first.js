//we have to make questions here as we have to
//  give randomly questions to stuedent
//for ex. total q are 100 and ecah student needs to give 10 
//questions each
//make object of each question which includes question,options,answer
//store such 20 objects in a form of array



 
const cricketQuiz = [
    {
        question: "Who holds the record for the highest individual score in Test cricket?",
        options: ["Brian Lara", "Sachin Tendulkar", "Don Bradman", "Virat Kohli"],
        correctAnswer: "Brian Lara"
    },
    {
        question: "Which country has won the most ICC Cricket World Cups?",
        options: ["Australia", "India", "West Indies", "England"],
        correctAnswer: "Australia"
    },
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Jacques Kallis"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "What is the highest team total in an ODI match?",
        options: ["481", "444", "498", "443"],
        correctAnswer: "498"
    },
    {
        question: "Who was the first bowler to take 500 Test wickets?",
        options: ["Shane Warne", "Muttiah Muralitharan", "Courtney Walsh", "Glenn McGrath"],
        correctAnswer: "Courtney Walsh"
    },
    {
        question: "Which player has scored the fastest century in ODI cricket (by balls faced)?",
        options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Glenn Maxwell"],
        correctAnswer: "AB de Villiers"
    },
    {
        question: "Who hit the 'Sandpaper Gate' scandal in 2018?",
        options: ["South Africa", "Australia", "England", "India"],
        correctAnswer: "Australia"
    },
    {
        question: "Which team won the first-ever T20 World Cup in 2007?",
        options: ["India", "Pakistan", "Sri Lanka", "West Indies"],
        correctAnswer: "India"
    },
    {
        question: "Who has the most runs in IPL history?",
        options: ["Virat Kohli", "Suresh Raina", "Rohit Sharma", "David Warner"],
        correctAnswer: "Virat Kohli"
    },
    {
        question: "What is the nickname of the England cricket team?",
        options: ["Lions", "Three Lions", "Poms", "The Royals"],
        correctAnswer: "Three Lions"
    },
    {
        question: "Who was the first batsman to score a double century in ODIs?",
        options: ["Rohit Sharma", "Martin Guptill", "Sachin Tendulkar", "Chris Gayle"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "Which bowler has the best bowling figures in an ODI innings (10 wickets)?",
        options: ["Glenn McGrath", "Muttiah Muralitharan", "Chaminda Vaas", "Anil Kumble"],
        correctAnswer: "Anil Kumble"
    },
    {
        question: "Who is the only player to score 100 international centuries?",
        options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Kumar Sangakkara"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "Which country has never won the ICC T20 World Cup?",
        options: ["Sri Lanka", "Pakistan", "South Africa", "West Indies"],
        correctAnswer: "South Africa"
    },
    {
        question: "Who is the fastest bowler to reach 100 wickets in ODIs?",
        options: ["Mitchell Starc", "Saqlain Mushtaq", "Rashid Khan", "Trent Boult"],
        correctAnswer: "Rashid Khan"
    },
    {
        question: "Which Indian cricketer is known as 'Captain Cool'?",
        options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Sourav Ganguly"],
        correctAnswer: "MS Dhoni"
    },
    {
        question: "Who has taken the most wickets in Test cricket history?",
        options: ["Shane Warne", "James Anderson", "Anil Kumble", "Muttiah Muralitharan"],
        correctAnswer: "Muttiah Muralitharan"
    },
    {
        question: "What is the maximum number of runs scored off a single ball in cricket?",
        options: ["6", "7", "8", "5"],
        correctAnswer: "7"
    },
    {
        question: "Which team won the 2019 ICC Cricket World Cup?",
        options: ["New Zealand", "Australia", "England", "India"],
        correctAnswer: "England"
    },
    {
        question: "Who was the first Indian to take a hat-trick in the World Cup?",
        options: ["Kapil Dev", "Chethan Sharma", "Mohammed Shami", "Jasprit Bumrah"],
        correctAnswer: "Chethan Sharma"
    }
]

//function RandomQuestion(){
//     const data =new Set();
//     //use set for unique object

//     while(data.size!=5){
//         const index=Math.floor(Math.random()*21);
//         data.add(cricketQuiz[index]);
//     }
//    //convert set into array

//     return [...data];

//this may increse time complexity


//sort function
//ologn
// cricketQuiz.sort(()=>Math.random()-0.5);
// return cricketQuiz.slice(0,5);
 

//method 3
// const arr=[];
// let length=cricketQuiz.length;
// for(let i=0;i<5;i++){
//     const index =Math.floor(Math.random()*(length));
//     arr.push(cricketQuiz[index]);

//     [cricketQuiz[index],cricketQuiz[length-1]]=[cricketQuiz[length-1],cricketQuiz[index]];
//     length--;

// }
// return arr;

// }

// select the form and insert all the elements into it

// const form =document.querySelector("form");

// const problem=RandomQuestion();

// const original_answer={};
// problem.forEach((obj,index)=>{
//     const div_element=document.createElement("div")
//     div_element.className='question';

//     original_answer[`q${index+1}`]=obj['correctAnswer'];

//     const para=document.createElement('p');
//     para.textContent= `${index +1}. ${obj['question']}`;

//     div_element.appendChild(para);

//     //create four options 
//     obj['options'].forEach((data)=>{
//         const label=document.createElement('label');
//         const input=document.createElement('input');
//         input.type='radio';
//         input.name=`q${index+1}`;
//         input.value= data;
//         label.appendChild(input);
//         const textnode=document.createTextNode(data);
//         label.append(textnode);

//         div_element.appendChild(label);
//         div_element.appendChild(document.createElement('br'));

//     })

//     form.appendChild(div_element);

   
// })

// let ans=0;
// form.addEventListener("submit",(event)=>{

//     event.preventDefault();
//     let data= new FormData(form);

//     for(let [key,value] of data.entries()){
//     if(original_answer[key]===value)
//         ans++;
// }
// const out= document.getElementById("out");
// out.innerText=`total correct answer are ${ans} out of 5`;

// })

// const button=document.createElement("button");
// button.className="submit-btn";
// button.type="submit";
// button.innerHTML="submit";

// form.appendChild(button);


//checking



function RandomQuestion(){
    let arr=[];
    let length= cricketQuiz.length;
    for(let i=0;i<5;i++){
        let index= Math.floor(Math.random()*length);
        arr.push(cricketQuiz[index]);

        [cricketQuiz[index],cricketQuiz[length-1]]=[cricketQuiz[length-1],cricketQuiz[index]];
        length--;

    }
    return arr;

}
const form= document.querySelector("form");
let original_answer={};

let problem=RandomQuestion()
problem.forEach((obj,index)=>{
    const question= document.createElement("div");
    question.className="question";

    const q=document.createElement("p");
    q.innerHTML=`${index+1}. ${obj['question']}`;

    question.appendChild(q);

    obj["options"].forEach((option,idx)=>{
        const label=document.createElement("label");

        const input=document.createElement("input");
        input.type="radio";
        input.name=`q${index+1}`;
        input.value=option;
        label.appendChild(input);
        const text= document.createTextNode(option);
        label.append(text);
        const br=document.createElement("br");
        label.appendChild(br);
        question.appendChild(label);
    })

    form.appendChild(question);

   original_answer[`q${index+1}`]=obj["correctAnswer"];

})

let ans=0;

form.addEventListener(("submit"),(event)=>{
    event.preventDefault();

    const data = new FormData(form);
    for(let [key,value] of data.entries()){
        if(original_answer[key]===value)
            ans++;
    }

    const out = document.getElementById("out");
    out.innerHTML=`total correct answer out of 5 is ${ans}`;

    
})


const button = document.createElement("button");
button.type = "submit"; 
button.className = "submit-btn";
button.textContent = "Submit Quiz";
form.appendChild(button); 


