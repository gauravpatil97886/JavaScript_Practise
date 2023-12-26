const buttons = document.querySelectorAll('.button');
const ReportBody = document.querySelector('body');
const footer=document.querySelector('.footer')
const h1=document.querySelector('h1')

buttons.forEach(function(button) {
    button.addEventListener('click', function(color) {
        switch (color.target.id) {
            case 'grey':
                ReportBody.style.backgroundColor = 'grey';
                footer.style.backgroundColor=color.target.id;
                break;
            case 'white':
                ReportBody.style.backgroundColor = 'white';
                footer.style.backgroundColor=color.target.id;
            case 'black':
                    ReportBody.style.backgroundColor = 'black';
                    footer.style.backgroundColor = color.target.id;
                    h1.classList.add('white-font');
                    break;
            case 'red':
                ReportBody.style.backgroundColor = 'red';
                footer.style.backgroundColor=color.target.id;

                break;
            case 'yellow':
                ReportBody.style.backgroundColor = 'yellow';
                footer.style.backgroundColor=color.target.id;

                break;
            case 'blue':
                ReportBody.style.backgroundColor = 'blue';
                footer.style.backgroundColor=color.target.id;

                break;
            case 'green':
                ReportBody.style.backgroundColor = 'green';
                footer.style.backgroundColor=color.target.id;

                break;
            case 'purple':
                ReportBody.style.backgroundColor = 'purple';
                footer.style.backgroundColor=color.target.id;

                break;
            case 'orange':
                ReportBody.style.backgroundColor = 'orange';
                footer.style.backgroundColor=color.target.id;

                break;
            default:
                break;
        }
    });
});
