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


// Vertical highlight for zines, work, contact in index.html
document.querySelectorAll('.zine-link').forEach(a => {
    a.addEventListener('mouseenter', () => {
        document.querySelectorAll('.zine-link').forEach(b => {
            b.style.backgroundColor = '#056f04';
            b.style.color = '#FAF7F0';
        })
    });
    
    a.addEventListener('mouseleave', () => {
        document.querySelectorAll('.zine-link').forEach(b => {
            b.style.backgroundColor = '';
            b.style.color = '';
        })
    });
});

document.querySelectorAll('.work-link').forEach(a => {
    a.addEventListener('mouseenter', () => {
        document.querySelectorAll('.work-link').forEach(b => {
            b.style.backgroundColor = '#056f04';
            b.style.color = '#FAF7F0';
        })
    });
    
    a.addEventListener('mouseleave', () => {
        document.querySelectorAll('.work-link').forEach(b => {
            b.style.backgroundColor = '';
            b.style.color = '';
        })
    });
});

document.querySelectorAll('.contact-link').forEach(a => {
    a.addEventListener('mouseenter', () => {
        document.querySelectorAll('.contact-link').forEach(b => {
            b.style.backgroundColor = '#056f04';
            b.style.color = '#FAF7F0';
        })
    });
    
    a.addEventListener('mouseleave', () => {
        document.querySelectorAll('.contact-link').forEach(b => {
            b.style.backgroundColor = '';
            b.style.color = '';
        })
    });
});


// Kai face change
document.getElementById('kai-1').addEventListener('mouseenter', () => {
    document.getElementById('kai-1').style.display = 'none';
    document.getElementById('kai-2').style.display = 'inline';
});

document.getElementById('kai-2').addEventListener('mouseleave', () => {
    document.getElementById('kai-1').style.display = 'inline';
    document.getElementById('kai-2').style.display = 'none';
});
