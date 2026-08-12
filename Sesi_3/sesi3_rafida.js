"Ini homework Sesi 3"

let totalRows = 4;
for (let currentRow = 1; currentRow <= totalRows; currentRow++) {
    let output = "";

    for (let star = 1; star <= currentRow; star++) {
        output += "*";
    }
    console.log(output);
}