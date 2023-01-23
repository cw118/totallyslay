import Link from 'next/link';

const BottomNav = ({ fr, name, children }) => {
  return (
    <div className='bottomNav'>
      <h3 className='whereNext'>{fr ? 'Où irez-vous ensuite' : 'Where to next'}, {fr ? 'agent' : 'Agent'}{name ? ` ${name}` : ''}?</h3>
      <div className='md:grid'><div className='bottomNavButtons'>
        {children}
      </div></div>
      <a target="_blank" className='ghBtn' href='https://github.com/cw118/totallyslay' rel="noopener noreferrer">{fr ? 'Code source sur GitHub' : 'Source code on GitHub'}</a>
      <Link className='mariBtn' href={fr ? '/fr' : '/'}>{fr ? 'Retourner à M.A.R.I.' : 'Return to M.A.R.I.'}</Link>
    </div>
  )
}

export default BottomNav;