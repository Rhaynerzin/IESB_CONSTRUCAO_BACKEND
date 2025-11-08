const yup = require('yup');

exports.createSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  telefone: yup.string(),
  cargo: yup.string().required('Cargo é obrigatório'),
  departamento: yup.string().required('Departamento é obrigatório')
});

exports.updateSchema = yup.object().shape({
  nome: yup.string(),
  email: yup.string().email('E-mail inválido'),
  telefone: yup.string(),
  cargo: yup.string(),
  departamento: yup.string()
});