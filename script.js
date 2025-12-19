// zine.html "#images"

// Source - https://stackoverflow.com/a
// Posted by Anatoliy, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-18, License - CC BY-SA 3.0

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

document.querySelectorAll('#images').forEach(img => {
    img.addEventListener('mouseenter', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    img.addEventListener('mouseleave', () => {
    // document.body.style.backgroundColor = "";
    });
});
