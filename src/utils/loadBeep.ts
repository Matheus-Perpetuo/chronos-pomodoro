import soundpokemon from '../assets/audios/soundpokemon.mp3'

export function loadBeep() {
    const audios = new Audio(soundpokemon)
    audios.load()

    return () => {
        audios.currentTime = 0;
        audios.play().catch(error => console.log('Erro ao tocar audio', error));
    };
}