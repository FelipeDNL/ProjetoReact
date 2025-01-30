import { useEffect } from 'react'

const usarNavegacaoTeclado = (numOpcoes, usarTeclado, numSelecionado, setNumSelecionado) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            window.history.back();
        }

        if (event.key === 'ArrowDown') {
            setNumSelecionado((prevOption) => (prevOption + 1) % numOpcoes); 
            // se o numero for maior que o numero de opções, volta para a primeira opção
            // % é o operador de módulo, que retorna o resto da divisão
        }

        if (event.key === 'ArrowUp') {
            setNumSelecionado((prevOption) => (prevOption - 1 + numOpcoes) % numOpcoes);
            // + numOpcoes para garantir que o resultado seja positivo
        }

        if (event.key === 'Enter') {
            usarTeclado(numSelecionado);
        }
    };

    // adiciona o evento de teclado
    useEffect(() => {

        // adiciona o evento de teclado ao pressionar uma tecla
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            // remove o evento de teclado ao desmontar o componente
            window.removeEventListener('keydown', handleKeyDown);

        };

    }, [handleKeyDown]); // executa o efeito sempre que a função handleKeyDown mudar

    return handleKeyDown;
}

export default usarNavegacaoTeclado;