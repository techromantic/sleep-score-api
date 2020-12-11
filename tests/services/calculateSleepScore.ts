import chai, { expect } from 'chai';
import calculateSleepScore from '../../src/services/calculateSleepScore';
import chaiHttp from 'chai-http';
import { app } from '../../src/index';

chai.use(chaiHttp);
chai.should();

describe('Sleep Score Endpoint', () => { // the tests container
    it('should return the correct results', (done) => { // the single test

        chai.request(app)
            .post("/sleep-score/calculate")
            .set('content-type', 'application/json')
            .send({
                duration_bed: 10.0,
                duration_asleep: 3
            })
            .end(function(error,response) { 
                expect(error).to.be.null;
                expect(response.body).to.have.property("data").deep.equal({ score: 30 });
                expect(response.body).to.have.property("success").equal(true);
                done();
            });
    });
});

describe('Sleep Score Test', () => { // the tests container
    it('should calculate the sleep score accurately', () => { // the single test
        let sleepInput =  {
            duration_bed: 8.0,
            duration_asleep: 5
        };

        let sleepScore = calculateSleepScore(sleepInput);

        expect(sleepScore).to.deep.equal({
            score: 63
        });
    });
});
