import React from 'react'

function ProjetosPython({ projetoSelecionado }) {
  return (
    <div className='container-projetos'>
      <div className='opcoes-projetos'>
        {projetoSelecionado === 'projetoPython1.html' && (
          <div className='projeto1'>
            Projeto Python 1 selecionado
          </div>
        )}
        {projetoSelecionado === 'projetoPython2.html' && (
          <div className='projeto2'>
            Projeto Python 2 selecionado
          </div>
        )}
        {projetoSelecionado === 'projetoPython3.html' && (
          <div className='projeto3'>
            Projeto Python 3 selecionado
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjetosPython