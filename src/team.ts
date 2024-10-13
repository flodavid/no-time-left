
export class Team {
    public name: string
    public totalScore: number
    public roundScore: number
    
    constructor(teamName: string, teamScore : number = 0) {
        this.name = teamName
        this.totalScore = teamScore
        this.roundScore = 0
    }
}
