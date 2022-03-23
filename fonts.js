default_site_name = "فونت سی‌دی‌اِن";
default_url = "https://cdn.jsdelivr.net/gh/FaFont/CDN";
default_sample_text = "خداوند کیهان و گردان‌سپهر ۱۲۳ Quick brown fox 123";

font_names_en = ["Ahang", "AhangSharp", "Alibaba", "Anjoman", "AnjomanFN", "Aria", "AriaFN", "AzarMehr", "AzarMehrFN", "Azhdar", "AzhdarFN", "Bidad", "Daal", "Dana", "DanaFN", "Dana2", "Dana2FN", "Dibaj", "Farhang", "FarhangFN", "FarhangSharp", "Irancell", "IRAN", "IRANSharp", "IRANSans", "IRANSansFN", "IRANSansX", "IRANSansXFN", "IRANSansDN", "IRANSansDNFN", "IRANYekan", "IRANYekanFN", "Kalameh", "KalamehFN", "Kara", "Morabba", "Noora", "NooraFN", "Omid", "On", "Pelak", "PelakFN", "Peyda", "Pinar", "PinarFN", "Ravi", "Tahrir", "Tajrid", "Traffic", "Vanda", "VandaFN", "YekanBakh"];
font_names_fa = ["آهنگ", "آهنگ‌شارپ", "علی‌بابا", "انجمن", "انجمن اعداد فارسی", "آریا", "آریا اعداد فارسی", "آذرمهر", "آذرمهر اعداد فارسی", "اژدر", "اژدر اعداد فارسی", "بیداد", "دال", "دانا", "دانا اعداد فارسی", "دانا نسخه2", "دانا نسخه2 اعداد فارسی", "دیباج", "فرهنگ", "فرهنگ اعداد فارسی", "فرهنگ‌شارپ", "ایرانسل", "ایران", "ایران‌شارپ", "ایران‌سنس", "ایران‌سنس اعداد فارسی", "ایران‌سنس‌ایکس", "ایران‌سنس‌ایکس اعداد فارسی", "ایران‌سنس دست‌نویس", "ایران‌سنس دست‌نویس اعداد فارسی", "ایران‌یکان", "ایران‌یکان اعداد فارسی", "کلمه", "کلمه اعداد فارسی", "کارا", "مربع", "نورا", "نورا اعداد فارسی", "امید", "آن", "پلاک", "پلاک اعداد فارسی", "پیدا", "پینار", "پینار اعداد فارسی", "راوی", "تحریر", "تجرید", "ترافیک", "وندا", "وندا اعداد فارسی", "یکان‌بخ"];

function previousFontSet() {
  if ( font_names_en[font_names_en.indexOf(this_font) - 1] ) {
    previous_font = font_names_en[font_names_en.indexOf(this_font) - 1];
  } else {
    previous_font = null;
  }
}
function nextFontSet() {
  if ( font_names_en[font_names_en.indexOf(this_font) + 1] ) {
    next_font = font_names_en[font_names_en.indexOf(this_font) + 1];
  } else {
    next_font = null;
  }
}

function fontNameSet() { font_name = font_names_fa[font_names_en.indexOf(this_font)] }
function fontfaceURLSet() { fontface_url = default_url + "/" + this_font + "/"  + this_font + ".css"; }

function Ahang() {
  this_font = "Ahang";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-آهنگ-حرفه‌ای";
  fontfaceURLSet();
}

function AhangSharp() {
  this_font = "AhangSharp";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-آهنگ-حرفه‌ای";
  fontfaceURLSet();
}

function Alibaba() {
  this_font = "Alibaba";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "رضا بختیاری‌فرد";
  font_weights = ['300', '400', '700', '900'];
  font_buyable = false;
  font_shop_domain = null;
  font_shop_url = null;
  fontfaceURLSet();
}

function Anjoman() {
  this_font = "Anjoman";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.0";
  font_creator = "هیربد لطفیان";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950', "italic"];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-انجمن-حرفه‌ای";
  fontfaceURLSet();
}

function AnjomanFN() {
  this_font = "AnjomanFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.0";
  font_creator = "هیربد لطفیان";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950', "italic"];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-انجمن-حرفه‌ای";
  fontfaceURLSet();
}

function Aria() {
  this_font = "Aria";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "امید امامیان";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-آریا-حرفه‌ای-۱۲وزن";
  fontfaceURLSet();
}

function AriaFN() {
  this_font = "AriaFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "امید امامیان";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-آریا-حرفه‌ای-۱۲وزن";
  fontfaceURLSet();
}

function AzarMehr() {
  this_font = "AzarMehr";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.32";
  font_creator = "امین عابدی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontamin.com";
  font_shop_url = "https://fontamin.com/product/فونت-آذرمهر";
  fontfaceURLSet();
}

