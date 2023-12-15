import React from 'react'
import use from '../../data/use.json'
import style from '../../sass/yn.module.scss'
import { useState } from 'react';
function Useit() {
    const [tabnm, settabnm] = useState(0);
    return (
        <div className={`${style.useit} container`}>
            <div className={`${style.dsc} text-center`}>
                <p>
                    <h3 className={style.h3}><strong>사용방법</strong></h3> <br />
                    사용방법을 알려드립니다.
                </p>
            </div>
            <div className={`${style.threeBanner} container px-0`}>
                <div className={`${style.tabhead} w-100 d-flex justify-content-center py-3`}>
                    {
                        use.tab.map((v, i) => {

                            return (
                                <div class="tabhead d-flex  w-100 justify-content-center py-3">
                                    <h4
                                        onClick={() => { settabnm(i) }}
                                        className={ tabnm === i ? 'act' : null }
                                    ><a href="#none" className={style.a}>{v.tabsubject}</a></h4>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='content d-flex flex-row justify-content-center align-items-center py-5 col-12'>

                    {
                        use.tab[tabnm] &&
                        <div className='d-flex align-items-center'>
                            <img src={use.tab[tabnm].tabact.tabimg} className={style.tab_img} alt="" />
                            <div className='px-5'>
                            <span className={`${style.tab_span} mx-5 py-3 d-inline-block`}><strong>STEP {tabnm + 1}</strong>                            
                            </span> <br/>
                            <span>{use.tab[tabnm].tabact.tabtext}</span> <br/>
                            <span>{use.tab[tabnm].tabact.tabtext2}</span>
                            </div>
                           
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Useit
