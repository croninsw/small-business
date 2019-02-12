const createEmployee = (employeeObject) => {
    return `
        <article class="employee">
            <header class="employee__name">
                <h1>${employeeObject.first_name} ${employeeObject.last_name}</h1>
            </header>
            <section class="employee__department">
                Works in the ${employeeObject.department.dept_name} department
            </section>
            <section class="employee__computer">
                Currently using a ${employeeObject.computer.make} ${employeeObject.computer.model}
            </section>
        </article>
    `
}

export default createEmployee