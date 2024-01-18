function quadForm(A, B, C) {
    let y = B*B - 4*A*C
    if (y < 0) {
        console.log(`complex root(s)`)
        return
    }
    let x1 = (-B + y**(0.5))/(2*A)
    let x2 = (-B - y**(0.5))/(2*A)
    if (x1 === x2) {
        console.log(`x = ${x1} with multiplicity 2.`)
    } else {
        console.log(`x = ${x1} and ${x2}`)
    }
    

}

quadForm(1,2,-10)
quadForm(1,2,3)
quadForm(1,0,-4)