import React from 'react';
import style from '../Goods/Goods.module.scss';
import ImageHeader from '../Goods/image/ImageHeader.png';
import Marble from '../Goods/image/Marble.png';
import ParquetBoard from '../Goods/image/ParquetBoard.png';
import MDF from '../Goods/image/MDF.png';

export default class Goods extends React.Component {
    render() {
        return (
            <div className={style.goods}>
                <div className={style.one} style={{ background: `url(${ImageHeader})`}}>
                    <p>主要贸易商品</p>
                    <p>提供范围广泛的建筑、装饰材料和家居用品。<br/> 我们致力于帮助您在建筑业务中取得成功，<br/>以最高的专业水平进行维修和装修工作，或应对如此艰巨的任务。</p>
                </div>
                <div className={style.strip}>
                    <div className={style.two} id='goods_nav'>
                        <div className={style.card}>
                            <div className={style.card_image} style={{ background: `url(${Marble})`}}></div>
                            <p>大理石</p>
                            <p>这是用于垂直和水平包层的通用选项。 在公寓和乡间别墅中，大理石板铺设在厨房、浴室、客厅或走廊的地板上。</p>
                            <button>阅读更多</button>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_image} style={{ background: `url(${ParquetBoard})`}}></div>
                            <p>镶木地板</p>
                            <p>木地板的一种，由几层木板（相互垂直的部分）粘合而成。</p>
                            <button>阅读更多</button>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_image} style={{ background: `url(${MDF})`}}></div>
                            <p>中密度纤维板</p>
                            <p>中密度纤维板，一种工程木制品，通过将硬木或软木残渣分解成木纤维制成。</p>
                            <button>阅读更多</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}