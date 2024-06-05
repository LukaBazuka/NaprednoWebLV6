const express = require('express');
const router = express.Router();
const ProjectMember = require('../models/projectMember');

// Dodaj novog člana projekta
router.post('/:projectId/members', async (req, res) => {
  try {
    const projectMember = new ProjectMember({ projectId: req.params.projectId, memberId: req.body.memberId });
    await projectMember.save();
    res.send(projectMember);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Dohvati sve članove projekta
router.get('/:projectId/members', async (req, res) => {
  try {
    const projectMembers = await ProjectMember.find({ projectId: req.params.projectId });
    res.send(projectMembers);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;