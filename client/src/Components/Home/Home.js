import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

import { getEvents } from '../../logic/api';

import Style from '../Style/Style';
import EventCard from '../EventCard/EventCard';

const Home = () => {
  const style = Style();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then(data => setEvents(data.events))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [])

  return loading ? (
    <LinearProgress />
  ) : (
    <div className={style.root}>
      <Grid container spacing={1} justify="center">
        {events.map(event => (
          <Grid item key={event.name}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;