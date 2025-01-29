import React from 'react';

function ChatCriptografado() {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h2>Chat Multicast Criptografado </h2>
            </div>

            <p>
                Este projeto é uma implementação de um sistema de comunicação seguro utilizando técnicas de criptografia para garantir a
                confidencialidade das mensagens trocadas entre os participantes do grupo multicast. É composto por dois componentes principais: MulticastChat e ServerChaves.
            </p>

            <p>
                <h3>MulticastChat</h3>
                Um aplicativo de chat que utiliza o protocolo multicast para comunicação em grupo.
                As mensagens trocadas no grupo são protegidas por criptografia simétrica (AES) no modo CBC, utilizando uma chave de 256 bits gerada a partir de um password com o protocolo KDF2.
            </p>

            <p>
                <h3>ServerChaves</h3>
                Servidor que gerencia a troca de chaves simétricas entre os clientes antes de eles se juntarem ao grupo multicast.
                A comunicação entre o cliente e o servidor de chaves é protegida por criptografia assimétrica (RSA).
            </p>

            <p>Implementado usando Java.</p>
            <p><a href='https://github.com/FelipeDNL/chat-multicast-criptografado' target='_blank' className='underline'>Link para o repositório</a></p>

        </>
    );
}

export default ChatCriptografado;