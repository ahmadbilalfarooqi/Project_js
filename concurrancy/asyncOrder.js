function breakFastorder(item){
    return new Promise(resolve=> {
        setTimeout(()=>{
            resolve (`${item} is ready.`)
        }, 3000)
    })
}

async function Order(item){
    const order = await breakFastorder(item);
    console.log(order);
}

Order("omelette");
Order("paratha");
Order("coffee");