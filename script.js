document.getElementById('increaseXP').addEventListener('click', function(){
  // Simple interactive demo: increase progress and energy visually
  const prog = document.querySelector('.progressbar div');
  const energy = document.getElementById('energyValue');
  let currentWidth = parseInt(prog.style.width || '17%'.replace('%','')) || 17;
  if(currentWidth < 100) currentWidth += 5;
  prog.style.width = currentWidth + '%';
  // update energy
  let energyVal = parseInt(energy.textContent.replace('%','')) || 17;
  if(energyVal < 100) energyVal = Math.min(100, energyVal + 3);
  energy.textContent = energyVal + '%';
});