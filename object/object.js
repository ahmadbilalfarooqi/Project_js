const student = {
    firstName: "Ahmad",
    last_name: "Bilal",
    partial_Status: 'Unmarried',
    roll_number: 'PIAIC123456',
    cnic_Number: '3523333333333',
    course: ['web3','mataverse','cloud'],
    address: {
        city: "Multan",
        Province: "Punjab",
        Country: "Pakistan",
    }
}
console.log(student.address.Country);

console.log(student.partial_Status, student.last_name , student.cnic_Number);

student.last_name = "Farooqi",
console.log(student.last_name);