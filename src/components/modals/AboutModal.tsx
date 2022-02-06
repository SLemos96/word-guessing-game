import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="SOBRE O JOGO" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Esse jogo é baseado em {' '}
        <a href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold">Wordle</a> {' '}
        e foi desenvolvido à partir de código aberto
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
          >
          Veja o projeto original aqui
        </a>{' '}
          </p>
    </BaseModal>
  )
}
