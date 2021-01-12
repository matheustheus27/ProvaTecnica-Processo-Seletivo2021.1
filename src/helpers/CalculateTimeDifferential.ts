import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateTimeDifferential = (timeMachine:TimeMachine) => {
    var timeDifferential;
    var timeBalance = calculateTimeBalance(timeMachine);

    timeDifferential = (timeBalance.year * 365 * 24) + (timeBalance.month * 30 * 24) + (timeBalance.day * 24);
    /**
     * CALC
     */

    return timeDifferential;
}

export default calculateTimeDifferential;
