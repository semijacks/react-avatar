import './App.css'
import Avatar from './components/Avatar/Avatar'
import DismissableBlurb from './components/DismissableBlurb/DismissableBlurb'
import Wrapper from './components/Wrapper/Wrapper'

function App() {
  return (
    <div className='App'>
      <Wrapper caption="@tkdodo's-profile-img">
        <Avatar
          url='https://avatars.githubusercontent.com/u/1021430?v=4'
          alt='profile-img'
        />
      </Wrapper>
      <DismissableBlurb>
        <h3 style={{ marginTop: 0 }}>Welcome to the new feed!</h3>
        <p>
          We're updating the cards and ranking all the time, so check back
          regularly. At first, you might need to follow some people or star some
          repositories to get started 🌱.
        </p>
        <a href='#'>Send feedback</a>
      </DismissableBlurb>
    </div>
  )
}

export default App
