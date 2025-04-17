import { useEffect, useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

function App() {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({ nome: "", telefone: "", email: "", endereco: "" });

  // Buscar alunos ao carregar a página
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/alunos")
      .then(response => setAlunos(response.data))
      .catch(error => console.error("Erro ao buscar alunos:", error));
  }, []);

  // Atualizar os valores do formulário
  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  // Enviar aluno para a API
  const handleSubmit = () => {
    if (!aluno.nome || !aluno.telefone || !aluno.email || !aluno.endereco) {
      alert("Preencha todos os campos!");
      return;
    }

    axios.post("http://localhost:8080/api/v1/alunos", aluno)
      .then(response => {
        setAlunos(prevAlunos => [...prevAlunos, response.data]); // Atualiza lista
        setAluno({ nome: "", telefone: "", email: "", endereco: "" }); // Limpa os campos
      })
      .catch(error => console.error("Erro ao cadastrar aluno:", error));
  };

  return (
    <Container>
      <h1>Cadastro de Alunos</h1>
      <TextField label="Nome" name="nome" value={aluno.nome} onChange={handleChange} fullWidth margin="normal" required />
      <TextField label="Telefone" name="telefone" value={aluno.telefone} onChange={handleChange} fullWidth margin="normal" required />
      <TextField label="Email" name="email" value={aluno.email} onChange={handleChange} fullWidth margin="normal" required />
      <TextField label="Endereço" name="endereco" value={aluno.endereco} onChange={handleChange} fullWidth margin="normal" required />
      <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: "10px" }}>
        Cadastrar
      </Button>

      <h2>Lista de Alunos</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Endereço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alunos.length > 0 ? (
            alunos.map((a) => (
              <TableRow key={a.id}>
                <TableCell>{a.nome}</TableCell>
                <TableCell>{a.telefone}</TableCell>
                <TableCell>{a.email}</TableCell>
                <TableCell>{a.endereco}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} style={{ textAlign: "center" }}>Nenhum aluno cadastrado</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
}

export default App;
