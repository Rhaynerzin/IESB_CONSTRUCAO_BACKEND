const yup = require('yup');

exports.createSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  sigla: yup.string().required('Sigla é obrigatória').max(5, 'Máximo 5 caracteres')
});

exports.updateSchema = yup.object().shape({
  nome: yup.string(),
  sigla: yup.string().max(5, 'Máximo 5 caracteres')
});