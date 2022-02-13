import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { InboxEmailProps } from "../InboxEmailProps";


export function BossEmail(props: InboxEmailProps){

    if(props.activeEmail === null || props.activeEmail.kind !== InboxEmailKind.BossEmail) return <></>


    return <p>
        {JSON.stringify(props)}
    </p>


}