function doflexbleStuff (executeStuff){
    executeStuff();
    console.log("doflexbleStuff");
}

const function1 = () => console.log("Hello from Function 1");
doflexbleStuff(function1);
