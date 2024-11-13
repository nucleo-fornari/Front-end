import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useState, useEffect } from 'react';
import ModalAluno from '../modals/aluno/ModalAluno';
import api from '../../services/api'

export default function AlignItemsList() {
  const [alunos, setAlunos] = useState([]);
  const [open, setOpen] = useState(false);
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  const handleClose = () => {
    setOpen(false);
    setAlunoSelecionado(null);
  };

  const handleClick = (aluno) => {
    setAlunoSelecionado(aluno);
    setOpen(true);
  };

  useEffect(() => {
    const fetchSalas = async () => {
        try {
          // Precisa buscar pelo id da sala
          const res = await api.get('/salas');
          const alunos = res.data.flatMap(sala => sala.alunos);
          setAlunos(alunos);
        } catch (error) {
            console.error("Erro ao buscar Salas:", error);
        }
    };

    fetchSalas();
}, []);

  // Função para gerar inicial do nome para o avatar
  const getInitial = (name) => {
    return name
      .split() // Dividir o nome em palavras
      .map((n) => n[0]) // Pegar a primeira letra de cada palavra
      .join(''); // Unir as letras para formar as iniciais
  };

  return (
    <>
      <h1 className="text-blue-main font-semibold text-xl mb-4">Turma: G1A</h1>
      <div className="overflow-y-auto max-h-96 rounded-lg shadow-lg bg-white">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {alunos.map((aluno, index) => (
            <React.Fragment key={index}>
              <ListItem
                alignItems="center"
                className="transition-all duration-300 hover:bg-blue-100 cursor-pointer"
                onClick={() => handleClick(aluno)}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={aluno.nome}
                    sx={{ bgcolor: 'primary.main', color: 'white' }}
                  >
                    {getInitial(aluno.nome)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={aluno.nome}
                  primaryTypographyProps={{
                    className: 'font-medium text-gray-800',
                    variant: 'body1',
                  }}
                />
              </ListItem>
              {index < alunos.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          ))}
        </List>
      </div>

      {/* Passando o aluno selecionado para o Modal */}
      {alunoSelecionado && (
        <ModalAluno
          open={open}
          handleClose={handleClose}
          aluno={alunoSelecionado}
        />
      )}
    </>
  );
}