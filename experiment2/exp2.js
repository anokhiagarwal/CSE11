let employees = [];

function addEmployee(){

    let name = document.getElementById("name").value;

    let id = document.getElementById("id").value;

    let salary = parseFloat(document.getElementById("salary").value);

    let department = document.getElementById("department").value;


    let emp = {

        name:name,

        id:id,

        salary:salary,

        department:department

    };


    employees.push(emp);

    alert("Employee Added Successfully");

    document.getElementById("name").value="";

    document.getElementById("id").value="";

    document.getElementById("salary").value="";

    document.getElementById("department").value="";

}


function displayEmployees(){

    let text="<h2>All Employees</h2>";

    for(let emp of employees){

        text +=

        "Name : "+emp.name+"<br>"+

        "ID : "+emp.id+"<br>"+

        "Salary : ₹"+emp.salary+"<br>"+

        "Department : "+emp.department+"<br><hr>";

    }

    document.getElementById("output").innerHTML=text;

}



function filterEmployees(){

    let filtered=employees.filter(emp=>emp.salary>50000);

    let text="<h2>Salary > ₹50000</h2>";

    for(let emp of filtered){

        text +=

        "Name : "+emp.name+

        " | Salary : ₹"+emp.salary+"<br>";

    }

    document.getElementById("output").innerHTML=text;

}



function totalSalary(){

    let total=0;

    for(let emp of employees){

        total += emp.salary;

    }

    document.getElementById("output").innerHTML=

    "<h2>Total Salary Payout = ₹"+total+"</h2>";

}



function averageSalary(){

    let total=0;

    for(let emp of employees){

        total+=emp.salary;

    }

    let avg=total/employees.length;

    document.getElementById("output").innerHTML=

    "<h2>Average Salary = ₹"+avg.toFixed(2)+"</h2>";

}



function countDepartment(){

    let dept=prompt("Enter Department");

    let count=0;


    for(let emp of employees){

        if(emp.department.toLowerCase()==dept.toLowerCase()){

            count++;

        }

    }


    document.getElementById("output").innerHTML=

    "<h2>Employees in "+dept+" Department : "+count+"</h2>";

}