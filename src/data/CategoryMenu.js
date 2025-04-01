const menuItems = [
  {
    title: "لوازم خانگی",
    src: "/img/home.png",
    link: "#",
    submenu: [
      {
        title: "دکوراسیون",
        link: "/products/clothing",
        subMenu: [
          { title: "ساعت دیواری", link: "#" },
          { title: " چراغ خواب", link: "#" },
          { title: "  ماکت و مجسمه", link: "#" },
          { title: "  سایر لوازم تزیینی", link: "#" },
        ],
      },
      {
        title: "لوازم اشپزخانه",
        link: "/products/shoes",
        subMenu: [
          { title: " چاقو ", link: "#" },
          { title: "  خرد کن", link: "#" },
          { title: "   ابزار اشپزی ", link: "#" },
          { title: "  انواع ظروف  ", link: "#" },
          { title: "  سایر لوازم اشپزخانه", link: "#" },
        ],
      },
      {
        title: "کاربردی منزل",
        link: "/products/accessories",
        subMenu: [
          { title: "جاکفشی ", link: "#" },
          { title: "   چوب لباسی", link: "#" },
          { title: "    لامپ ", link: "#" },
          { title: "  سایر لوازم کاربردی منزل", link: "#" },
        ],
      },
      {
        title: " ابزار",
        link: "/products/accessories",
        subMenu: [
          { title: "کارواش ", link: "#" },
          { title: "    قیچی", link: "#" },
          { title: "    اچار ", link: "#" },
          { title: "   سایر ابزار ", link: "#" },
        ],
      },
    ],
  },
  {
    title: "لوازم شخصی",
    link: "#",
    src: "/img/boy.png",
    submenu: [
      {
        title: "آرایشی و زیبایی",
        link: "/products/clothing",
        subMenu: [
          { title: "کیف لوازم ارایشی ", link: "#" },
          { title: "    لوازم مو ", link: "#" },
          { title: "    اتو و حالت دهده ", link: "#" },
          { title: "  لوازم ارایش و زیباییزار ", link: "#" },
          { title: "  سایر لوازم  ارایشی", link: "#" },
        ],
      },
      {
        title: "عطر و اسپری",
        link: "/products/shoes",
        subMenu: [
          { title: "مردانه", link: "#" },
          { title: "   زنانه", link: "#" },
          { title: "   اسپرت", link: "#" },
          { title: "  سایر عطر و اسپری", link: "#" },
        ],
      },
      {
        title: "لوازم کودک",
        link: "/products/accessories",
        subMenu: [
          { title: "دکوراسیون اتاق ", link: "#" },
          { title: "  حمام لوازم بهداشتی و ", link: "#" },
          { title: "  سایر لوازم  کودک", link: "#" },
        ],
      },
      {
        title: " بهداشت و مراقبت",
        link: "/products/accessories",
        subMenu: [
          { title: "صورت ", link: "#" },
          { title: "   اصلاح موی بدن", link: "#" },
          { title: "  سایر لوازم  بهداشتی", link: "#" },
        ],
      },

      {
        title: "   زیور الات ",
        link: "/products/accessories",
        subMenu: [
          { title: "انگشتر", link: "#" },
          { title: "   دستبند", link: "#" },
          { title: "  گردنبند", link: "#" },
          { title: "  گوشواره", link: "#" },
          { title: "  سایر لوازم  زیور الات", link: "#" },
        ],
      },
    ],
  },
  {
    title: "لوازم دیجیتال",
    link: "#",
    src: "/img/dgital.png",
    submenu: [
      {
        title: "دوربین",
        link: "/services/consulting",
        subMenu: [
          { title: "فیلم برداری", link: "#" },
          { title: "   عکس برداری", link: "#" },
          { title: "  سایر لوازم   دوربین", link: "#" },
        ],
      },
      {
        title: "لوازم موبایل و تبلت",
        link: "/services/design",
        subMenu: [
          { title: "شارژر وکابل", link: "#" },
          { title: "   لنر دوربین", link: "#" },
          { title: "  هدست و هدفون", link: "#" },
          { title: "  هولدر", link: "#" },
          { title: "  سایر لوازم  موبایل", link: "#" },
        ],
      },
      {
        title: " صوتی و تصویری",
        link: "/services/design",
        subMenu: [
          { title: "پخش کننده موسیقی", link: "#" },
          { title: "   هدفون", link: "#" },
          { title: "    بلند گو و اسپیکر", link: "#" },
          { title: "  سایر لوازم  تصویریو صوتی ", link: "#" },
        ],
      },
      {
        title: " لوازم جانبی کامپیوتر  ",
        link: "/services/design",
        subMenu: [
          { title: "اسپیکر", link: "#" },
          { title: "   موس", link: "#" },
          { title: "  کیبرد", link: "#" },
          { title: "  سایر لوازم  جانبی کامپیوتر ", link: "#" },
        ],
      },
    ],
  },
  {
    title: "لوازم خودرو",
    link: "#",
    src: "/img/car.png",
    submenu: [
      { title: "لوازم کاربردی", link: "/services/consulting" },
      { title: " چرخ خودرو", link: "/services/design" },
      { title: " تعمیرات و نگهداری  ", link: "/services/design" },
      { title: "  نظافت ", link: "/services/design" },
      { title: " خوشبو کننده    ", link: "/services/design" },
    ],
  },
  {
    title: " مد و پوشاک",
    link: "#",
    src: "/img/clothes(1).png",
    submenu: [
      {
        title: "لباس زنانه",
        link: "/services/consulting",
        subMenu: [
          { title: "بافت", link: "#" },
          { title: "   روسری و شال", link: "#" },
          { title: "  لباس ورزشی", link: "#" },
          { title: "  کلاه", link: "#" },
          { title: " سایر مد و پوشاک بانوان", link: "#" },
        ],
      },
      {
        title: " ساعت مچی",
        link: "/services/design",
        subMenu: [
          { title: "مردانه", link: "#" },
          { title: "   زنانه", link: "#" },
          { title: "  هوشمند", link: "#" },
          { title: "  سایر  ساعت ", link: "#" },
        ],
      },
      {
        title: "  کیف و کفش ",
        link: "/services/design",
        subMenu: [
          { title: "زنانه", link: "#" },
          { title: "   مردانه", link: "#" },
          { title: " سایر    ", link: "#" },
        ],
      },
      {
        title: "  لباس مردانه ",
        link: "/services/design",
        subMenu: [
          { title: "بافت", link: "#" },
          { title: "   پیراهن", link: "#" },
          { title: "  شلوار", link: "#" },
          { title: "  کلاه", link: "#" },
          { title: " کفش    ", link: "#" },
          { title: " سایر    ", link: "#" },
        ],
      },
      {
        title: " عینک افتابی    ",
        link: "/services/design",
        subMenu: [
          { title: "مردانه", link: "#" },
          { title: "   پیراهن", link: "#" },

          { title: " سایر    ", link: "#" },
        ],
      },
    ],
  },
];
export default menuItems;
