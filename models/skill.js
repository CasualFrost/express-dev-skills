const skills = [{
    id: 1,
    skill: 'HTML',
    level: "Competent",
    mastered: "No"
},{
    id: 2,
    skill: 'CSS',
    level: "Competent",
    mastered: "No"
},{
    id: 3,
    skill: 'JavaScript',
    level: "Novice",
    mastered: "No"
},{
    id: 4,
    skill: 'Gaming',
    level: "Proficient",
    mastered: "Yes"
}
];
module.exports = {
getAll,
getOne,
create,
deleteOne
};
function getAll() {
return skills;
}
function getOne(id) {
id = parseInt(id);
return skills.find(skill => skill.id === id);
}
function create(skillObj) {
    skillObj.id = Math.floor(Math.random() * 1000000);
    if (skillObj.level === "Proficient") {
        skillObj.mastered = "Yes";
    } else {
        skillObj.mastered = "No";
    }
    skills.push(skillObj);
}
function deleteOne(id) {
    const skillIdx = skills.findIndex(skill => skill.id == id);
    skills.splice(skillIdx, 1);
}