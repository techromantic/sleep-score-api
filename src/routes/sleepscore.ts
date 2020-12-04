import express from 'express';
import calculateSleepScore from '../services/calculateSleepScore';
import { SleepScoreInput, Result, SleepScoreOutput } from '../types/sleep.d';

const router = express.Router();

/* GET users listing. */
router.post('/calculate', function(req, res, next) {
  try {
    let sleepScoreInput: SleepScoreInput = (req.body) as SleepScoreInput;
    console.log(`Incoming sleep score request: ${JSON.stringify(sleepScoreInput)}`)
    let sleepScoreOutput: SleepScoreOutput = calculateSleepScore(sleepScoreInput);
    console.log(`Calculated score: ${JSON.stringify(sleepScoreOutput)}`)
    let result: Result<SleepScoreOutput> = {
      data: sleepScoreOutput,
      success: true,
      message: `Here's your sleep score!`
    }
    res.json(result);
  } catch (error) {
    console.log(error);
    let result: Result<null> = {
      data: null,
      success: false,
      message: `Couldn't calculate your sleep score...`
    }
    res.json(result);
  }

});

export default router;
