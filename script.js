// turn pages when click next or prev button

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el,index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            },500);
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            },500);
        }
    }
})

//contact me button when click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact');

contactMeBtn.onclick = () => {
    pages.forEach((page,index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        },(index + 1) * 200 + 100)
    })
}

//create reverse index button
let totalPages = pages.length;
let pageNo = 0;

function reverseIndex() {
    pageNo--;
    if (pageNo < 0){
        pageNo = totalPages - 1;
    }
}

//back profile button when click

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => { 
        setTimeout(() => {
            reverseIndex();
            pages[pageNo].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNo].style.zIndex = 10 + index;
            });
        }, (index + 1) * 200 + 100);
    });
};