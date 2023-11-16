import * as React from 'react';
import Modal from '@mui/material/Modal';
import BaseCard from '../Cards/baseCard';
import {
  Alert,
  AlertColor,
  Button,
  Grid,
  IconButton,
  InputLabel,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  Theme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';
import useCreateQuestion from '../../hooks/useCreateQuestion';
import { FormValues, createQuestionContext, snackbarType } from './type';
import { questionType } from '../globalType';
import { modalStyle } from './style';

export default function CreateQuestionModal({
  isOpen,
  closeModal,
}: createQuestionContext) {
  const {
    control,
    handleSubmit: handleSubmitForm,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      subject: '',
      body: '',
    },
  });
  const { mutate: addMutate, isLoading } = useCreateQuestion();
  const [snackbar, setSnackbar] = React.useState<snackbarType>({
    open: false,
    severity: 'success',
    title: '',
  });

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({
      open: false,
      severity: 'success',
      title: '',
    });
  };

  const onSubmit = (bodyData: FormValues) => {
    const payloadReg: Omit<questionType, 'id'> = {
      ...bodyData,
      body: bodyData.body,
      create_at: new Date().getTime(),
      img: '',
      comments: [],
    };

    addMutate(payloadReg, {
      onSuccess: () => {
        setSnackbar({
          open: true,
          severity: 'success',
          title: 'سوال شما با موفقیت اضافه شد',
        });
        reset();
      },
    });
  };

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <BaseCard
            style={{
              ...modalStyle,
              width: isMobile ? '100%' : '770px',
            }}
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
                    rules={{
                      required: {
                        value: true,
                        message: 'این فیلد الزامی است',
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        id="subject"
                        className="karnameTextFeild"
                        fullWidth
                        {...field}
                      />
                    )}
                  />
                  {errors?.subject && (
                    <Typography color={'red'}>
                      {errors?.subject?.message}
                    </Typography>
                  )}
                </Grid>

                <Grid xs={12} item mt={2}>
                  <InputLabel htmlFor="body">متن سوال</InputLabel>
                </Grid>
                <Grid xs={12} item container>
                  <Controller
                    name="body"
                    rules={{
                      required: {
                        value: true,
                        message: 'این فیلد الزامی است',
                      },
                    }}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        id="body"
                        className="karnameTextFeild"
                        fullWidth
                        {...field}
                        minRows={8}
                        multiline
                      />
                    )}
                  />
                  {errors?.body && (
                    <Typography color={'red'}>
                      {errors?.body?.message}
                    </Typography>
                  )}
                </Grid>
                <Grid xs={12} mt={4} item container justifyContent={'flex-end'}>
                  <Button
                    onClick={closeModal}
                    sx={{ marginRight: '8px', padding: '8px 32px' }}
                    variant="text"
                  >
                    <Typography variant="h6">انصراف</Typography>
                  </Button>
                  <Button
                    disabled={isLoading}
                    type="submit"
                    variant="contained"
                  >
                    {' '}
                    {isLoading ? (
                      <CircularProgress size="25x" color="inherit" />
                    ) : (
                      <Typography variant="h6">ایجاد سوال</Typography>
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </BaseCard>
        </div>
      </Modal>
      <Snackbar
        open={snackbar?.open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar?.severity as AlertColor}
          sx={{ width: '100%' }}
        >
          <Typography variant="h6"> {snackbar?.title}</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}
