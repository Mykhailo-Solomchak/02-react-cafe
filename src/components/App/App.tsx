import type { Votes, VoteType } from "../../types/votes";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import css from "./App.module.css"
import { useState } from 'react';

const App = () => {
    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0
    }
    )
    const handleVote = (type: VoteType) => {
        setVotes((prev) => ({
            ...prev,
            [type]: prev[type] + 1
        }))
    }
    const resetVote = () => {
        setVotes({
            good: 0,
            neutral: 0,
            bad: 0
        })
    }
    const totalVotes = votes.bad + votes.good + votes.neutral
    const positiveRate = totalVotes ? Math.ceil((votes.good / totalVotes) * 100) : 0

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions onVote={handleVote} onReset={resetVote} canReset={totalVotes > 0} />
            {totalVotes > 0 ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification/>}





        </div>

    )
}

export default App