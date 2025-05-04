import "../styles/dynamicvue.css";
import dynamicVueLogo from "../assets/dynamicVue.png";

const DynamicVue = () => {
  return (
    <div className="prices-page">

<header className="prices-header">
  <div className="business-banner">
    <img src={dynamicVueLogo} alt="Dynamic VUE Logo" className="business-logo" />
  </div>
  <div className="header-text">
    <h1>Dynamic VUE Imaging Services</h1>
    <p>Explore our full range of diagnostic ultrasound services below. All scans are performed with precision and interpreted by a board-certified radiologist to ensure accurate and reliable results.</p>
  </div>
</header>

      <section className="business-section">



        <ul className="services-list">
          <li><strong>Abdomen Complete</strong> - $130 <p>Comprehensive ultrasound for the abdomen area.</p></li>
          <li><strong>Liver Ultrasound</strong> - $125 <p>Examines the liver and surrounding organs.</p></li>
          <li><strong>Gallbladder Ultrasound</strong> - $125 <p>Detects abnormalities in the gallbladder.</p></li>
          <li><strong>Kidney Ultrasound</strong> - $125 <p>Evaluates kidneys for stones or cysts.</p></li>
          <li><strong>Pelvic Ultrasound</strong> - $125 <p>Scans uterus, ovaries, and other pelvic organs.</p></li>
          <li><strong>Trans-vaginal Ultrasound</strong> - $125 <p>Internal scan for detailed pelvic imaging.</p></li>
          <li><strong>Thyroid Ultrasound</strong> - $125 <p>Detects thyroid abnormalities.</p></li>
          <li><strong>Scrotum Ultrasound</strong> - $125 <p>Evaluates testicular health.</p></li>
          <li><strong>Unilateral Breast Ultrasound</strong> - $125 <p>Examines one breast for issues.</p></li>
          <li><strong>Bilateral Breast Ultrasound</strong> - $125 <p>Examines both breasts.</p></li>
          <li><strong>Pelvic & Trans-vaginal Combo</strong> - $160 <p>Combined pelvic and trans-vaginal exam.</p></li>
          <li><strong>Obstetrical 1st Trimester</strong> - $125 <p>For pregnancies under 12 weeks.</p></li>
          <li><strong>Obstetrical 2nd Trimester</strong> - $150 <p>For pregnancies 13 weeks or more.</p></li>
          <li><strong>2nd Trimester Multi-gestation</strong> - $180 <p>For twin or multiple pregnancies.</p></li>
          <li><strong>Biophysical Profile</strong> - $75 <p>Assesses fetal health and movement.</p></li>
        </ul>
      </section>

      <section className="cta-container">
  <button
    className="cta-button"
    onClick={() =>
      (window.location.href =
        "mailto:deann@dynamicvueimaging.com?subject=Appointment Request&body=I would like to schedule an [service] appointment. Please let me know your availability. [preferred contact method]")
    }
  >
    Schedule an Appointment
  </button>
  <p>Direct link coming soon.</p>
</section>

    </div>
  );
};

export default DynamicVue;
