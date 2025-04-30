import AboutInfo from "./AboutInfo";
import AboutUs from "./AboutUs";
import { AccordionMobile } from "./AccordionMobile";
import CategoryMenuPc from "./CategoryMenuPc";

function Fotter() {
  return (
    <div>
      <AboutInfo />
      <AccordionMobile />
      <CategoryMenuPc />
      <AboutUs />
      <p className="p-2 text-center text-xs md:text-sm mt-15">
        ۱۴۰۴-1391 تمامی حقوق مادی و معنوی این سایت متعلق به دیری شاپ می‌باشد.
      </p>
    </div>
  );
}

export default Fotter;
