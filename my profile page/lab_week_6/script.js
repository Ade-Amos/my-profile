document.addEventListener('DOMContentLoaded', function() {
    function displayInventory() {
        const inventoryList = document.getElementById('inventory-list');
        const inventoryItems = [
            { make: 'Toyota', model: 'Corolla', year: '2020', price: 'UGX 20,000,000', img: 'images/toyota co.jpg' },
            { make: 'Mercedes', model: 'Benz C300', year: '2019', price: 'UGX 75,000,000', img: 'images/benz c300.jpeg' },
            { make: 'Honda', model: 'Civic', year: '2018', price: 'ugx 30,000,000', img: 'images/honda.jpg' },
            { make: 'Ford', model: 'Mustang', year: '2021', price: 'ugx 100,000,000', img: 'images/mustang.jpeg' },
            { make: 'Subaru', model: 'Impreza', year: '2020', price: 'ugx 40,000,000', img: 'images/subaru.jpg' },
            { make: 'Volkswagen', model: 'Golf GTI', year: '2019', price: 'ugx 50,000,000', img: 'images/VW-Golf.jpg' },
            { make: 'Nissan', model: 'Patrol', year: '2021', price: 'ugx 120,000,000', img: 'images/patrol.jpeg' },
            { make: 'Tesla', model: 'Model 3', year: '2022', price: 'ugx 150,000,000', img: 'images/tesla.avif' }
        ];

        inventoryItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.make} ${item.model}" width="150">
                <h3>${item.make} ${item.model}</h3>
                <p>Year: ${item.year}</p>
                <p>Price: ${item.price}</p>
            `;
            inventoryList.appendChild(itemElement);
        });
    }

    document.querySelectorAll('.shop-item').forEach(item => {
        const addBtn = item.querySelector('.add-to-cart');
        let quantity = parseInt(item.querySelector('.quantity').innerText, 10);

        item.querySelector('.increment').addEventListener('click', () => {
            quantity += 1;
            item.querySelector('.quantity').innerText = quantity;
        });

        item.querySelector('.decrement').addEventListener('click', () => {
            if (quantity > 1) {
                quantity -= 1;
                item.querySelector('.quantity').innerText = quantity;
            }
        });

        addBtn.addEventListener('click', () => {
            const productName = item.querySelector('h3').innerText;
            alert(`Added ${quantity} ${productName} to cart.`);
        });
    });

    const appointmentForm = document.getElementById('appointment-form');
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Appointment booked successfully.');
        appointmentForm.reset();
    });

    const addReviewBtn = document.getElementById('add-review-btn');
    addReviewBtn.addEventListener('click', () => {
        const reviewText = prompt("Please enter your review:");
        if (reviewText) {
            const reviewsList = document.getElementById('reviews-list');
            const newReview = document.createElement('div');
            newReview.classList.add('review');
            newReview.innerText = `"${reviewText}" - Anonymous`;
            reviewsList.appendChild(newReview);
        }
    });

    displayInventory(); 
});

