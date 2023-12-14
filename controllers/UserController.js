const db = require("../config/db.js")

// @desc Get User
// @route GET /api/user/
// @access public
const getAllUser = async (req, res) => {
    try {
        let sqlQuery = "SELECT * from students";
        const [data] = await db.query(sqlQuery)
        res.status(200).json({ message: "Get All users", details: data })
    } catch (error) {
        console.error("Error while fetching data", error)
        res.status(500).json({ err: "Internal Server Error" })
    }
}

// @desc Create User
// @route POST /api/user/
// @access public
const createUser = async (req, res) => {
    try {
        const { name, address, faculty } = req.body;
        const sqlQuery = "Insert into students(name, address, faculty) values (?, ?, ?)"
        const userData = await db.query(sqlQuery, [name, address, faculty])
        res.status(200).json({ message: "User created successfully" })

    } catch (error) {
        console.error("Something went wrong", error)
        res.status(500).json({ err: "Internal Server Error" })
    }
}

// @desc Get User By Id
// @route GET /api/user/:id
// @access public
const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        let sqlQuery = "SELECT * FROM students WHERE id = " + id
        const [data] = await db.query(sqlQuery)
        res.status(200).json({ message: "Get All users", details: data })

    } catch (error) {
        console.error("Error while fetching data", error)
        res.status(500).json({ err: "Internal Server Error" })
    }
}

// @desc Update User
// @route PUT /api/user/:id
// @access public
const updateUser = async (req, res) => {
    res.status(200).json({ message: "User updated Successfully" })

}


// @desc Delete User
// @route DELETE /api/user/:id
// @access public
const deleteUser = async (req, res) => {
    res.status(200).json({ message: "User deleted Successfully" })

}

module.exports = {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}