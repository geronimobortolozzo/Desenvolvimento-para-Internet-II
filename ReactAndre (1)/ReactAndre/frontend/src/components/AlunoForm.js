import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Stack } from '@mui/material';

function AlunoForm({ onAlunoCadastrado }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const novoAluno = { nome, telefone, email, endereco };
      const response = await axios.post('http://localhost:8080/api/alunos', novoAluno);
      
      // Callback para atualizar a lista de alunos no componente pai (App.js)
      if(onAlunoCadastrado) {
        onAlunoCadastrado(response.data);
      }

      // Limpar campos do formulário
      setNome('');
      setTelefone('');
      setEmail('');
      setEndereco('');
    } catch (error) {
      console.error("Erro ao cadastrar aluno:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ maxWidth: 300 }}>
        <TextField
          label="Nome"
          variant="outlined"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <TextField
          label="Telefone"
          variant="outlined"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Endereço"
          variant="outlined"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </Stack>
    </form>
  );
}

export default AlunoForm;
