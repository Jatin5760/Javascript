// Objects ke liye forin loop. Arrays ke liye forof loop
const myObject = {
    js: `Javascript`,
    cpp: `C++`,
    rb: `ruby`,
    swift: `Swift by Apple`
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programs = ["js", "rb", "py", "java", "cpp"]

for (const key in programs) {
    console.log(key, programs[key]);
    //console.log(programs[key])
}