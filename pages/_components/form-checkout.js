import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';

export default function MultilineTextFields() {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h2>Informações de contato</h2>
        <TextField
          id="filled-textarea"
          label="Email ou telefone"
          placeholder=""
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Nome"
          placeholder=""
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Sobrenome"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="filled-textarea"
          label="Endereço"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Complemento"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Cidade"
          placeholder=""
          multiline
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="filled-textarea"
          label="Número"
          placeholder=""
          multiline
          variant="filled"
        />
        <TextField
          id="standard-textarea"
          label="Bairro"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />
        <TextField
          id="standard-textarea"
          label="CEP"
          placeholder="Placeholder"
          multiline
          variant="standard"
          
        />
      </div>
      <Button variant="contained">Confirmar pagamento</Button>
    </Box>
  );
}
