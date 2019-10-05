import style from './../../css/website/ShowBuild.less'
class ShowBuild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className={style.header}>
                    <div className={style["header-bg"]}></div>
                    <h1>创建新的网站</h1>
                </div>
                <div>
                    <label htmlFor="">输入你要发布的页面的Git链接</label>
                    <input type="text" />

                </div>
                <div>
                    <label htmlFor="">输入你的构建命令</label>
                    <input type="text" />

                </div>
                <div>
                    <label htmlFor="">输入你要灰度发布的地址</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">输入你要正式发布的地址</label>
                    <input type="text" />
                </div>
            </div>
        );
    }
}

export default ShowBuild;