import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import SearchExercise from '../SearchExercise/SearchExercise';
import Exercises from '../Exercises/Exercises';
import { Box } from '@mui/material';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return (
        <Box>
      <Banner />
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
    );
};

export default Home;