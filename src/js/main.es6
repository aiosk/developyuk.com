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
