import style from './../../css/website/detail.less'
export default class detail extends React.Component {
    constructor(props){
        super(props);
        this.state={
            website:{
                name:"",
                url:"",
                devOPSInfo:""
            }
        }
    }
    render() {
        return (
            <div className={style['detail-wraper']}>
                <div className={style.header}>
                    <div className={style["header-bg"]}></div>
                </div>
                <div className={style.main}>
                    <div className={style['top-card']}>
                        <h3>{this.state.website.name}</h3>
                        <span>{this.state.devOPSInfo}</span>
                    </div>
                    <div className={style['left-card']}>
                        
                    </div>
                    <div className={style['right-card']}></div>
                </div>
            </div>
        );
    }
}