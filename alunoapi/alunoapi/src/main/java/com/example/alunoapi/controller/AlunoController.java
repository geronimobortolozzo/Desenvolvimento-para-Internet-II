package com.example.alunoapi.controller;

import com.example.alunoapi.model.Aluno;
import com.example.alunoapi.repository.AlunoRepository;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/alunos")
@CrossOrigin(origins = "*")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @Operation(summary = "Cadastrar um novo aluno")
    @PostMapping
    public ResponseEntity<Aluno> createAluno(@RequestBody Aluno aluno) {
        try {
            Aluno alunoSalvo = alunoRepository.save(aluno);
            return ResponseEntity.status(HttpStatus.CREATED).body(alunoSalvo); // HTTP 201
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build(); // HTTP 400
        }
    }

    
    @Operation(summary = "Listar todos os alunos cadastrados")
    @GetMapping
    public ResponseEntity<List<Aluno>> getAllAlunos() {
        List<Aluno> alunos = alunoRepository.findAll();
        return ResponseEntity.ok(alunos); // HTTP 200
    }
}