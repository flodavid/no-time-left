import { WebHaptics } from "web-haptics";

export class Timer {
    private static alarmSoundPath = "alarm.ogg"
    // private static alarmClockSoundPath = "alarm-clock.ogg"
    private static funnyAlarmSoundPath = "alarm-scorpion-qui-meurt.ogg"
    private static funnySoundOneIn = 20

    private timerText: HTMLDivElement
    private interval: number | null
    private seconds: number
    private minutes: number
    private initialTimeSeconds : number
    private audioAlarm : HTMLAudioElement
    
    public onTimerEnd: Array<() => void>

    constructor (elementId: string) {
        this.timerText = document.getElementById(elementId) as HTMLDivElement
        this.interval = null
        this.seconds = 0
        this.minutes = 0
        this.onTimerEnd = []
        this.initialTimeSeconds = 30 // TODO replace by user input
        if (location.hostname === "localhost") {
            this.initialTimeSeconds = 2
        }
        this.audioAlarm = new Audio(Timer.alarmSoundPath) // buffers automatically when created
        console.log('sound set up:', this.audioAlarm.src)
        this.audioAlarm.volume = 0.5
    }

    public start (): void {
        this.seconds = this.initialTimeSeconds % 60;
        this.minutes = Math.floor(this.initialTimeSeconds / 60 );
        this.resume()
    }

    public resume (): void {
        if (this.seconds > 0 || this.minutes > 0) {
            if (!this.interval) {
                this.updateDisplay();
                this.interval = window.setInterval(() => {
                    this.updateTimer();
                }, 1000);
            }
        }
    }

    public stop (): void {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        
        // 1s vibration at end of timer
        if (this.seconds === 0 && this.minutes === 0) {
            console.log("vibrating for 1s")
            const haptics = new WebHaptics()
            haptics.trigger("buzz")
        }

        // every so often, use the funny alarm instead of the classic one
        if (Math.floor(Math.random() * Timer.funnySoundOneIn) == 0) {
            this.audioAlarm.src = Timer.funnyAlarmSoundPath;
        } else {
            // Plays short sound
            this.audioAlarm.play()
        }
    }

    public reset (): void {
        this.stop();
        this.seconds = 0;
        this.minutes = 0;
        this.updateDisplay();
    }

    public forceEnd (): void {
        this.seconds = 1;
        this.minutes = 0;
        this.updateTimer();
    }

    public isRunning (): boolean {
        return this.interval !== null
    }

    private updateTimer (): void {
        --this.seconds;
        if (this.seconds === 60) {
            this.seconds = 0;
            --this.minutes;
        }
        this.updateDisplay();
        
        // End timer event
        if (this.minutes === 0 && this.seconds <= 0) {
            this.stop()

            for (var timerEndMethod of this.onTimerEnd) {
                timerEndMethod()
            }
        }
    }

    private updateDisplay (): void {
        const minutes = this.minutes.toString().padStart(2, '0');
        const seconds = this.seconds.toString().padStart(2, '0');
        this.timerText.textContent = `${minutes}:${seconds}`;
    }
}
