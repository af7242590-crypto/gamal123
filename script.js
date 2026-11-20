// دالة فلترة وتصفية السيارات حسب القسم
function filterCars(category) {
    const cards = document.querySelectorAll('.car-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // تغيير الزر المفعّل
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // إظهار وإخفاء الكروت
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}