// const addListener = (param) => {
//     const {elem, type, fn} = param;
//
//     if (elem.addEventListener) {
//         elem.addEventListener(type, fn, false);
//
//     } else if (elem.attachEvent) {
//         elem.attachEvent("on" + type, function () {
//             return fn.call(elem, window.event);
//         });
//     } else {
//         elem["on" + type] = fn;
//     }
// };
//
// addListener({
//     elem: document.querySelector('.main'),
//     type: 'click',
//     fn(e){
//         this.classList.toggle('main--loaded');
//     }
// });
$(()=> {
    const delay = 250;
    $('.icon').each((i, el)=> {
        const f = ()=> {
            $(el).addClass('mui-enter-active');
        };
        setTimeout(f, (i + 1) * delay)
    });
    $('form').on('change', 'input[type=radio]', (e)=> {
        const $radio = $(e.currentTarget);
        const $form = e.delegateTarget;
        const radioIcon = $radio.data('icon');


        $('.choosen-radio')
            .addClass('mui-enter-active')

            .find('.icon').addClass(`mui-enter-active e-${radioIcon}`)
            .end()

            .on('click', (e)=> {
                $(e.currentTarget).removeClass('mui-enter-active')
                    .find('.icon').removeClass().addClass('icon mui-enter');

                $('input[type=radio]')
                    .next('i.icon').removeClass('is-active')
                    .end()
                    .filter(`[data-icon=${radioIcon}]`).next('i.icon').addClass('is-active');
            });
    })
});