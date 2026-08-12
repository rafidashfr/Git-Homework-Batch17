"Ini tugas Sesi 4 - Function Kalkulator"

export function kalkulator(angka1, angka2, operator) {
    switch (operator) {

        case "+":
            return angka1 + angka2;

        case "-":
            return angka1 - angka2;

        case "*":
            return angka1 * angka2;

        case "/":
            return angka1 / angka2;

        case "%":
            return angka1 % angka2;
        
         case "++":
            return angka1 + 1;

        case "--":
            return angka1 - 1;

        default:
            return "Operator not valid!";
    }
}