async function f(p) {
    console.info("start", p)
    await sleep(p);
    console.info("done", p)
    return p;
}

Promise.all([
    f(2000),
    f(3000)
])
    .then(function () {
        console.log("All Done!")
    })


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}