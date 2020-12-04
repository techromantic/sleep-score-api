export interface SleepScoreInput {
    duration_bed: number;
    duration_asleep: number;
}

export interface SleepScoreOutput {
    score: number; 
}

export interface Result<T> {
    data: T;
    success: boolean; 
    message: string; 
}

