import dataManager from "./dataManager"
import createEmployee from "./createEmployee"
import appendToDom from "./appendToDOM"

dataManager.getEmployee().then(
    (employees) => {
        employees.forEach(employee => {
            const employeeHTML = createEmployee(employee)
            appendToDom(employeeHTML, ".employeeList")
        })
    }
)