import style from './../../css/website/ShowBuild.less'
const { BrowserRouter, Link, IndexRouter } = ReactRouterDOM;
class ShowBuild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
        this.handleToNextStep = this.handleToNextStep.bind(this);
        this.handleToPreventStep = this.handleToPreventStep.bind(this);
    }
    handleToNextStep() {
         // 增加保证执行不会发生错误
        this.setState((prevState, props) => {
            if (prevState.active < 3)
                return { active: prevState.active + 1 }
        })
    }
    handleToPreventStep() {
        // 增加保证执行不会发生错误
        this.setState((prevState, props) => {
            if (prevState.active >=0)
                return { active: prevState.active - 1 }
        })
    }
    componentDidMount() {
        window.$store.dispatch({
            type: "changeWebsiteTitle",
            website: {
                title: '创建新的站点'
            }
        })
    }
    render() {
        let dom = [
            <div>
                <label className="is-block" htmlFor="git-adress">输入你要发布的页面的Git链接:</label>
                <input className={style['swiper-input']} id="git-adress" type="text" />
            </div>,
            <div>
                <label className="is-block" htmlFor="command">输入你的构建命令:</label>
                <input className={style['swiper-input']} id="command" type="text" />
            </div>,
            <div>
                <label className="is-block" htmlFor="dark-publick-adress">输入你要灰度发布的地址:</label>
                <input className={style['swiper-input']} id="dark-publick-adress" type="text" />
            </div>,
            <div>
                <label className="is-block" htmlFor="publick-adress">输入你要正式发布的地址:</label>
                <input className={style['swiper-input']} id="public-adress" type="text" />
            </div>
        ];
        return (
            <div className={style.swiper}>
                <div className={style['swiper-pagination']}>
                    {dom.map((elem, index) => {
                        return (
                            <div className={[style['swiper-pagination-item'], index === this.state.active ? style['swiper-pagination-item-active'] : null].join(' ')} key={`pagination-item-${index}`}></div>
                        )
                    })}
                </div>
                <div className={style['swiper-main']+' is-flex'}>
                    {dom.map((elem, index) => {
                        return (
                            <div className={[style['swiper-item'], index === this.state.active ? style['swiper-item-active'] : null].join(' ')} key={`swiper-item-${index}`}>
                                {elem}
                            </div>
                        )
                    })}
                </div>
                <div className={style['swiper-btn']}>
                <Link to="#" className={this.state.active === 3 ? 'button is-inline-block' : 'button is-hidden'} style={{background:"hsl(171, 100%, 41%)"}}>完成</Link>
                <button onClick={this.handleToNextStep} className={this.state.active === 3 ? 'button is-hidden' : 'button is-inline-block'} style={{background:"hsl(171, 100%, 41%)"}}>下一步</button>
                <button onClick={this.handleToPreventStep} className={this.state.active > 0 ? 'button is-inline-block' : 'button is-hidden'}>上一步</button>
                </div >
            </div >
        );
    }
}

export default ShowBuild;