const asyncHandler = require("express-async-handler");
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
} = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
  const payload = req.body;
  const allStudents = await getAllStudents(payload);
  res.json(allStudents);
});

const handleAddStudent = asyncHandler(async (req, res) => {
  const payload = req.body;
  const result = await addNewStudent(payload);
  res.json(result);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  const payload = req.body;
  const updatedStudent = await updateStudent(payload);
  res.json(updatedStudent);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const studentDetail = await getStudentDetail(id);
  res.json(studentDetail);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { reviewerId, status } = req.body;
  const studentStatus = await setStudentStatus({
    userId: id,
    reviewerId,
    status,
  });
  res.json(studentStatus);
});

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
};
