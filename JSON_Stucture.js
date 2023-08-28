const student = {
    name: "Morshed",
    roll: 45612,
    class: 7,
    shift: 1+"st",
    marks: {
        math: 50,
        english: 80,
        physics: 33,
    },
    friends: ["Abul", "Kabul", "Jabul"],
    friendsAge: [ 12, 11, 15],
}
console.log(student);

const JsonStr = JSON.stringify(student);
console.log(JsonStr);

const convert = JSON.parse(JsonStr);
console.log(convert);