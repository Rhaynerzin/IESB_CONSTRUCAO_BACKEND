const yup = require('yup');

exports.createSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  descricao: yup.string(),
  dataInicio: yup.date().required('Data de início é obrigatória'),
  dataFim: yup.date().min(
    yup.ref('dataInicio'),
    'Data de fim deve ser posterior à data de início'
  ),
  gerente: yup.string().required('Gerente é obrigatório')
});

exports.updateSchema = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  dataInicio: yup.date(),
  dataFim: yup.date().min(
    yup.ref('dataInicio'),
    'Data de fim deve ser posterior à data de início'
  ),
  gerente: yup.string()
});