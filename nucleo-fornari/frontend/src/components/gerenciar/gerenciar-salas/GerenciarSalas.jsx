import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const GerenciarSalas = () => {
    
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [sortOption, setSortOption] = useState(0);

    const fetchChamados = () => {
        api.get('/salas')
            .then((res) => setData(res.data))
            .catch((error) => {
                console.error('Erro ao buscar salas:', error);
                setData([]);
            });
    };

    useEffect(() => {
        fetchChamados();
    }, []);

    const handleEdit = (data) => {
        navigate('/secretaria/editar/salas', { state: { data } });
    }

    return (
        <div className="mt-12 flex flex-col gap-4">
            <div className="flex justify-start h-15 ml-12">
                <button
                    className="flex justify-center items-center bg-blue-500 text-white-ice px-7 py-2 rounded-lg font-semibold"
                >
                    Criar sala
                </button>
            </div>
            <Box sx={{ p: 5 }}>

                <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#e0e0e0' }}>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Sala</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Localização</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Grupo</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Quantidade de Alunos</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Ações</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((sala) => (
                                <TableRow key={sala.id} hover sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f7f7f7' } }}>
                                    <TableCell align="center">{sala.nome}</TableCell>
                                    <TableCell align="center">{sala.localizacao}</TableCell>
                                    <TableCell align="center">{sala.grupo?.nome || 'Sem grupo'}</TableCell>
                                    <TableCell align="center">{sala.alunos.length}</TableCell>
                                    <TableCell align="center">
                                        <EditIcon onClick={() => handleEdit(sala)} style={{ color: 'blue', cursor: 'pointer', marginRight: 8 }} />
                                        <DeleteIcon style={{ color: 'red', cursor: 'pointer' }} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    );
};

export default GerenciarSalas;