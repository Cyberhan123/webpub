import style from "../../css/website/Website.less";
const { Link } = ReactRouterDOM;
export default class Ftp extends React.Component {
    componentWillMount() {
        window.$store.dispatch({
            type: "changeWebsiteTitle",
            website: {
                title: '监控'
            }
        })
        // this.fetchWebsiteList()
    }
    render() {
        // let dom = [];
        // this.state.list.map((value, index) => {
        //     dom.push(
        //         <li key={`list-${index}`} className={style['list-item']}>
        //             <div className={style['list-item-bg-active']}></div>
        //             <div className={style['website-name']}>
        //                 <h3>网站名：{value.name}</h3>
        //             </div>
        //             <div className={style['website-desc']}>
        //                 {value.desc}
        //             </div>
        //             <div className={style['website-time']}>
        //                 最后发布时间：{value.time}
        //             </div>
        //             <div className={style.arrow}>
        //             </div>
        //         </li>
        //     )
        // });
        return (
            <div>

                <div>

                </div>
                {/*<div className={style.nav}>*/}
                    {/*<input type="text" placeholder=""/>*/}
                    {/*<div className={style.button}>*/}
                        {/*<Link to="/website/showbuild">创建新站点</Link>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className={style['list-wraper']}>*/}
                    {/*<ul>*/}
                        {/*/!*{dom}*!/*/}
                    {/*</ul>*/}
                {/*</div>*/}
            </div>
        );
    }
}
