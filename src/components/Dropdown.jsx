import style from '../css/Dropdown.less'


export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.dropdownState ? {visibility: 'visible'} : {visibility: 'hidden'}}>
                <aside className={style.dropdown}>
                    <ul>
                        {this.props.children}
                    </ul>
                </aside>
            </div>
        );
    }

}
