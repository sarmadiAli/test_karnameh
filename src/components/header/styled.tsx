import { Box, styled } from '@mui/material';

export const StyledBox = styled(Box)`
  background: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 50px -1px rgba(50, 50, 71, 0.05);
  .headerContainer {
    max-width: 1366px;
    padding: 16px 56px;
    ${(props) => props.theme.breakpoints.down('sm')} {
      padding: 16px;
    }
  }
  .profileImg {
    border-radius: 44px;
    border: 2px solid #e4e9ec;
    margin-right: 16px;
  }
`;
