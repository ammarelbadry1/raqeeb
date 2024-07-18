import { DashboardLayout } from '../layouts';
import { PageHeader, Loader } from '../components/common';
import {
  FormField,
  Form
} from '../components/app';
import { useAuth } from '../hooks/common';
import { useCreateOrg } from '../hooks/orgs';


export const OrganizationCreate = () => {
  const auth = useAuth();
  const { isLoading, handleCreate } = useCreateOrg();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);
    handleCreate(payload);
  }
    
  return (
    <DashboardLayout isEmptyList={true}>
      {
        auth.isLoading
          ?<Loader />
          :<>
            <PageHeader value='New Organization' />
            <Form
              legend='Organization Details'
              onSubmit={handleSubmit}
              isLoading={isLoading}
            >
              <FormField
                label='Name'
                type='text'
                name='orgName'
              />
              <FormField
                label='Phone number'
                type='text'
                name='phoneNumber'
              />
            </Form>
          </>
      }
    </DashboardLayout>
  );
}
