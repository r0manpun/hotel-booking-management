import Heading from '../components/Heading';
import Row from '../components/Row';
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm';

function Settings() {
  return (
    <Row type='vertical'>
      <Heading as='h1'> Update Hotel Settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}
export default Settings;
