// MyComponent.tsx

import { connect } from 'react-redux';
import { updateUserName, updateUserEmail } from '@/store/actions';
import { RootState, UserState } from '@/store/store.interface';
import { selectUserName, selectUserEmail } from '@/store/selectors';
import { ReactElement } from 'react';
import { TextField } from '@mui/material';
import { Textarea as JoyTextarea, Input as JoyInput } from '@mui/joy';

interface Props {
  user: UserState;
  updateUserName: typeof updateUserName;
  updateUserEmail: typeof updateUserEmail;
}

function MyComponent({ user, updateUserName, updateUserEmail }: Props): ReactElement {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateUserName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateUserEmail(event.target.value);
  };

  return (
    <div>
      <JoyTextarea
        placeholder="Type in here…"
        defaultValue="Try to put text longer than 4 lines."
        minRows={2}
        maxRows={4}
      />
      <TextField
        label="Username"
        variant="outlined"
        value={user.name}
        onChange={handleNameChange}
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        value={user.email}
        onChange={handleEmailChange}
      />
      <JoyInput placeholder="test" />
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
