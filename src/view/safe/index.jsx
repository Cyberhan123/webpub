import style from "../../css/website/Website.less";
const { Link } = ReactRouterDOM;
export default class Ftp extends React.Component {
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
                    <div>
                        启用ssh
                    </div>
                    <div>
                        ssh 端口：
                    </div>
                    <div>
                        禁用ping
                    </div>
                    <div>
                        Web日志：
                    </div>
                </div>
                <div>
                    <p>端口控制</p>
                </div>
            </div>
        );
    }
}
