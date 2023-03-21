import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import {
  capitalize,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  IconButton
} from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Entry, EntryStatus } from '@/intefaces'
import { entriesApi } from '@/api'
import { Layout } from '@/components/layout/Layout'
import { useEntriesContext } from '@/providers/entries'
import { useRouter } from 'next/router';

const validStatus: EntryStatus[] = ['pending', 'in-progress','finished'];

type Props = {
  entry: Entry
}

const EntryPage: NextPage<Props> = ({ entry }) => {

  const { updateEntry } = useEntriesContext();
  const [inputValue, setInputValue] = React.useState(entry.description);
  const [status, setStatus] = React.useState<EntryStatus>(entry.status);
  const [touched, setTouched] = React.useState(false);

  const { push } = useRouter();


  const isNotValid = React.useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onInputValueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const onStatusChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  }

  const onSave = () => {
    if (inputValue.trim().length === 0) return;

    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue
    }

    updateEntry(updatedEntry, true);
    setTimeout(() => push('/'), 500)
  }

  return (
    <Layout title={inputValue.substring(0, 20) + '...'} >
      <Grid
        container
        justifyContent='center'
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada:`}
              subheader={`Creada hace: ${entry.createdAt} minutos`}
            />

            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Nueva entrada"
                value={inputValue}
                onBlur={() => setTouched(true)}
                onChange={onInputValueChanged}
                helperText={isNotValid && 'Ingrese un valor'}
                error={isNotValid}
              />

              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup
                  row
                  value={status}
                  onChange={onStatusChanged}
                >
                  {
                    validStatus.map(option => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={capitalize(option)}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>

            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>

          </Card>

        </Grid>

      </Grid>


      <IconButton sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        backgroundColor: 'error.dark'
      }}>
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    const { data } = await entriesApi.get(`/${id}`);
    return {
      props: {
        entry: data.entry,
      }
    }

  } catch (error) {

    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }


}

export default EntryPage