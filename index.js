// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAdress:"11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee,key,value){
   const updateEmployeeWithKeyAndValue= {...employee}
   updateEmployeeWithKeyAndValue[key]=value;
   return updateEmployeeWithKeyAndValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const deleteFromEmployeeByKey = {...employee}
    delete deleteFromEmployeeByKey[key]
    return deleteFromEmployeeByKey
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}