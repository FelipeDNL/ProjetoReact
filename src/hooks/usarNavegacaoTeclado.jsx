import { useEffect } from 'react'

const usarNavegacaoTeclado = (numOpcoes, usarTeclado, numSelecionado, setNumSelecionado) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            window.history.back();
        }

        if (event.key === 'ArrowDown') {
            setNumSelecionado((prevOption) => (prevOption + 1) % numOpcoes);
        }

        if (event.key === 'ArrowUp') {
            setNumSelecionado((prevOption) => (prevOption - 1 + numOpcoes) % numOpcoes);
        }

        if (event.key === 'Enter') {
            usarTeclado(numSelecionado);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return handleKeyDown;
}

export default usarNavegacaoTeclado;