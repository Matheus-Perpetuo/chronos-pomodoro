import gravitationalBeep from '../assets/audios/gravitational_beep.mp3'

export function loadBeep() {
    const audios = new Audio(gravitationalBeep)
    audios.load();

    return () => {
        audios.currentTime = 0;
        audios.play().catch(error => console.log('Erro ao tocar audio', error));
    };
}