import CourseSchema from '../models/courseSchema.js';
//import bcrypt from 'bcrypt';
//import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET;

//-----------Método GET-----------

const getCourses = async (req, res) => {
  CourseSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(200).send(users);
  });
};

//Post

const createCourse = async (req, res) => {
  // const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  // req.body.password = hashedPassword;

  try {
    const newCourse = new CourseSchema(req.body);

    const savedCourse = await newCourse.save();

    res.status(200).json({
      message: 'Curso adicionado com sucesso!',
      savedCourse
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// const getAll = async (req, res) => {
//   const authHeader = req.get('authorization');
//   let token;

//   //se nao tivesse header quebrava a execução pois tentava utilizar o método split em undefined
//   if (authHeader) {
//     token = authHeader.split(' ')[1];
//   }

//   if (!token) {
//     return res.status(401).send('Erro no header!');
//   }

//   //estava continuando a execução após o erro, tive que criar um verify token para parar a execução
//   let invalidToken = false;

//   jwt.verify(token, SECRET, err => {
//     if (err) {
//       invalidToken = true;
//       return res.status(403).send('Não autorizado!');
//     }
//   });

//   if (invalidToken) {
//     return;
//   }

//   UserSchema.find(function (err, users) {
//     if (err) {
//       res.status(500).send({ message: err.message });
//     }
//     res.status(200).send(users);
//   });
// };

// //----------Método POST----------
// //Devemos criar uma validação para criar usuário, o email não pode estar em uso
// const createUser = async (req, res) => {
//   const hashedPassword = bcrypt.hashSync(req.body.password, 10);
//   req.body.password = hashedPassword;

//   try {
//     const newUser = new UserSchema(req.body);

//     const savedUser = await newUser.save();

//     res.status(200).json({
//       message: 'User adicionado com sucesso!',
//       savedUser
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message
//     });
//   }
// };

// //----------Método PATCH----------
// const updateUserById = async (req, res) => {
//   try {
//     const findUser = await UserSchema.findById(req.params.id);

//     if (findUser) {
//       findUser.name = req.body.name || findUser.name;
//       findUser.email = req.body.email || findUser.email;
//     }

//     const savedUser = await findUser.save();

//     res.status(200).json({
//       message: 'Usuário atualizada com sucesso!',
//       savedUser
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// //----------Método DELETE----------
// const deleteUserById = async (req, res) => {
//   try {
//     const userFound = await UserSchema.findById(req.params.id);

//     await userFound.delete();

//     res.status(200).json({
//       mensagem: `Usuário '${userFound.email}' deletada com sucesso!`
//     });
//   } catch (err) {
//     res.status(400).json({
//       mensagem: err.message
//     });
//   }
// };

export { getCourses, createCourse };
