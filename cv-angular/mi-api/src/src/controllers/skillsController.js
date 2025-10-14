// src/controllers/skillsController.js
const skills = require('../models/skillModel');

const getSkills = (req, res) => {
  res.status(200).json(skills);
};

const getSkillById = (req, res) => {
  const skill = skills.find(s => s.id === parseInt(req.params.id));
  if (!skill) {
    return res.status(404).json({ error: 'Skill not found' });
  }
  res.status(200).json(skill);
};

const createSkill = (req, res) => {
  const { name, level, category } = req.body;
  if (!name || !level || !category) {
    return res.status(422).json({ error: 'All fields are required' });
  }

  const newSkill = {
    id: skills.length + 1,
    name,
    level,
    category
  };

  skills.push(newSkill);
  res.status(201).json(newSkill);
};

const updateSkill = (req, res) => {
  const skill = skills.find(s => s.id === parseInt(req.params.id));
  if (!skill) {
    return res.status(404).json({ error: 'Skill not found' });
  }

  const { name, level, category } = req.body;
  skill.name = name || skill.name;
  skill.level = level || skill.level;
  skill.category = category || skill.category;

  res.status(200).json(skill);
};

const deleteSkill = (req, res) => {
  const skillIndex = skills.findIndex(s => s.id === parseInt(req.params.id));
  if (skillIndex === -1) {
    return res.status(404).json({ error: 'Skill not found' });
  }

  skills.splice(skillIndex, 1);
  res.status(204).send();
};

module.exports = {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill
};
