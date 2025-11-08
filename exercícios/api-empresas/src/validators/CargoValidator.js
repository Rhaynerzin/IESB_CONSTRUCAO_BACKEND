const yup = require('yup');

exports.createSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  salarioBase: yup.number().required('Salário base é obrigatório').min(0, 'Salário deve ser positivo'),
  departamento: yup.string().required('Departamento é obrigatório')
});

exports.updateSchema = yup.object().shape({
  nome: yup.string(),
  salarioBase: yup.number().min(0, 'Salário deve ser positivo'),
  departamento: yup.string()
});