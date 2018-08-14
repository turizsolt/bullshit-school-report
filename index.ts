const getRandomElement = (array: any[]) => {
    return array[Math.random()*array.length|0];
}

const getRandomElements = (array: any[], count:number) => {
    const helperArray = [...array];
    helperArray.sort((a,b) => (Math.random()*2-1));
    return helperArray.slice(0, count);
}

const compliments = [
    "megtáltosodott.",
    "sokat fejlődött.",
    "tejlesítménye kiemelkedően változott.",
    "rengetegett változott előnyére.",
    "korának megfelelően egyre érettebb."
];

const moreCompliments = [
    "Idén jóval összeszedettebb, mint tavaly volt.",
    "Segítőkész és figyelmes.",
    "A mozgásra is jóval több figyelmet szán, mint a beszédre.",
    "A tantárgyat kiemelkedően teljesített az év során.",
    "Társaira tekintettel van.",
    "Korának megfelelően viselkedik.",
    "Érdeklődő és kérdésekkel teli.",
    "Probléma nincs vele.",
    "Az órákon figyelmes, aktív.",
    "Házifeladatát mindig elvégzi.",
    "A szünetekben az osztálytermet rendben tartja.",
    "Tanulékony, de nem okoskodó.",
    "Egyre önállóbb, és képes társainak is segíteni.",
    "Kötelességein felül további feladatokat is vállal.",
    "Tanulmánya kiemelkedő a tárgy követelményeit alapulvéve."
];

class Generator {
    public static getBullshit(studentName:string) {
        return Generator.getFirstCompliment(studentName)
            + Generator.getMoreCompliments();
    }

    private static getFirstCompliment(studentName:string) {
        const compliment = getRandomElement(compliments);
        return `${studentName} ${compliment}`;
    }

    private static getMoreCompliments() {
        const compliments = getRandomElements(moreCompliments, 3);
        return ` ${compliments[0]} ${compliments[1]} ${compliments[2]}`;
    }
}

console.log(Generator.getBullshit("Marci"));
console.log(Generator.getBullshit("Bélus"));
console.log(Generator.getBullshit("Kati"));
