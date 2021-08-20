const totalCost = document.getElementById('total-cost');
const macCost = document.getElementById('mac-cost');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const promoField = document.getElementById('promo-field');
const promoBtn = document.getElementById('promo-btn');
const totalCostAmount = document.getElementById('total-cost-amount');
//total cost
function totalAmount() {
    totalCost.innerText = parseFloat(macCost.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    //total paid amount without promocode
    totalCostAmount.innerText = parseFloat(totalCost.innerText);
}
//promocode apply
promoBtn.addEventListener('click', function () {
    if (promoField.value == 'stevekaku') {
        totalCostAmount.innerText = parseFloat(totalCost.innerText) * 0.8;
        promoField.value = '';
    }
    else {
        promoField.value = '';
    }
});
//adding extra items/service cost
//default cost
function defaultServiceCost(defaultCostBtn) {
    document.getElementById(defaultCostBtn).addEventListener('click', function () {
        const costName = defaultCostBtn.split('-')[1];
        const costString = costName + '-cost';
        document.getElementById(costString).innerText = 0;
        totalAmount();
    });
}
defaultServiceCost('btn-memory-8gb');
defaultServiceCost('btn-storage-256gb');
defaultServiceCost('btn-delivery-without-cost');
document.getElementById('btn-memory-16gb').addEventListener('click', function () {
    memoryCost.innerText = 180;
    totalAmount();
});
document.getElementById('btn-storage-512gb').addEventListener('click', function () {
    storageCost.innerText = 100;
    totalAmount();
});
document.getElementById('btn-storage-1tb').addEventListener('click', function () {
    storageCost.innerText = 180;
    totalAmount();
});
document.getElementById('btn-delivery-with-cost').addEventListener('click', function () {
    deliveryCost.innerText = 20;
    totalAmount();
});


