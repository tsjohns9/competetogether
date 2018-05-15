const orm = require("./orm.js");
const groupTaskRules = [
  'taskId INT AUTO_INCREMENT',
  'taskName VARCHAR(100) NOT NULL',
  'taskDesc TEXT',
  'taskPoints BIGINT DEFAULT 0',
  'completedMembers TEXT',
  'successMembers TEXT',
  'failureMembers TEXT',
  'submitTime TEXT',
  'retry BOOL DEFAULT true',
  'PRIMARY KEY(taskId)'
];
const task = {
  addGroupTaskTable: function (groupId, cb) {
    orm.createTable("group_" + groupId + "_task", groupTaskRules, function (err, result) {
      cb(err, result);
    });
  },
  addTask: function (groupId, taskName, taskDesc, taskPoints, retry, cb) {
    const values = {
      groupId: groupId,
      taskName: taskName,
      taskDesc: taskDesc,
      taskPoints: taskPoints,
      completedMembers: "",
      successMembers: "",
      failureMembers: "",
      submitTime: "",
      retry: retry
    }
    orm.insertOneWithoutParams("group_" + groupId + "_task", values, function (err, result) {
      cb(err, result);
    });
  }
};
module.exports = task;