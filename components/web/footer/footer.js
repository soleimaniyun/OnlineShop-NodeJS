import React from "react";
import Style from '../../../styles/web/footer.module.css';
import CopyrightIcon from '@material-ui/icons/Copyright';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import PermPhoneMsgTwoToneIcon from '@material-ui/icons/PermPhoneMsgTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import MarkunreadMailboxTwoToneIcon from '@material-ui/icons/MarkunreadMailboxTwoTone';
import AndroidIcon from '@material-ui/icons/Android';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MapIcon from '@material-ui/icons/Map';


export default function footer() {
    return (
        <div>
            <div className={Style.footer}>
                <div className={Style.containerA}>
                    <div>
                        <img src="/images/logo_payment.png" alt="Logo" width="100"/>
                    </div>
                    <div>
                        <img src="/images/logo_post.png" alt="Logo" width="100"/>
                    </div>
                    <div>
                        <img src="/images/logo_original.png" alt="Logo" width="100"/>
                    </div>
                    <div>
                        <img src="/images/logo_moneyback.png" alt="Logo" width="100"/>
                    </div>
                    <div>
                        <img src="/images/logo_support.png" alt="Logo" width="100"/>
                    </div>
                </div>
                <hr className={Style.hr}/>
                <div className={Style.containerB}>
                    <div>
                        <p className={Style.textC}>راهنمای خرید از وب سایت</p>
                        <div>
                            <a>
                                <span>نحوه ثبت سفارش</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>رویه ارسال</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>روش های پرداخت</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>سوالات متداول</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className={Style.textC}>خدمات مشتریان</p>
                        <div>
                            <a>
                                <span>نحوه بازگرداندن کالا</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>تعهد حریم خصوصی</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>رسیدگی به شکایات</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>ارتباط مستقیم با مدیریت</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className={Style.textC}>ارتباط با مـا</p>
                        <div>
                            <PhoneInTalkIcon className={Style.textA}/>
                            <span>شماره تماس : 021357789 </span>
                        </div>
                        <div>
                            <PermPhoneMsgTwoToneIcon className={Style.textA}/>
                            <span>شماره نمـابر : 0215680009 </span>
                        </div>
                        <div>
                            <MarkunreadMailboxTwoToneIcon className={Style.textA}/>
                            <span>کـد پستی : 349009788 </span>
                        </div>
                        <div>
                            <EmailTwoToneIcon className={Style.textA}/>
                            <span>پست الکترونیکی : contact@labkhand.com </span>
                        </div>
                    </div>
                    <div>
                        <p className={Style.textC}>دانلود اپلیکیشن وب سایت</p>
                        <div>
                            <AndroidIcon className={Style.textA}/>
                            <span>اندروید </span>
                        </div>
                        <p className={Style.textC}>اشتراک در خبرنامه</p>
                        <div>
                            <input className={Style.inputBox} type="email" placeholder='آدرس ایمیل '/>
                            <input className={Style.submitBox} type="submit" value='ارسال'/>
                        </div>
                        <div className={Style.social}>شبکه های اجتماعی :</div>
                        <div>
                            <TelegramIcon color="action" />
                            <InstagramIcon color="action" />
                            <WhatsAppIcon color="action" />
                            <FacebookIcon color="action" />
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.containerC}>
                <div>
                    <MapIcon className={Style.textD}/>
                    <span>آدرس دفتر مرکزی : تهران ، خیابان آزادی ، خیابان جمالزاده جنوبی ، خیابان دانشور ، پلاک 243 . </span>
                </div>
            </div>
            <div className={Style.containerD}>
                <div className={Style.containerB}>
                    <div className={Style.about}>
                        <p>
                            فروشگاه اینترنتی لبخند، تجربه خوب خرید اینترنتی با تضمین بهترین قیمت ها
                        </p>
                        فروشگاه اینترنتی لبخند یکی از بزرگترین فروشگاه های اینترنتی کشور می باشد که سعی در ایجاد یک
                        تجربه خوب از خرید اینترنتی برای کاربران و مشتریان خود دارد. در فروشگاه لبخند سعی گردیده تمام
                        مزیت های ممکن شامل خرید با بهترین قیمت ممکن، دسترسی به تنوع کاملی از محصولات، تحویل سریع و
                        بموقع، خدمات قبل و پس از فروش و ...برای مشتریان فراهم گردد تا آنان با آرامش خیال خرید آنلاین خود
                        را انجام داده و سفارش های خود را در حداقل زمان ممکن در منزل یا محل کار خود تحویل گیرند. در لبخند
                        مشتریان به بیش از ده هزار قلم کالا در دسته های لوازم خانگی، تهویه مطبوع، دیجیتال، آرایشی و
                        بهداشتی، پزشکی و سلامت، ساعت و اکسسوری، سیسمونی نوزاد، مبلمان اداری، لوازم ورزشی و موسیقی و ...،
                        همگی از برندهای معتبر و شناخته شده بازار شامل سامسونگ، ال جی، بوش، پاناسونیک، سونی، اسنوا، دوو،
                        هایسنس، بکو، ... و با گارانتی های اصلی شرکتی دسترسی دارند.
                        فروشگاه اینترنتی لبخند تنها فروشگاه اینترنتی در کشور می باشد که قیمتهای خود را حتی تا 10 روز پس
                        از خرید، گارانتی می کند و در صورت ارائه مستندات، در کمتر از 2 ساعت وجه مازاد را به حساب مشتریان
                        خود باز می گرداند.
                    </div>
                    <div className={Style.license}>
                        <img src="/images/license.png" alt="License" width="256" />
                    </div>
                </div>
                <div className={Style.copyright}>
                    <CopyrightIcon className={Style.textD}/>
                    <span>استفاده از مطالب این وب سایت فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.</span>
                    <span> کلیه حقوق این سایت متعلق به </span>
                    <span>شرکت صاحب امتیاز</span>
                    <span> می‌باشد.</span>
                </div>
            </div>
        </div>
    );
}