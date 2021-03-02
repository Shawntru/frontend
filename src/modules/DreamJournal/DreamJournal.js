import React, { useState, useEffect, useContext } from 'react';
import DreamCard from '../DreamCard/DreamCard';
import UserContext from '../Context/UserContext';
import * as API from '../../API/APIcalls';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../themes/theme';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
  },
  loading: {
    width: '16em',
    height: '20em',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '3em',
  },
}));

const DreamJournal = () => {
  const [dreams, setDreams] = useState([]);
  const [dreamsError, setDreamsError] = useState(false);
  const [expandedId, setExpandedId] = useState(-1);
  const [dreamDateRange, setDreamDateRange] = useState([0, 7]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const user = useContext(UserContext);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  useEffect(() => {
    setLoading(true);
    setDreamsError(false);
    API.fetchUserDreams(user.token).then((response) => {
      if (response === []) {
        setDreamsError(true);
        setLoading(false);
        return;
      }
      const mostRecentDreams = response.slice(0, 8);
      setDreams(mostRecentDreams);
      setDreamsError(false);
      setLoading(false);
    });
  }, []);

  const dreamCards = dreams.map((dream) => {
    return (
      <div key={dream.id}>
        <DreamCard
          date={dream.date}
          id={dream.id}
          title={dream.title}
          description={dream.description}
          toneAnalysis={dream.toneAnalysis}
        />
      </div>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h2 className={(classes.root, classes.title)}>Dream Journal</h2>
        {dreamsError && (
          <h2 className={classes.root}>You have not saved any dreams yet</h2>
        )}
        {loading && <Skeleton variant="rect" className={classes.loading} />}
        {dreamCards}
      </div>
    </ThemeProvider>
  );
};

export default DreamJournal;
