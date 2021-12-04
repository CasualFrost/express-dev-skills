const skills = [{
    id: 1,
    skill: 'HTML',
    level: "Competent"
},{
    id: 2,
    skill: 'CSS',
    level: "Competent"
},{
    id: 3,
    skill: 'JavaScript',
    level: "Novice"
}
];
module.exports = {
getAll,
getOne
};
function getAll() {
return skills;
}
function getOne(id) {
id = parseInt(id);
return skills.find(skill => skill.id === id);
}