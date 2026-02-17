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

