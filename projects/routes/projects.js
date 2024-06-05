// routes/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/project');

//Kreiraj novi projekt
router.post('/projects', (req, res) => {
  const project = new Project(req.body);
  project.save((err) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(project);
  });
});

//Dohvati sve projekte
router.get('/projects', (req, res) => {
  Project.find({}, (err, projects) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(projects);
  });
});

// Dohvati projekt po id-u
router.get('/projects/:id', (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (err) return res.status(500).send(err);
    if (!project) return res.status(404).send('Project not found');
    res.status(200).send(project);
  });
});

// Ažuriraj projekt po id-u
router.put('/projects/:id', (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, project) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(project);
  });
});

// Izbriši projekt po id-u
router.delete('/projects/:id', (req, res) => {
  Project.findByIdAndRemove(req.params.id, (err, project) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Project deleted');
  });
});

module.exports = router;
