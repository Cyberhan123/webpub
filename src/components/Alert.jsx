import style from './../css/Alert.less'

let defaultState = {
    alertStatus: false,
    title: "提示",
    dom: [],
    closeAlert: function () {
        document.querySelector("body").style = "position: inherit";
    }
};

class AlertBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = defaultState;
    }

    // 关闭弹框
    confirm() {
        this.setState({
            alertStatus: false
        });
        this.state.closeAlert();
    };

    open(options) {
        options = options || {};
        document.querySelector("body").style = "position:fixed";
        options.alertStatus = true;
        this.setState({
            ...defaultState,
            ...options
        })
    };

    close() {
        this.state.closeAlert();

        this.setState({
            ...defaultState
        })
    }

    render() {
        return (
            <div className={style["alert-borad"]}
                 style={this.state.alertStatus ? {display: 'block'} : {display: 'none'}}>
                <div className={style.alert}>
                    <div className={style["alert-title"]}>
                        <p>{this.state.title}</p>
                    </div>
                    <div className={style["alert-main"]}>
                        {this.state.dom}
                    </div>
                    <div className={style["alert-bottom"]}>
                        <div className={style["alert-confirm"]} onClick={this.confirm.bind(this)}>确认</div>
                        <div className={style["alert-close"]} onClick={this.close.bind(this)}>关闭</div>
                    </div>
                </div>
            </div>
        );
    }
}

//将弹出层放在最底部
let div = document.createElement('div');
let props = {};
document.body.appendChild(div);

let Alert = ReactDOM.render(React.createElement(
    AlertBox,
    props
), div);

export default Alert;

