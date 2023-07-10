import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import { style } from 'typestyle';

import { Strings } from '../../../resources/Strings';

function NoResultsFound() {
  const noResultsFound = Strings.components.noResultsFound;

  const styles = {
    text: style({
        textAlign: 'center',
        marginBottom: '80px',
    }),
  }; 

  return (
    <Container data-testid='no-results-found-msg'>
      <Grid container alignItems='center' justifyContent='center'>
        <div className={`${styles.text}`}>
            <div><SearchIcon fontSize="large" /><br /></div>
            <b>{noResultsFound.mainMessage}</b><br />
            {noResultsFound.note}<br />
        </div>
      </Grid>
    </Container>
  );
}

export default NoResultsFound;
