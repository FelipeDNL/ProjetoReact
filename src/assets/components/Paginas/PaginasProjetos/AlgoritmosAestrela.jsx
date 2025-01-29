import React from 'react'

function AlgoritmosAestrela() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>Algoritmo de Aprofundamento Iterativo A* (A Estrela)</h2>
      </div>

      <p>
        O aprofundamento iterativo é como um explorador que mergulha cada vez mais fundo no problema até encontrar a solução.
        Funciona como uma busca gradual e persistente. Se a solução não for encontrada em uma tentativa, o sistema aprofunda a pesquisa, explorando novas possibilidades,
        tornando-o eficiente para encontrar soluções mesmo em problemas desafiadores.
      </p>

      <p>
        A* (A Estrela) usa uma heurística para estimar quão longe estamos do nosso destino e, em seguida, prioriza as ações que parecem mais promissoras.
        Isso ajuda a encontrar a rota mais rápida e eficiente, economizando tempo e recursos.
      </p>

      <p>Implementado usando PHP.</p>
      <p><a href='https://github.com/FelipeDNL/algoritmo-buscas-aprofundamento-iterativo-Aestrela' target='_blank' className='underline'>Link para o repositório</a></p>

    </>
  )
}

export default AlgoritmosAestrela