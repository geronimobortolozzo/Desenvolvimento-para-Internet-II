import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function AlunoList({ alunos }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Nome</TableCell>
          <TableCell>Telefone</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Endereço</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {alunos.map((aluno) => (
          <TableRow key={aluno.id}>
            <TableCell>{aluno.id}</TableCell>
            <TableCell>{aluno.nome}</TableCell>
            <TableCell>{aluno.telefone}</TableCell>
            <TableCell>{aluno.email}</TableCell>
            <TableCell>{aluno.endereco}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AlunoList;
