import * as React from 'react';
import Modal from '@mui/material/Modal';
import BaseCard from '../Cards/baseCard';
import {
  Button,
  Grid,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';

type BoxShadow = 'none' | string;
type FormValues = {
  subject: string;
  questionText: string;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 770,
  bgcolor: 'background.paper',
  boxShadow: '24px' as BoxShadow,
  p: 4,
};

type createQuestionContext = {
  isOpen: boolean;
  closeModal: () => void;
};
export default function CreateQuestionModal({
  isOpen,
  closeModal,
}: createQuestionContext) {
  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      subject: '',
      questionText: '',
    },
  });
  // eslint-disable-next-line no-unused-vars
  const onSubmit = (_: any) => {
    // console.log('🚀 ~ file: index.tsx:38 ~ onSubmit ~ data:', data);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BaseCard
          style={style}
          header={
            <Grid
              container
              p={'4px 8px'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Grid item>
                <Typography variant="subtitle2">ایجاد سوال جدید</Typography>
              </Grid>
              <Grid item>
                <IconButton onClick={closeModal}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          }
        >
          <form
            style={{ width: '100%', padding: '8px 4px' }}
            onSubmit={handleSubmitForm(onSubmit)}
          >
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <InputLabel htmlFor="subject">موضوع</InputLabel>
              </Grid>
              <Grid xs={12} item container>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="subject"
                      className="karnameTextFeild"
                      fullWidth
                      {...field}
                      error={!!errors?.subject}
                      helperText={errors?.subject?.message || null}
                    />
                  )}
                />
              </Grid>

              <Grid xs={12} item mt={2}>
                <InputLabel htmlFor="questionText">متن سوال</InputLabel>
              </Grid>
              <Grid xs={12} item container>
                <Controller
                  name="questionText"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id="questionText"
                      className="karnameTextFeild"
                      fullWidth
                      {...field}
                      error={!!errors?.questionText}
                      helperText={errors?.questionText?.message || null}
                      minRows={8}
                      multiline
                    />
                  )}
                />
              </Grid>
              <Grid xs={12} mt={4} item container justifyContent={'flex-end'}>
                <Button
                  sx={{ marginRight: '8px', padding: '8px 32px' }}
                  variant="text"
                >
                  انصراف
                </Button>
                <Button variant="contained"> ایجاد سوال</Button>
              </Grid>
            </Grid>
          </form>
        </BaseCard>
      </Modal>
    </div>
  );
}
