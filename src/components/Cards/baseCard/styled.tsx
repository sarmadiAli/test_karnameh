import { Card, styled } from '@mui/material';

export const BaseCardStyled = styled(Card)`
  background-color: #f9f9f9;
  border: 1px solid #e4e9ec;
  border-radius: 8px;

  .baseCardHeader {
    background: #fff;
    padding: 8px 16px;
    border-radius: 0 0 8px 8px;

    box-shadow:
      0px 0px 1px 0px rgba(12, 26, 75, 0.24),
      0px 3px 8px -1px rgba(50, 50, 71, 0.05);
  }
  .baseBaseHeader {
    padding: 8px 16px;
  }
`;
