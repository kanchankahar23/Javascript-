const emp = {
    e_name:"soni",
    e_id:223,
    e_salary:30000,
    e_city:"delhi"
}
 Object.freeze(emp);
console.log(emp.e_name);
emp.e_name = "priya";
console.log(emp.e_name);


//ye isliye hua kyuki hmne object ko freeze kr diya tha 
//agr ham freeze ni krte to vo change ho jata 
