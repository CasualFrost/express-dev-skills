const Skill = require('../models/skill');
module.exports = {
    index,
    show
  };
function index(req, res) {
    let skills = Skill.getAll();
    let noviceSkills = skills.filter(skill => skill.level === "Novice");
    let competentSkills = skills.filter(skill => skill.level === "Competent");
    let proficientSkills = skills.filter(skill => skill.level === "Proficient");
    res.render('skills/index', {
       noviceSkills, competentSkills, proficientSkills
    });
}
function show(req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}