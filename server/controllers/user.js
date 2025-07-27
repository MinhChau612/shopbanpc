import user from '../models/user.js';
import asyncHandler from 'express-async-handler';
const register = asyncHandler(async (req, res) => {
    const { name, email, mobile, password } = req.body;
    console.log('req.body:', req.body);
    // Check if user already exists
    if (!email || !password || !name) {
        res.status(400).json({
            success: false,
            message: 'Missing required fields'
        });
        return;
    }
    // Tạo user trong database
    const response = await user.create(req.body);
    res.status(200).json({
        success: response ? true : false,
        response
    });
});
export default register;
