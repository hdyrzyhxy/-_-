document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        alert('سيتم إضافة محتوى المقال بالكامل هنا.');
    });
});
