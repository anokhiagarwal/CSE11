function calculateResult() {
    const n=document.getElementById("subjects").value;
    let total=0;
    let i;
    for (i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject number"+(i+1)));
        total += x;
    }
    const average=total/n;
   let grade;
   if(average>90)
   {
       grade="A+";
   }
   else if(average>80)
   {
       grade="A";
   }
   else if(average>70)
   {
       grade="B";
   }
   else if(average>60)
   {
       grade="C";
   }
   else{
    grade="F";
   }

   let r;
   if (average>60)
  r="Pass";
   else
  r="Fail";

   let result=document.getElementById("result").innerHTML="Total Marks: "+total+"<br>"+"Average: "+average+"<br>"+"Grade: "+grade+"<br>"+"Result: "+r;
}