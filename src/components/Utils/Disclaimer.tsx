import { FC } from "react";
import { Title } from "../UI"
import '../../styles/_base/_utility.scss';
import { Dico } from "../../utils/dico";

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

const Disclaimer: FC<IDisclaimer> = (props) => {
    return (
        <div className="u__mt--small">
            {props.type === 'loading' && <Title name='loading...' position='center' size='small'/>}
            {props.type === 'infos' && <Title name={props.msg} position='center' size='small'/>}
            {props.type === 'error' && (
                <>
                    <Title name={Dico.DISCLAIMER.ERROR_GLOBAL_MSG} position='center' size='small'/>
                    <Title name={props.msgDetail} position='center' size='small'/>
                </>
            )}
        </div>
    )
}

export default Disclaimer;