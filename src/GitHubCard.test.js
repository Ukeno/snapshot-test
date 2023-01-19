import Profile from './GitHubCard'
import renderer from 'react-test-renderer'

test('renders a snapshot of the profile', () => {
  const tree = renderer.create(<Profile/>).toJSON()
  expect(tree).toMatchSnapshot()
})