const employees = [
  { name: "Justin", hourlyRate: 21, hoursWorked: 45 },
  { name: "Joseph", hourlyRate: 19, hoursWorked: 41 },
  { name: "Napolean", hourlyRate: 23, hoursWorked: 39 },
  { name: "Noah", hourlyRate: 20, hoursWorked: 38 },
];

function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return rate * baseHours;
}

function calculateOvertimePay(rate, hours) {
  if (hours <= 40) {
    return 0;
  }

  const overtimeHours = hours - 40;

  return overtimeHours * rate * 1.5;

}

function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const netPay = grossPay - calculateTaxes(grossPay);

  return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
  };
}