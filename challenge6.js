
function challenge6(votes) {
    if (votes.length === 0) {
        return "There is no vote yet";
    }
    let countA = 0, countB = 0, countC = 0;
    
    for (let vote of votes) {
        if (vote === 'A') countA++;
        else if (vote === 'B') countB++;
        else if (vote === 'C') countC++;
    }
    let maxVotes = Math.max(countA, countB, countC);
    let winners = [];

    if (countA === maxVotes) winners.push('A');
    if (countB === maxVotes) winners.push('B');
    if (countC === maxVotes) winners.push('C');

    if (winners.length === 1) {
        return `${winners[0]} is the winner`;
    } else {
        return `${winners.join(' and ')} are both winners`;
    }
}
console.log(challenge6(['A', 'B', 'A', 'C', 'A'])); 
console.log(challenge6(['A', 'B', 'B', 'C', 'A']));
console.log(challenge6([]));                        
