document.addEventListener('DOMContentLoaded', function() {
    const idInp = document.querySelector('.inp1');
    const passwordInp = document.querySelector('.inp2');
    const btn = document.querySelector('.btn2');

    function valid() {
      if (idInp.value.trim() !== "" && passwordInp.value.trim() !== "") {
        btn.disablead = false;
        btn.classList.add('orange-bg')
      } else {
        btn.disablead = true;
        btn.classList.remove('orange-bg')
      }
    }

    idInp.addEventListener('input', valid)
    passwordInp.addEventListener('input', valid)
    
    btn.addEventListener('click', function() {
        if (idInp.value == '1109343' && passwordInp.value == '40391') {
            window.location.href = 'student.html'
        } else {
            alert('ВЫ ВВЕЛИ НЕ ПРАВИЛЬНЫЕ ДАННЫЕ!!!!!!!!!')
        }
    })
})