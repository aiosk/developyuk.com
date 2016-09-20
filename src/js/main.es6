$(()=> {
    $('.main__center').on('click', (e)=> { 
        const $this = $(e.target);
        const $main = $this.closest('.main');

        $main.toggleClass('main--loaded');
    });
});
