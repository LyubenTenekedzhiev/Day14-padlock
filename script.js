const img = document.getElementById('image')
const text = document.getElementById('text')

img.addEventListener('mouseenter', function() {
  text.style.display = 'none';
})

img.addEventListener('mouseleave', () => {
  text.style.display = 'block';
})