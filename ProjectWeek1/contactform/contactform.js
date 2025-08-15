const form = document.querySelector('#form');

form.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();

    window.alert('MESSAGE SENT! Thanks for completing the form. We will be in touch soon!');
}