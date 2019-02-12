const dataManager = {
    getEmployee: function () {
        return fetch("http://localhost:8088/employees?_expand=computer&_expand=department")
        .then(response => response.json())
    }
}

export default dataManager