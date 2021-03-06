import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmazonPay,
} from 'react-icons/fa';

export default function Fotter() {
  return (
    <footer>
      <div className="footer footer-top">
        <Link href="/">
          <a className="logo">Quantum</a>
        </Link>
        <div className="footer-nav">
          <Link href="/">
            <a>Shop</a>
          </Link>
          <Link href="/">
            <a>Journal</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Contacts</a>
          </Link>
        </div>

        <div className="social-links">
          <Link href="/">
            <a>
              <FaFacebookF color="#d8d8d8" size="18px" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <FaTwitter color="#d8d8d8" size="18px" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <FaInstagram color="#d8d8d8" size="18px" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <FaYoutube color="#d8d8d8" size="18px" />
            </a>
          </Link>
        </div>
      </div>
      <div className="footer footer-bottom">
        <div className="texts">
          <p>© 2016. Quantum UI kit</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <div className="payment-info">
          <p className="text">Accepted payment methods</p>
          <div className="payment-methods">
            <div>
              <FaCcVisa color="#424242" size="32px" />
            </div>
            <div>
              <FaCcMastercard color="#424242" size="32px" />
            </div>
            <div>
              <FaCcPaypal color="#424242" size="32px" />
            </div>
            <div>
              <FaCcAmazonPay color="#424242" size="32px" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        footer {
          width: 100vw;
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          background-color: #ffffff;
          box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.05);
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
          overflow-x: hidden;
        }
        footer .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 28px 10vw;
        }
        footer .footer-top .logo {
          font-style: normal;
          font-weight: 900;
          font-size: 22px;
          line-height: 60px;
          letter-spacing: 1.65px;
          text-transform: uppercase;
          color: #4d4d4d;
          text-decoration: none;
        }
        footer .footer-top .footer-nav {
          display: flex;
          align-items: center;
        }
        footer .footer-top .footer-nav a {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: #666666;
          text-decoration: none;
          margin-left: 18px;
          margin-right: 18px;
        }
        footer .footer-top .footer-nav a:hover {
          text-decoration: underline;
        }
        footer .footer-top .social-links a {
          margin-left: 12px;
          margin-right: 12px;
        }
        /* Footer Bottom */
        footer .footer-bottom {
          border-top: 2px solid #f5f5f5;
        }
        footer .footer-bottom .texts {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        footer .footer-bottom .texts p {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 60px;
          color: #b3b3b3;
          margin-right: 15px;
          margin-left: 15px;
        }
        footer .footer-bottom .payment-info {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        footer .footer-bottom .payment-info .text {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 60px;
          color: #b3b3b3;
        }
        footer .footer-bottom .payment-info .payment-methods {
          display: flex;
          flex-direction: row;
          margin-left: 12px;
        }
        footer .footer-bottom .payment-info .payment-methods div {
          margin-left: 5px;
          margin-right: 5px;
        }
      `}</style>
    </footer>
  );
}
