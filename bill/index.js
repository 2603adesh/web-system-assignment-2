function bill() {
    const total = parseFloat(document.getElementById("total").value);
    const tip = parseFloat(document.getElementById("tip").value);

    if (isNaN(total)||isNaN(tip)) {
        document.getElementById("result").textContent = "Please enter valid numbers";
        return;
    }
const tipAmount=total*(tip/100);
const totalAmount=total+tipAmount;

    document.getElementById("result").textContent = `Total Amount (including ${tip}% tip): $${totalAmount}`;
}