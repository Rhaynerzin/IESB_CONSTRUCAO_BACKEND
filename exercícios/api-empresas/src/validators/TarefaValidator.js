const yup = require('yup');

exports.createSchema = yup.object().shape({
  titulo: yup.string().required('Título é obrigatório'),
  descricao: yup.string(),
  status: yup.string().oneOf(['Pendente', 'Em andamento', 'Concluída']),
  prazo: yup.date(),
  projeto: yup.string().required('Projeto é obrigatório'),
  responsavel: yup.string().required('Responsável é obrigatório')
});

exports.updateSchema = yup.object().shape({
  titulo: yup.string(),
  descricao: yup.string(),
  status: yup.string().oneOf(['Pendente', 'Em andamento', 'Concluída']),
  prazo: yup.date(),
  projeto: yup.string(),
  responsavel: yup.string()
});