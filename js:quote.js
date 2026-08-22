window.addEventListener('DOMContentLoaded', () => {
  const todayInput = document.getElementById('today-date');
  if (todayInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    todayInput.value = `${yyyy}-${mm}-${dd}`;
  }
});

const calcInputs = document.querySelectorAll('.calc-item');
const houseTotalInput = document.getElementById('house-total');
const grandTotalInput = document.getElementById('grand-total');

function calculateTotal() {
  let sum = 0;
  calcInputs.forEach(input => {
    const val = parseFloat(input.value);
    if (!isNaN(val)) sum += val;
  });
  houseTotalInput.value = sum > 0 ? sum : '';
  if (!grandTotalInput.value || grandTotalInput.dataset.manual !== "true") {
    grandTotalInput.value = sum > 0 ? sum : '';
  }
}

calcInputs.forEach(input => {
  input.addEventListener('input', calculateTotal);
});

grandTotalInput.addEventListener('input', () => {
  grandTotalInput.dataset.manual = "true";
});