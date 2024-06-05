const mongoose = require('mongoose');

const projectMemberSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('ProjectMember', projectMemberSchema);