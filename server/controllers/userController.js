const bcrypt = require("bcryptjs");
const UserModel = require('../model/UserModel');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

// Get all students
module.exports.getStudent__controller = async (req, res, next) => {
    try {
        const studentInfo = await UserModel.find({ role: "Student" });
        return res.status(200).json({
            studentInfo
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Error occurred"
        });
    }
};

// Get all teachers
module.exports.getTeacher__controller = async (req, res, next) => {
    try {
        const teacherInfo = await UserModel.find({ role: "Teacher" });
        return res.status(200).json({
            teacherInfo
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Error occurred"
        });
    }
};

module.exports.getallPrincipal__controller = async (req, res, next) => {
    try {
        const studentInfo = await UserModel.find({ role: "Principal" });
        return res.status(200).json({
            studentInfo
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Error occurred"
        });
    }
};

module.exports.getPrincipal__controller = async (req, res, next) => {
    try {
        const principalId = req.user.id; // Assuming you have middleware to extract the authenticated user's ID

        const principalInfo = await UserModel.find({ role: "Principal", _id: principalId });
        const studentInfo = await UserModel.find({ role: "Student", principalId: principalId });
        const teacherInfo = await UserModel.find({ role: "Teacher", principalId: principalId });

        return res.status(200).json({
            principalInfo,
            studentInfo,
            teacherInfo
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Error occurred"
        });
    }
};

// Delete a teacher
module.exports.deleteTeacher__controller = async (req, res, next) => {
    try {
        const { userId } = req.body;

        const user = await UserModel.findOneAndDelete({ _id: userId });
        return res.status(200).json({
            user,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).json({
            error: "Something went wrong",
        });
    }
};

// Update a user by ID
module.exports.updateUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { userName, email, role } = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(userId, { userName, email, role }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const { userName, email, password, role } = req.body;
    try {
        const newUser = new UserModel({ userName, email, password, role });
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update user role
exports.updateUserRole = async (req, res) => {
    const { email, role } = req.body;
    if (!email || !role) {
        return res.status(400).json({ error: 'Email and role must be provided' });
    }

    try {
        const updatedUser = await UserModel.findOneAndUpdate({ email }, { role }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User role updated successfully', user: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await UserModel.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update user password
exports.updateUserPassword = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password must be provided' });
    }

    try {
        const hash = await bcrypt.hash(password, 10);
        const updatedUser = await UserModel.findOneAndUpdate({ email }, { password: hash }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User password updated successfully', user: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update user active status
exports.updateUserActiveStatus = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.active = req.body.active;
        await user.save();
        res.json({ message: "User's active status updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Principal-specific operations

exports.createTeacherOrStudent = async (req, res) => {
    const { userName, email, password, role } = req.body;
    const principalId = req.user._id ; // Extracted from the middleware

    if (!["Teacher", "Student"].includes(role)) {
        return res.status(400).json({ error: 'Role must be either Teacher or Student' });
    }
    const hash = await bcrypt.hash(password, 10);
    try {
        const newUser = new UserModel({ userName, email, password : hash, role, principalId });
        await newUser.save();
        res.status(201).json({ message: "Teacher or Student created successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getUsers = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

exports.editTeacherOrStudent = async (req, res) => {
    const { userId } = req.params;
    const { userName, email, role } = req.body;
    if (!["Teacher", "Student"].includes(role)) {
        return res.status(400).json({ error: 'Role must be either Teacher or Student' });
    }

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId, { userName, email, role }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'Teacher or Student not found' });
        }
        res.json({ message: 'Teacher or Student updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating Teacher or Student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateTeacherOrStudentRole = async (req, res) => {
    const { email, role } = req.body;
    if (!["Teacher", "Student"].includes(role)) {
        return res.status(400).json({ error: 'Role must be either Teacher or Student' });
    }

    try {
        const updatedUser = await UserModel.findOneAndUpdate({ email }, { role }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'Teacher or Student not found' });
        }
        res.json({ message: 'Teacher or Student role updated successfully', user: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteTeacherOrStudent = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await UserModel.findOneAndDelete({ _id: userId, role: { $in: ["Teacher", "Student"] } });
        if (!user) {
            return res.status(404).json({ message: "Teacher or Student not found" });
        }
        res.status(200).json({ message: "Teacher or Student deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
      const user = await UserModel.findOne({ email });
  
      if (!user) {
        return res.status(409).json({ message: 'User not found' });
      }
  
  
      // Generate token
      const resetToken = crypto.randomBytes(32).toString('hex');
      user.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
      user.resetPasswordExpire = Date.now() + 10 * 60 * 6 * 1000; // 10 minutes
  
      await user.save();

      const resetUrl = `https://lms.advisionslab.com/${resetToken}`;

      const message = `You are receiving this email because you requested a password reset.${resetUrl2}  Please make a PUT request to: \n\n ${resetUrl}`;
    
  
      await sendEmail({
        email: user.email,
        subject: 'Password Reset',
        message,
      }).catch(error => {
        console.error("Email sending error: ", error);
        return res.status(500).json({ message: 'Email sending failed' });
      });
  
      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.error("Server error: ", error);  // Log detailed error
      res.status(500).json({ message: 'Server Error' });
    }
  };
  


  exports.resetPassword = async (req, res) => {
    try {
      const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
  
      const user = await UserModel.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      // Hash the new password before saving
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
  
      await user.save();
  
      res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  