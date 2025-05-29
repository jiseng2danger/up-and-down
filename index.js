const items = [...document.querySelectorAll('.number')];
const itemss = [...document.querySelectorAll('.number2')];
const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);

    let initialvalue = 0;

    const incraseCount = setInterval(() => {
        initialvalue += increment;
        
        if (initialvalue > value){
            el.textContent = `${value}+`
            clearInterval(incraseCount);
            return;
        }
        el.textContent = `${initialvalue}+`;
    },1);
};
items.forEach((item) => {
    updateCount(item);
})
const downdateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value / 1000);

    let initialvalue = value;
            
    const incraseCount = setInterval(() => {
        initialvalue -= increment;

        if (initialvalue <= 0){
            el.textContent = '0'
            clearInterval(incraseCount);
            return;
        }
        el.textContent = `${initialvalue}`;
    },1);
};
itemss.forEach((item) => {
    downdateCount(item);
})