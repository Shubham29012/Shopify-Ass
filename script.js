// Size Chart Modal functionality
const sizeChartBtn = document.getElementById('sizeChartBtn');
const sizeChartModal = document.getElementById('sizeChartModal');
const closeModal = document.getElementById('closeModal');

sizeChartBtn.addEventListener('click', () => {
    sizeChartModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    sizeChartModal.classList.remove('active');
});

// Close modal when clicking outside the modal content
sizeChartModal.addEventListener('click', (e) => {
    if (e.target === sizeChartModal) {
        sizeChartModal.classList.remove('active');
    }
});

// Quantity selector functionality
const decreaseBtn = document.getElementById('decreaseQuantity');
const increaseBtn = document.getElementById('increaseQuantity');
const quantityInput = document.getElementById('quantityInput');

decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

// Color and size selection functionality
const colorOptions = document.querySelectorAll('.color-option');
const sizeOptions = document.querySelectorAll('.size-option');

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove selected class from all color options
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        // Add selected class to the clicked option
        option.classList.add('selected');
    });
});

sizeOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Remove selected class from all size options
        sizeOptions.forEach(opt => opt.classList.remove('selected'));
        // Add selected class to the clicked option
        option.classList.add('selected');
    });
});

// Thumbnail image switching
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        // Add active class to the clicked thumbnail
        thumb.classList.add('active');
        // Change main image src to the clicked thumbnail src
        mainImage.src = thumb.src.replace('70/70', '400/550');
    });
});