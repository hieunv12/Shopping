import { useDispatch } from 'react-redux';

function JoinFollowActionHook() {
  const dispatch = useDispatch();
  const onActionFollow = (isFollow: boolean, idUser: number) => {};
  return (isFollow: boolean, idUser: number) =>
    onActionFollow(isFollow, idUser);
}

export { JoinFollowActionHook };