function AzarMehrFN() {
  this_font = "AzarMehrFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.32";
  font_creator = "امین عابدی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontamin.com";
  font_shop_url = "https://fontamin.com/product/فونت-آذرمهر";
  fontfaceURLSet();
}

function Azhdar() {
  this_font = "Azhdar";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "مصطفی اوجی";
  font_weights = ['100', '400', '700', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-اژدر";
  fontfaceURLSet();
}

function AzhdarFN() {
  this_font = "AzhdarFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "مصطفی اوجی";
  font_weights = ['100', '400', '700', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-اژدر";
  fontfaceURLSet();
}

function Bidad() {
  this_font = "Bidad";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "مهدی روندی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  font_buyable = true;
  font_shop_domain = "fontha.com";
  font_shop_url = "https://fontha.com/product/bidadfont";
  fontfaceURLSet();
}

function Daal() {
  this_font = "Daal";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.04";
  font_creator = "مهدی روندی";
  font_weights = ['200', '400', '900'];
  font_buyable = true;
  font_shop_domain = "fontha.com";
  font_shop_url = "https://fontha.com/product/daalfont";
  fontfaceURLSet();
}

function Dana() {
  this_font = "Dana";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "3.2";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-دانا-حرفه‌ای";
  fontfaceURLSet();
}

function DanaFN() {
  this_font = "DanaFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "3.2";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-دانا-حرفه‌ای";
  fontfaceURLSet();
}

function Dana2() {
  this_font = "Dana2";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.0";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950', "italic"];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-دانا-حرفه‌ای";
  fontfaceURLSet();
}

function Dana2FN() {
  this_font = "Dana2FN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.0";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900', '950', "italic"];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-دانا-حرفه‌ای";
  fontfaceURLSet();
}

function Dibaj() {
  this_font = "Dibaj";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "عاطفه محمدی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-دیباج";
  fontfaceURLSet();
}

function Farhang() {
  this_font = "Farhang";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.2";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-فرهنگ-حرفهای";
  fontfaceURLSet();
}

function FarhangFN() {
  this_font = "FarhangFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.2";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-فرهنگ-حرفهای";
  fontfaceURLSet();
}

function FarhangSharp() {
  this_font = "FarhangSharp";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.2";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-فرهنگ-حرفهای";
  fontfaceURLSet();
}

function Irancell() {
  this_font = "Irancell";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "رضا بختیای‌فرد";
  font_weights = ['200', '300', '400', '500', '700', '800'];
  font_buyable = false;
  font_shop_domain = null;
  font_shop_url = null;
  fontfaceURLSet();
}

function IRAN() {
  this_font = "IRAN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.1";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['400', '600', '700', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/خانواده-فونت-ایران";
  fontfaceURLSet();
}

function IRANSharp() {
  this_font = "IRANSharp";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "3.0";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['300', '400', '700'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-ایران-شارپ-iran-sharp-حاوی-فونت-موبایل-وب";
  fontfaceURLSet();
}

function IRANSans() {
  this_font = "IRANSans";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "5.5";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['200', '300', '400', '500', '700', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/خانواده-فونت-ایران-سن-سریف-iran-sans-پنج-وزن-هم-2";
  fontfaceURLSet();
}

function IRANSansFN() {
  this_font = "IRANSansFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "5.5";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['200', '300', '400', '500', '700', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/خانواده-فونت-ایران-سن-سریف-iran-sans-پنج-وزن-هم-2";
  fontfaceURLSet();
}

function IRANSansX() {
  this_font = "IRANSansX";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.22";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/خانواده-فونت-ایران-سن-سریف-iran-sans-پنج-وزن-هم-2";
  fontfaceURLSet();
}

function IRANSansXFN() {
  this_font = "IRANSansXFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.22";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/خانواده-فونت-ایران-سن-سریف-iran-sans-پنج-وزن-هم-2";
  fontfaceURLSet();
}

function IRANSansDN() {
  this_font = "IRANSansDN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['300', '400', '700'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-ایران-سنس-دست-نویس-iransansdn";
  fontfaceURLSet();
}

function IRANSansDNFN() {
  this_font = "IRANSansDNFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['300', '400', '700'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-ایران-سنس-دست-نویس-iransansdn";
  fontfaceURLSet();
}

function IRANYekan() {
  this_font = "IRANYekan";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "3.0";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '300', '400', '500', '700', '800', '900', '950'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-ایران-یکان-iran-yekan";
  fontfaceURLSet();
}

function IRANYekanFN() {
  this_font = "IRANYekanFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "3.0";
  font_creator = "مسلم ابراهیمی";
  font_weights = ['100', '300', '400', '500', '700', '800', '900', '950'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-ایران-یکان-iran-yekan";
  fontfaceURLSet();
}

function Kalameh() {
  this_font = "Kalameh";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "4.0";
  font_creator = "ناصر خادم";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-کلمه";
  fontfaceURLSet();
}

function KalamehFN() {
  this_font = "KalamehFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "4.0";
  font_creator = "ناصر خادم";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-کلمه";
  fontfaceURLSet();
}

function Kara() {
  this_font = "Kara";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "دامون خانجان‌زاده";
  font_weights = ['300', '400', '600'];
  font_buyable = false;
  font_shop_domain = null;
  font_shop_url = null;
  fontfaceURLSet();
}

function Morabba() {
  this_font = "Morabba";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "حسن منظوری";
  font_weights = ['200', '300', '400', '500', '600', '700', '800', '900', '950'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-کلمه";
  fontfaceURLSet();
}

function Noora() {
  this_font = "Noora";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "عاطفه محمدی";
  font_weights = ['200', '300', '400', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-نورا";
  fontfaceURLSet();
}

function NooraFN() {
  this_font = "NooraFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "عاطفه محمدی";
  font_weights = ['200', '300', '400', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-نورا";
  fontfaceURLSet();
}

function Omid() {
  this_font = "Omid";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.0";
  font_creator = "امید امامیان";
  font_weights = ['200', '300', '400', '700'];
  font_buyable = false;
  font_shop_domain = null;
  font_shop_url = null;
  fontfaceURLSet();
}

function On() {
  this_font = "On";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "امیر مصباحی";
  font_weights = ['300', '400', '500', '600', '700', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-آن-on";
  fontfaceURLSet();
}

function Pelak() {
  this_font = "Pelak";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "0.2";
  font_creator = "کامیاب جعفری";
  font_weights = ['100', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-پلاک";
  fontfaceURLSet();
}

function PelakFN() {
  this_font = "PelakFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "0.2";
  font_creator = "کامیاب جعفری";
  font_weights = ['100', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-پلاک";
  fontfaceURLSet();
}

function Peyda() {
  this_font = "Peyda";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.0";
  font_creator = "ناصر خادم";
  font_weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-پیدا";
  fontfaceURLSet();
}

function Pinar() {
  this_font = "Pinar";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.0";
  font_creator = "امین عابدی";
  font_weights = ['300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontamin.com";
  font_shop_url = "https://fontamin.com/product/فونت-تیتر-فانتزی-پینار";
  fontfaceURLSet();
}

function PinarFN() {
  this_font = "PinarFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.0";
  font_creator = "امین عابدی";
  font_weights = ['300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontamin.com";
  font_shop_url = "https://fontamin.com/product/فونت-تیتر-فانتزی-پینار";
  fontfaceURLSet();
}

function Ravi() {
  this_font = "Ravi";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "رضا بختیاری‌فرد";
  font_weights = ['100', '300', '400', '500', '600', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "rbakhtiarifard.ir";
  font_shop_url = "http://rbakhtiarifard.ir/typefaces/ravi";
  fontfaceURLSet();
}

function Tahrir() {
  this_font = "Tahrir";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "0.1";
  font_creator = "رضا غفاری";
  font_weights = ['300', '400', '500', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-تحریر";
  fontfaceURLSet();
}

function Tajrid() {
  this_font = "Tajrid";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "رضا غفاری";
  font_weights = ['200', '300', '400', '500', '600', '700'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-تجرید";
  fontfaceURLSet();
}

function Traffic() {
  this_font = "Traffic";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "2.0";
  font_creator = "بابک مهربان";
  font_weights = ['100', '300', '400', '700', '800', '950'];
  font_buyable = true;
  font_shop_domain = "babart.ir";
  font_shop_url = "https://babart.ir/1398/06/فونت-ترافیک";
  fontfaceURLSet();
}

function Vanda() {
  this_font = "Vanda";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "امیر مصباحی";
  font_weights = ['300', '400', '500'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-وندا-vanda";
  fontfaceURLSet();
}

function VandaFN() {
  this_font = "VandaFN";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "امیر مصباحی";
  font_weights = ['300', '400', '500'];
  font_buyable = true;
  font_shop_domain = "fontiran.com";
  font_shop_url = "https://fontiran.com/فونت-وندا-vanda";
  fontfaceURLSet();
}

function YekanBakh() {
  this_font = "YekanBakh";
  previousFontSet();
  nextFontSet();
  fontNameSet();
  font_version = "1.0";
  font_creator = "رضا بختیاری‌فرد";
  font_weights = ['100', '200', '300', '400', '500', '700', '800', '900'];
  font_buyable = true;
  font_shop_domain = "rbakhtiarifard.ir";
  font_shop_url = "http://rbakhtiarifard.ir/typefaces/yekanbakh";
  fontfaceURLSet();
}