import React from 'react';
import { Title } from '../UI';
import '../../styles/_base/_utility.scss';
import Dico from '../../utils/dico';

interface ILoading {
    type: 'loading'
}

interface IInfos {
    type: 'infos',
    msg: string,
}

interface IError {
    type: 'error',
    msgGlobal?: string,
    msgDetail: string,
}

type IDisclaimer = ILoading | IInfos | IError;

function Disclaimer(props: IDisclaimer) {
  const { type } = props;
  if (type === 'loading') {
    return (<Title name="loading..." position="center" size="small" />);
  }

  if (type === 'infos') {
    const { msg } = props || {};
    return (<Title name={msg} position="center" size="small" />);
  }

  if (type === 'error') {
    const { msgGlobal, msgDetail } = props || {};
    return (
      <>
        <Title
          name={msgGlobal || Dico.DISCLAIMER.ERROR_GLOBAL_MSG}
          position="center"
          size="small"
        />
        <Title
          name={msgDetail}
          position="center"
          size="small"
        />
        ;
      </>
    );
  }

  return null;
}

export default Disclaimer;
