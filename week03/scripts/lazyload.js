const Options = { 
    month: 'long', day: 'numeric', year: 'numeric'};

document.querySelector('#date').textContent = new Date().toLocaleDateString('en-Us', Options);

document.querySelector('#lastModified').textContent = new Date().toDateString('en-Us', Options)
