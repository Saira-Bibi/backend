import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "User does not exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "User logged in successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};
export const getProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};
export const updateProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.name = name || user.name;
        user.email = email || user.email;
        await user.save();
        return res.status(200).json({ message: "Profile updated successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

