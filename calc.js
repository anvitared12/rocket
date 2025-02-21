function getDob() {
    const getdob = document.getElementById('birth').value;
    const curr = document.getElementById('present').value;

    // Check if both dates are provided
    if (!getdob || !curr) {
        alert("Please enter both your birth date and the present date.");
        return;
    }

    const dob = new Date(getdob);
    const currdate = new Date(curr);

    // Calculate initial age
    let age = currdate.getFullYear() - dob.getFullYear();
    const monthDifference = currdate.getMonth() - dob.getMonth();

    // Adjust age if the current date is before the birthday in the current year
    if (monthDifference < 0 || (monthDifference === 0 && currdate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('currentAge').textContent = `Your age is ${age} years.`;
}
