const Skill = require('../models/skill');
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};
function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}
function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}
function newSkill(req, res) {
    res.render('skills/new');
}
function index(req, res) {
    let skills = Skill.getAll();
    let noviceSkills = skills.filter(skill => skill.level === "Novice");
    let competentSkills = skills.filter(skill => skill.level === "Competent");
    let proficientSkills = skills.filter(skill => skill.level === "Proficient");
    res.render('skills/index', {
       noviceSkills, competentSkills, proficientSkills, skills
    });
}
function show(req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}