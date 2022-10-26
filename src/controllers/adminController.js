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

const login = async (req, res) => {
  try {
    AdminSchema.findOne({ email: req.body.email }, (error, admin) => {
      if (!admin) {
        return res.status(401).send({
          message: 'Login não autorizado'
        });
      }

      const validPassword = bcrypt.compareSync(
        req.body.password,
        admin.password
      );

      if (!validPassword) {
        return res.status(401).send({
          //alterando a mensagem para não mostrar se é login ou password errado
          message: 'Login não autorizado'
        });
      }

      const token = jwt.sign({ name: admin.name }, SECRET);

      res.status(200).send({
        message: 'Login autorizado',
        token
      });
    });
  } catch (error) {
    console.error(e);
    res.status(400).json({
      message: error.message
    });
  }
};

export { getAllAdmins, createAdmin, login };
