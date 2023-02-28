const promise = new Promise( (resolve, reject)=> resolve ('Start Counting'))

const counter = (value) => console.log(value);

promise.then((value) => {
    counter(value);
    return "one";
})
.then((value) => {
    counter(value);
    return "two";
})