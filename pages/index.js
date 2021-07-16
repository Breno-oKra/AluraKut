import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu,OrkutNostalgicIconSet} from '../src/lib/AluraKutCommons'
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'
function ProfileSideBar({githubUser}){
  return(
    <Box >
        <img src={`https://github.com/${githubUser}.png`} />
    </Box>
    )
}

export default function Home() {
  const githubUser = 'breno-Okra'
  const pessoasFavoritas = ['juunegreiros','peas','omariosouto','marcobrunodev','rafaballerini','felipefialho']
  return(
  <>
    <AlurakutMenu/>
    <MainGrid>
    <div className='profileArea' style={{gridArea:'profileArea'}}>
      <ProfileSideBar githubUser={githubUser}/>
    </div>
    <div className='welcomeArea' style={{gridArea:'welcomeArea'}}>
      <Box >
      <h1 className='title'>
        Bem Vindo(a)
      </h1>
      <OrkutNostalgicIconSet/>
      </Box>
    </div>
    <div className='profileRelationArea' style={{gridArea:'profileRelationArea'}}>
    <ProfileRelationsBoxWrapper >
    <h2 className='smallTitle'>Pessoas da Comunidade ({pessoasFavoritas.length})</h2>
    <ul>
        {pessoasFavoritas.map((item) => {
          return(
          <li>
          <a href={'/user/${item}'} key={item}>
            <img src={`https://github.com/${item}.png`}/>
            <span>{item}</span>
          </a>
          </li>
          )
        }
        )}
        </ul>
      </ProfileRelationsBoxWrapper>
      <Box >
        comunidades
      </Box>
    </div>
    </MainGrid>
    </>
    )
}
