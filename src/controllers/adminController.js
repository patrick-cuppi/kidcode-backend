import AdminSchema from '../models/adminSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET;

const getAllAdmins = async (req, res) => {
  AdminSchema.find((err, admins) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).send(admins);
    }
  });
};

const createAdmin = async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;

  try {
    let found = await AdminSchema.find({ email: req.body.email }).exec();

    if (found.length > 0) {
      console.log(found);
      return res.status(400).send({ message: 'Email já registrado' });
    }

    const newAdmin = new AdminSchema(req.body);

    const savedAdmin = await newAdmin.save();

    res.status(200).json({
      message: 'Admin adicionado com sucesso!',
      savedAdmin
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export { getAllAdmins, createAdmin };
