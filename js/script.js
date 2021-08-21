//initialize important veribles
const totalCost = document.getElementById('total-cost');
const macCost = document.getElementById('mac-cost');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const promoField = document.getElementById('promo-field');
const promoBtn = document.getElementById('promo-btn');
const finalAmount = document.getElementById('final-total-amount');
//final amount function without promocode
function finalTotalAmount() {
    //total cost
    totalCost.innerText = parseFloat(macCost.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    //final amount
    finalAmount.innerText = parseFloat(totalCost.innerText);
}
//final amount with promocode
promoBtn.addEventListener('click', function () {
    if (promoField.value == 'stevekaku') {
        finalAmount.innerText = parseFloat(totalCost.innerText) * 0.8;
        promoField.value = '';
    }
    else {
        promoField.value = '';
    }
});
//---------------adding extra items/service cost------------//
//default service cost function
function defaultServiceCost(defaultCostBtn) {
    document.getElementById(defaultCostBtn).addEventListener('click', function () {
        const costName = defaultCostBtn.split('-')[1];
        const costString = costName + '-cost';
        document.getElementById(costString).innerText = 0;
        finalTotalAmount();
    });
}
// calling defaultServiceCost function
defaultServiceCost('btn-memory-8gb');
defaultServiceCost('btn-storage-256gb');
defaultServiceCost('btn-delivery-without-cost');
//upgrade service cost function
function extraServiceCost(serviceName) {
    if (serviceName == 'btn-memory-16gb') {
        memoryCost.innerText = 180;
    }
    if (serviceName == 'btn-storage-512gb') {
        storageCost.innerText = 100;
    }
    if (serviceName == 'btn-storage-1tb') {
        storageCost.innerText = 180;
    }
    if (serviceName == 'btn-delivery-with-cost') {
        deliveryCost.innerText = 20;
    }
    finalTotalAmount();
}
//upgrade service cost
document.getElementById('feature-btn-container').addEventListener('click', function (event) {
    extraServiceCost(event.target.id);
});