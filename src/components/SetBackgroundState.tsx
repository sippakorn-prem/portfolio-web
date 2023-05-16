import { ReactElement, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateState } from '@/store/actions';
import { RootState } from '@/store/store.interface';

interface Props extends RootState {
  updateState: typeof updateState;
}

function SetBackgroundState({ updateState }: Props): null {
  const handleScroll = useCallback(() => {
    updateState('scrollX', window.scrollX);
    updateState('scrollY', window.scrollY);
  }, []);

  const handleResize = useCallback(() => {
    updateState('innerWidth', window.innerWidth);
    updateState('innerHeight', window.innerHeight);
  }, []);

  const setInitState = useCallback(() => {
    updateState('scrollX', window.scrollX);
    updateState('scrollY', window.scrollY);
    updateState('innerWidth', window.innerWidth);
    updateState('innerHeight', window.innerHeight);
  }, []);

  useEffect(() => {
    setInitState();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
}

const mapStateToProps = (state: RootState): RootState => state;

const mapDispatchToProps = {
  updateState,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetBackgroundState);
