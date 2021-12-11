// import Image from 'next/image'
import React, {useState} from 'react';
import Style from '../../../../styles/web/navi.module.css'
import Search from '../search/search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import PinDropIcon from '@material-ui/icons/PinDrop';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MenuIcon from '@material-ui/icons/Menu';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ExtensionIcon from '@material-ui/icons/Extension';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import HomeIcon from '@material-ui/icons/Home';

export default function navi() {

    const [isShown, setIsShown] = useState(false);

    return (
        <React.Fragment>

            <div className={Style.desktop}>
                        <div className={Style.containerA}>
                            <div className={Style.containerA}>
                                <div>
                                    <img className={Style.logo} src='/images/Logo.png' alt='Logo'/>
                                </div>
                                <div className={Style.searchFrame}>
                                    <Search/>
                                </div>
                            </div>
                            <div>
                                <div className={Style.containerA}>
                                    <div className={Style.borderA}>
                                        <a className={Style.link}>
                                            <div><PersonIcon fontSize="small"/></div>
                                            <div>ورود/ثبت نام</div>
                                        </a>
                                    </div>
                                    <div>
                                        <a className={Style.link}>
                                            <div><ShoppingCartIcon fontSize="small"/></div>
                                            <div>سبد خرید</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.containerC}>
                            <div className={Style.containerB}>
                                <div className={Style.borderA}>
                                    <a className={Style.link}>
                                        <span className={Style.paddingA}><HomeIcon fontSize="small"/></span>
                                        <span>صفحه نخست</span>
                                    </a>
                                </div>
                                <div className={Style.borderA}>
                                    <a className={Style.link} onMouseEnter={() => setIsShown(true)}>
                                        <span className={Style.paddingA}><LibraryBooksIcon fontSize="small"/></span>
                                        <span>دسته بندی</span>
                                    </a>
                                </div>
                                <div className={Style.borderA}>
                                    <a className={Style.link}>
                                        <span className={Style.paddingA}><LocalOfferIcon fontSize="small"/></span>
                                        <span>تخفیفات و پیشنهادات</span>
                                    </a>
                                </div>
                                <div className={Style.borderA}>
                                    <a className={Style.link}>
                                        <span className={Style.paddingA}><RssFeedIcon fontSize="small"/></span>
                                        <span>اخبار</span>
                                    </a>
                                </div>
                                <div className={Style.borderA}>
                                    <a className={Style.link}>
                                        <span className={Style.paddingA}><ExtensionIcon fontSize="small"/></span>
                                        <span>مشارکت در فروش</span>
                                    </a>
                                </div>
                                <div>
                                    <a className={Style.link}>
                                        <span className={Style.paddingA}><CardGiftcardIcon fontSize="small"/></span>
                                        <span>کارت هدیه</span>
                                    </a>
                                </div>
                            </div>
                            <div className={Style.containerE}>

                            </div>
                            <div>
                                <a className={Style.link}>
                                    <span className={Style.paddingA}>استان و شهر محل اقامت</span>
                                    <span><PinDropIcon fontSize="small"/></span>
                                </a>
                            </div>
                        </div>
                        {isShown && (
                            <div className={Style.containerD} onMouseLeave={() => setIsShown(false)}>
                                <div className={Style.partitionA}>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupDress.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>لباس و پوشاک</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupBeauty.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>لوازم آرایشی و بهداشتی</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupTools.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>ابزار و تجهیزات صنعتی</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupComputer.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>کالای دیجیتال</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupHome.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>لوازم خانگی</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupOffice.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>خانه و آشپزخانه</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupBook.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>کتاب و هنر</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupStationary.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>نوشت افزار و لوازم اداری</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupToy.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>اسباب بازی و سرگرمی</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupSport.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>لوازم ورزشی و سفر</span>
                                        </a>
                                    </div>
                                    <div className={Style.itemA}>
                                        <a className={Style.link}>
                                            <img src="/images/groupDrink.png" width="30" alt="Dress"/>
                                            <span className={Style.positionA}>خوراکی و آشامیدنی</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={Style.partitionB}>
                                    <div>
                                        <div className={Style.titleA}>
                                            <span>تمام دسته بندی های لباس و پوشاک</span>
                                            <span className={Style.symbol}><ChevronLeftIcon fontSize="small"/></span>
                                        </div>
                                        <div className={Style.frameA}>
                                            <div>
                                                <div className={Style.subtitleA}>
                                                    <span>مردانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>لباس مردانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>پیراهن</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>شلوار</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>تی شرت و پولو شرت</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>لباس زیر</span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>کفش مردانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>کفش روزمره</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>کفش رسمی</span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>اکسسوری مردانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>ساعت</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={Style.itemB}>
                                                    <span>کیف</span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>زنانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>لباس زنانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>پوشش اسلامی و مانتو</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>بولوز و شومیز</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>تی شرت و پولو شرت</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>شلوار و سرهمی</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>لباس زیر</span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>کفش زنانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>کفش روزمره</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>کفش تخت</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={Style.subtitleA}>
                                                    <span>اکسسوری زنانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>ساعت</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>کیف</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>شال و روسری</span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>زیور آلات زنانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>دستبند</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>گوشواره</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>گردنبند</span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>بچه گانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>پسرانه</span>
                                                </div>
                                                <div className={Style.itemB}>
                                                    <span>دخترانه</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={Style.itemB}>
                                                    <span>نوزاد</span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>عینک آفتابی زنانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>عینک آفتابی مردانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>لباس ورزشی زنانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>لباس ورزشی مردانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>کفش ورزشی زنانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>کفش ورزشی مردانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>پوشاک ورزشی بچه گانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                                <div className={Style.subtitleA}>
                                                    <span>کوله پشتی مردانه</span>
                                                    <span className={Style.symbol}><ChevronLeftIcon
                                                        fontSize="small"/></span>
                                                </div>
                                            </div>
                                            <div>
                                                <img className={Style.imageA} src="/images/dressBrand.jpg" alt="Brand"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
            </div>


            <div className={Style.mobile}>
                <div className={Style.containerA}>
                    <div>
                        <img className={Style.logo} src='/images/Logo.png' alt='Logo'/>
                    </div>
                    <div className={Style.searchFrame}>
                        <input className={Style.searchBox} type='text' placeholder='جست و جو در فروشگاه ...'/>
                        <input className={Style.searchBottom} type='submit' value=' '/>
                    </div>
                </div>
                <div>
                    <div className={Style.containerB}>
                        <div>
                            <a className={Style.link}>
                                <MenuIcon/>
                            </a>
                        </div>
                        <div className={Style.containerC}>
                            <div>
                                <a className={Style.link}>
                                    <AccountCircleIcon/>
                                </a>
                            </div>
                            <div>
                                <a className={Style.link}>
                                    <ShoppingBasketIcon/>
                                </a>
                            </div>
                            <div>
                                <a className={Style.link}>
                                    <PinDropIcon/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
