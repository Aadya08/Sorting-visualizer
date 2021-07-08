async function insertion(){
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'green';
    for (let i = 1; i < ele.length; i++)
    {
        let key = ele[i].style.height;
        let j = i - 1;
        ele[i].style.background = 'yellow';

        await delayFunc(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key)))
        {
            ele[j].style.background = 'yellow';
            ele[j + 1].style.height = ele[j].style.height;
            j--;
            await delayFunc(delay);
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'green';
    }
}


//runner
const insertSortbtn = document.querySelector(".insertionSort");
insertSortbtn.addEventListener('click', async function(){
    disableSorting();
    arraysizeToggle(0);
    await insertion();
    arraysizeToggle(1);
    enableSorting();
})