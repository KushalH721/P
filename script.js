document.querySelectorAll('.navlink').forEach(link=>{
  link.addEventListener('click', ()=>{
    document.querySelectorAll('.navlink').forEach(l=>l.classList.remove('active'));
    link.classList.add('active');

    const target = link.dataset.target;
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('visible'));
    document.getElementById(target).classList.add('visible');

    document.getElementById('sidebar').classList.remove('open');
  });
});

document.getElementById('menuToggle').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.toggle('open');
});

/* Task Modal */
const taskModal = document.getElementById('taskModal');
document.querySelectorAll('.task-item').forEach(t=>{
  t.addEventListener('click', ()=>{
    document.getElementById('taskTitle').innerText = t.dataset.title;
    document.getElementById('taskDesc').innerText = t.dataset.desc;
    document.getElementById('taskStatus').innerText = t.dataset.status;
    taskModal.classList.add('active');
  });
});
document.getElementById('closeTaskModal').addEventListener('click', ()=>{
  taskModal.classList.remove('active');
});

/* Work Log Modal */
const workModal = document.getElementById('workModal');
document.getElementById('btnOpenWorkModal').addEventListener('click', ()=>workModal.classList.add('active'));
document.getElementById('closeWorkModal').addEventListener('click', ()=>workModal.classList.remove('active'));

document.getElementById('saveWork').addEventListener('click', ()=>{
  alert("Work saved (demo).");
  workModal.classList.remove('active');
});