import siteLogo from "../../../assets/admissionGurruLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer border-t-2 p-10 text-base-content">
        <div>
          <img className="w-40" src={siteLogo} alt="logo" />
          <p>
            AdmissionGuru Ltd.
            <br />
            Providing top college seats since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 border-y-2 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by AdmissionGuru Ltd.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
