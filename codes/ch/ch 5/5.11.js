function getTime(){
    return new Date().getTime();
}
const a = (t)=> {
    return new Promise((resolve, reject) => {
        setInterval(function(){
            resolve(`${t}초 end`)
        }, t*1000 );
    })
}

async function p() {
    let t1 = getTime();
    let d1 = await Promise.all([a(1), a(2)])
    let t2 = getTime()
    console.log( (t2 - t1) / 1000)
    let d3 = await a(3)
    let t3 = getTime()
    console.log( (t3 - t2) / 1000)

    console.log(d1, d3)
}

p()
