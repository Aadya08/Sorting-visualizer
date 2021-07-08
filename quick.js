async function partitionfn(ele, l, r){

    let i = l - 1;
    // color pivot element
    ele[r].style.background = '#ccccff';
    for(let j = l; j <= r - 1; j++){
        
        // color current element
        ele[j].style.background = '#1a1aff';
        // pauseChamp
        await delayFunc(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = '#000099';
            if(i != j) ele[j].style.background = '#000099';
            // pauseChamp
            await delayFunc(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = '#9999ff';
        }
    }
    i++; 
    // pauseChamp
    await delayFunc(delay);
    swap(ele[i], ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = '#9999ff';
    ele[i].style.background = 'green';

    // pauseChamp
    await delayFunc(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionfn(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

//runner
const quickSortBtn = document.querySelector(".quickSort");
quickSortBtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSorting();
    arraysizeToggle(0);
    await quickSort(ele,l,r);
    arraysizeToggle(1);
    enableSorting();
})