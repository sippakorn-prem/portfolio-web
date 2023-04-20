// MyComponent.tsx

import { connect } from 'react-redux';
import { updateUserName, updateUserEmail } from '@/store/actions';
import { RootState, UserState } from '@/store/store.interface';
import { selectUserName, selectUserEmail } from '@/store/selectors';
import { ReactElement } from 'react';

interface Props {
  user: UserState;
  updateUserName: typeof updateUserName;
  updateUserEmail: typeof updateUserEmail;
}

function MyComponent({ user, updateUserName, updateUserEmail }: Props): ReactElement {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateUserEmail(event.target.value);
  };

  return (
    <div>
      <input type="text" value={user.name} onChange={handleNameChange} />
      <input type="email" value={user.email} onChange={handleEmailChange} />
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  user: {
    name: selectUserName(state),
    email: selectUserEmail(state),
  },
});

const mapDispatchToProps = {
  updateUserName,
  updateUserEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
