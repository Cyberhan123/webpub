import style from './../../css/website/detail.less'
import { getUserWebsiteDetail } from '../../api/fetchData.js';
export default class detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            website: {},
            buildInfo: [],
            issue: []
        }
    }
    async fetchUserWebsiteDetail(query) {
        const data = await getUserWebsiteDetail(query);
        console.log(data);
        this.setState({
            website: data.data.website,
            buildInfo: data.data.buildInfo,
            issue: data.data.issue
        })
    }

    componentDidMount() {
        this.fetchUserWebsiteDetail.call(this, 'id');
    }

    render() {
        return (
            <div className={style['detail-wraper']}>
                <div className={style.header}>
                    <div className={style["header-bg"]}></div>
                </div>
                <div className={style['top-card'] + ' card'}>
                    <h3>网站名称：{this.state.website.name}</h3>
                    <span>信息：{this.state.website.info}</span>
                    <p>构建地址：{this.state.website.url}</p>
                </div>
                <div className={style.main}>
                    <div className={style['left-card'] + ' card'}>
                        <ul>
                            {this.state.buildInfo.map((elem, index) => {
                                return (
                                    <li key={`build-${index}`}>
                                        <h4>{elem.id}</h4>
                                        <p>{elem.msg}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={style['right-card'] + ' card'}>
                        <ul>
                            {
                                this.state.issue.map((elem, index) => {
                                    return (
                                        <li className={'list-item'} key={`issue-${index}`}>
                                            <h4>{elem.id}</h4>
                                            <p>{elem.msg}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}