const tiskButton = document.getElementById('tisk');
const dropdownLinks = document.getElementById('dropdownLinks');

tiskButton.addEventListener('mouseenter', () => {
    dropdownLinks.classList.add('active');
});

tiskButton.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropdownLinks.matches(':hover')) {
            dropdownLinks.classList.remove('active');
        }
    }, 200);
});

dropdownLinks.addEventListener('mouseleave', () => {
    dropdownLinks.classList.remove('active');
});

dropdownLinks.addEventListener('mouseenter', () => {
    dropdownLinks.classList.add('active');
});


document.addEventListener("DOMContentLoaded", function () {
    const typTisku = document.getElementById('typ-tisku');
    const materialyFilament = document.getElementById('materialy-filament');
    const materialyResin = document.getElementById('materialy-resin');

    function updateMaterialSelect() {
      if (typTisku.value === 'filament') {
        materialyFilament.classList.remove('hidden');
        materialyResin.classList.add('hidden');
      } else {
        materialyFilament.classList.add('hidden');
        materialyResin.classList.remove('hidden');
      }
    }

    typTisku.addEventListener('change', updateMaterialSelect);
    updateMaterialSelect(); // Spustí kontrolu při načtení stránky
  });