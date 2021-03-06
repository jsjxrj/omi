import { WeElement } from 'omi';
import { MDCMenu } from '@material/menu';
interface Props {
    show?: boolean;
    list: object;
    anchor: boolean;
}
interface Data {
}
export default class Menu extends WeElement<Props, Data> {
    static css: string;
    static defaultProps: {};
    static propTypes: {
        list: ObjectConstructor;
        show: BooleanConstructor;
        anchor: BooleanConstructor;
    };
    menu: MDCMenu;
    installed(): void;
    toggle(): void;
    open(): void;
    close(): void;
    install(): void;
    receiveProps(): void;
    render(props: any): JSX.Element;
}
export {};
