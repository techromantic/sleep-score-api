import { SleepScoreInput, SleepScoreOutput } from '../types/sleep.d';

export default function calculateSleepScore(input: SleepScoreInput): SleepScoreOutput {
    var { duration_bed, duration_asleep } = input;
    var proportionSleeping = (duration_asleep / duration_bed);
    var percentageSleeping = 100*(proportionSleeping);
    return {
        score: Math.round(percentageSleeping)
    }; 
}